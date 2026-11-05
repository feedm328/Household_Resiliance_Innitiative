// Set to false while building so you can click through steps without filling fields.
const ENFORCE_VALIDATION = true;

// All 8 steps are in place, so submission is enabled.
// While false, the last built step cannot submit (prevents partial applications being emailed).
const FORM_COMPLETE = true;

const form = document.getElementById("apply-form");
const steps = Array.from(document.querySelectorAll(".form-step"));
const totalSteps = steps.length;
const btnBack = document.getElementById("btn-back");
const btnNext = document.getElementById("btn-next");
const stepLabel = document.getElementById("step-label");
const stepCount = document.getElementById("step-count");
const progressFill = document.getElementById("progress-fill");
const buildNotice = document.getElementById("build-notice");
const modal = document.getElementById("submit-modal");
const modalContinue = document.getElementById("modal-continue-btn");

let currentStep = 0;
let submitting = false;

function showStep(index) {
  currentStep = index;
  steps.forEach((s, i) => { s.hidden = i !== index; });
  stepLabel.textContent = steps[index].dataset.label || "";
  stepCount.textContent = `Step ${index + 1} of ${totalSteps}`;
  progressFill.style.width = `${((index + 1) / totalSteps) * 100}%`;
  btnBack.style.visibility = index === 0 ? "hidden" : "visible";

  const isLast = index === totalSteps - 1;
  btnNext.innerHTML = isLast && FORM_COMPLETE ? "Submit application" : "Next &rarr;";
  buildNotice.hidden = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearErrors(step) {
  step.querySelectorAll(".has-error").forEach((el) => el.classList.remove("has-error"));
}

function validateStep(step) {
  clearErrors(step);
  if (!ENFORCE_VALIDATION) return true;
  let firstBad = null;
  const markBad = (el) => {
    const wrapper = el.closest(".field, .field-group, .cert-box") || el;
    wrapper.classList.add("has-error");
    if (!firstBad) firstBad = wrapper;
  };

  // Group checkboxes (cert box or .checkbox-group[data-required]): every required box must be ticked,
  // or for a data-required group at least one.
  const handledBoxes = new Set();
  step.querySelectorAll(".cert-box").forEach((box) => {
    const boxes = Array.from(box.querySelectorAll('input[type="checkbox"]'));
    boxes.forEach((b) => handledBoxes.add(b));
    if (boxes.some((b) => b.required && !b.checked)) markBad(box);
  });
  step.querySelectorAll(".checkbox-group[data-required]").forEach((group) => {
    const boxes = Array.from(group.querySelectorAll('input[type="checkbox"]'));
    boxes.forEach((b) => handledBoxes.add(b));
    if (!boxes.some((b) => b.checked)) markBad(group);
  });

  // Radios by name
  const radioNames = new Set();
  step.querySelectorAll('input[type="radio"][required]').forEach((r) => radioNames.add(r.name));
  radioNames.forEach((name) => {
    const group = step.querySelectorAll(`input[type="radio"][name="${name}"]`);
    if (!Array.from(group).some((r) => r.checked)) markBad(group[0]);
  });

  // Everything else that is required and visible
  step.querySelectorAll("input[required], select[required], textarea[required]").forEach((el) => {
    if (el.type === "radio" || handledBoxes.has(el)) return;
    if (el.closest("[hidden]")) return;
    if (el.type === "checkbox") { if (!el.checked) markBad(el); return; }
    if (!el.value.trim() || !el.checkValidity()) markBad(el);
  });

  if (firstBad) firstBad.scrollIntoView({ behavior: "smooth", block: "center" });
  return !firstBad;
}

function collectData() {
  const data = {};
  new FormData(form).forEach((value, key) => {
    if (key in data) {
      if (!Array.isArray(data[key])) data[key] = [data[key]];
      data[key].push(value);
    } else {
      data[key] = value;
    }
  });
  return data;
}

async function submitApplication() {
  if (submitting) return;
  submitting = true;
  btnNext.disabled = true;
  const original = btnNext.innerHTML;
  btnNext.textContent = "Submitting...";
  try {
    const res = await fetch("/api/submit-application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(collectData()),
    });
    if (!res.ok) throw new Error(`Server responded ${res.status}`);
    modal.hidden = false;
  } catch (err) {
    console.error(err);
    alert("Something went wrong submitting your application. Please check your connection and try again.");
  } finally {
    submitting = false;
    btnNext.disabled = false;
    btnNext.innerHTML = original;
  }
}

btnNext.addEventListener("click", () => {
  if (!validateStep(steps[currentStep])) return;
  if (currentStep < totalSteps - 1) {
    showStep(currentStep + 1);
  } else if (FORM_COMPLETE) {
    submitApplication();
  } else {
    buildNotice.hidden = false;
  }
});

btnBack.addEventListener("click", () => {
  if (currentStep > 0) showStep(currentStep - 1);
});

// Conditional fields: <div data-depends="fieldName=Value" hidden> with inputs marked data-conditional-required
function updateConditionals() {
  form.querySelectorAll("[data-depends]").forEach((box) => {
    const [name, value] = box.dataset.depends.split("=");
    const checked = form.querySelector(`input[name="${name}"]:checked`);
    const show = !!checked && checked.value === value;
    box.hidden = !show;
    box.querySelectorAll("[data-conditional-required]").forEach((el) => {
      el.required = show;
      if (!show) { el.value = ""; box.classList.remove("has-error"); }
    });
  });
}
form.addEventListener("change", updateConditionals);

// "None of the above" is exclusive within a checkbox group
form.addEventListener("change", (e) => {
  const t = e.target;
  if (t.type !== "checkbox" || !t.closest(".checkbox-group")) return;
  const boxes = t.closest(".checkbox-group").querySelectorAll('input[type="checkbox"]');
  if (t.hasAttribute("data-exclusive") && t.checked) {
    boxes.forEach((b) => { if (b !== t) b.checked = false; });
  } else if (t.checked) {
    boxes.forEach((b) => { if (b.hasAttribute("data-exclusive")) b.checked = false; });
  }
});

// Prevent Enter key from submitting the form natively
form.addEventListener("submit", (e) => e.preventDefault());

// Clear an error as soon as the user fixes the field
form.addEventListener("input", (e) => {
  const wrapper = e.target.closest(".has-error");
  if (wrapper) wrapper.classList.remove("has-error");
});
form.addEventListener("change", (e) => {
  const wrapper = e.target.closest(".has-error");
  if (wrapper) wrapper.classList.remove("has-error");
});

modalContinue.addEventListener("click", () => {
  window.location.href = "index.html";
});

showStep(0);
