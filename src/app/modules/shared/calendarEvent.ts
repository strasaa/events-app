export interface CalendarEvent {
  id?: number;
  startTime: Date;
  endTime: Date;
  note?: string;
  employeeId: number;
  typeId: number;
  type?: string;
}
