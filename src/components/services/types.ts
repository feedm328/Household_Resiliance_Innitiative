import React from 'react'

export interface ProgramData {
  id: number
  title: string
  tag: string
  description: string
  longDescription: React.ReactNode | string
  materials?: string[]
  duration?: string
  impact?: string
  icon: React.ReactNode
}
