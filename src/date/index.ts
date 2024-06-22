import { formatInTimeZone } from 'date-fns-tz'

export function kst(): Date {
  const now = new Date()
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60000
  const koreaTimeDiff = 9 * 60 * 60000
  const koreanDateTime = new Date(utcNow + koreaTimeDiff)
  return koreanDateTime
}

export function formatKst(date: Date, format: string): string {
  return formatInTimeZone(date, 'Asia/Seoul', format)
}
