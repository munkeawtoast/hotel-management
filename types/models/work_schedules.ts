import { z } from 'zod'

const scheduleDate = z.enum([
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
])

const hourInADay = z.number().int().gte(0).lt(24)

const startAt = hourInADay
const endAt = hourInADay

export { scheduleDate, startAt, endAt }
export { id as workScheduleId } from './base'
