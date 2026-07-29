import React from 'react'
import { Link } from 'react-router-dom'
import { Heart, HandHeart, Share2, Users } from 'lucide-react'

const QuickDonate: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-hri-green text-hri-cream relative overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-hri-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-hri-green-light/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ways to Make a Difference
          </h2>
          <p className="text-lg sm:text-xl text-hri-cream/90 font-light leading-relaxed mb-4">
            Every family deserves a chance to move forward. Hardship can happen suddenly. A missed paycheck. An unexpected expense. A family struggling to keep food on the table or essentials in the home. But with the right support at the right time, a crisis does not have to define a family’s future. Your support helps families move from crisis toward stability — one household, one act of kindness, and one step forward at a time.
          </p>
          <div className="w-16 h-[2px] bg-hri-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-hri-gold font-semibold uppercase tracking-wider">
            HELP A HOUSEHOLD MOVE FROM CRISIS TO STABILITY
          </p>
        </div>

        {/* Ways to Help Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-20">

          {/* Give Financially */}
          <div className="bg-hri-green-dark/30 p-8 border border-hri-gold/20 hover:border-hri-gold/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hri-gold/10 rounded-full text-hri-gold">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold">GIVE FINANCIALLY</h3>
            </div>
            <p className="text-hri-cream/80 leading-relaxed font-light mb-4 text-sm sm:text-base">
              Your donation helps strengthen the Household Resilience Fund, providing timely support to families facing urgent hardship.
              Your generosity can help provide emergency financial assistance, food, diapers, and essential household supplies to families navigating difficult moments — with compassion, dignity, and respect.
            </p>
            <p className="text-hri-cream/80 leading-relaxed font-light text-sm sm:text-base italic border-l-2 border-hri-gold pl-4">
              Because when a family has the essentials they need to get through today, they have more room to focus on building a better tomorrow.
            </p>
          </div>

          {/* Volunteer Your Time */}
          <div className="bg-hri-green-dark/30 p-8 border border-hri-gold/20 hover:border-hri-gold/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hri-gold/10 rounded-full text-hri-gold">
                <HandHeart size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold">VOLUNTEER YOUR TIME</h3>
            </div>
            <p className="text-hri-cream/80 leading-relaxed font-light text-sm sm:text-base">
              Sometimes the greatest gift is simply showing up.
              Join us at food distributions, clothing drives, community outreach events, resource centers, and other community initiatives.
              Your time, your presence, and your kindness can remind a family facing hardship of something incredibly important:
              They are not alone.
            </p>
          </div>

          {/* Advocate & Share */}
          <div className="bg-hri-green-dark/30 p-8 border border-hri-gold/20 hover:border-hri-gold/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hri-gold/10 rounded-full text-hri-gold">
                <Share2 size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold">ADVOCATE & SHARE</h3>
            </div>
            <p className="text-hri-cream/80 leading-relaxed font-light text-sm sm:text-base">
              Change begins when more people understand the challenges families face.
              Share our mission. Follow our work. Talk about the realities of household hardship in your community. Help us spread awareness and amplify the voices of families working every day to rebuild.
              One share can connect a family to support. One conversation can inspire action.
            </p>
          </div>

          {/* Partner With Us */}
          <div className="bg-hri-green-dark/30 p-8 border border-hri-gold/20 hover:border-hri-gold/50 transition-colors">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-hri-gold/10 rounded-full text-hri-gold">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold">PARTNER WITH US</h3>
            </div>
            <p className="text-hri-cream/80 leading-relaxed font-light text-sm sm:text-base mb-4">
              Lasting change is built together.
              Businesses, community organizations, foundations, faith communities, and individuals can help create meaningful impact through sponsorships, in-kind donations, partnerships, and collaborative programs.
            </p>
            <p className="text-hri-cream/80 leading-relaxed font-light text-sm sm:text-base italic border-l-2 border-hri-gold pl-4">
              When communities work together, support reaches farther, resources go further, and families have a stronger foundation on which to rebuild.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex flex-col w-full gap-3 items-center mb-8 justify-center">
            <h3 className="text-3xl font-serif font-bold">
              YOUR SUPPORT IS MORE THAN A DONATION.
            </h3>
            <p className="text-hri-cream/80 leading-tight tracking-tight font-light text-sm">
              It can be a meal when the pantry is empty.
              A diaper when a parent is running out.
              Help with an urgent bill.
              A caring person who listens.
              A reminder that someone still believes in a family’s future.
              Together, we don’t simply respond to hardship. We help create the conditions for families to recover, rebuild, and grow stronger.
              Because resilience starts at home. 💛
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              to="/donation"
              className="w-full sm:w-auto px-8 py-4 bg-hri-gold text-hri-green font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-white transition-colors"
            >
              Donate Now
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-hri-gold font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-hri-gold hover:text-white transition-colors"
            >
              Volunteer
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 border border-hri-cream text-hri-cream font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-hri-cream hover:text-hri-green transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default QuickDonate
