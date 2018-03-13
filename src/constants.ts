export interface PerformanceOverview {
  title: string
  date: string
  time: string
  description?: string
  venue?: string
  location?: string
  link?: string
}

export interface PhotoCollection {
  id: string
  name: string
  description: string
  photos: string[]
}