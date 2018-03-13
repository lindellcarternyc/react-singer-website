export interface ExportedDate {
  month: string
  day: string
}
export const formatDate = (inputDate: string): ExportedDate => {
  const [month, day] = inputDate.split(', ')[1].split(' ')
  return {
    month: month.substring(0, 3),
    day
  }
}

export const hasPassed = (date: string): boolean => {
  const dt = Date.parse(date)
  const now = Date.now()

  return dt < now
}