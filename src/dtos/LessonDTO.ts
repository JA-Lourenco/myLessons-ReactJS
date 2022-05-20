import { SelectedDaysProps } from "../pages/Insert"

export interface LessonDTO {
    id: string
    lesson: string
    obs: string
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
    sunday: string
    days: SelectedDaysProps[]
}