import { DEFAULT_WORKHOUR, WorkHour } from "../datetime/datetime.model"

export type AgentModel = {
  id: number,
  name: string,
  workHour: WorkHour,
}

export const AGENT_DATA: AgentModel[] = [
  {
    id: 1,
    name: "Vanessa Mitchell",
    workHour: DEFAULT_WORKHOUR
  },
  {
    id: 2,
    name: "Jacquelyn Edwards",
    workHour: {
      start: 12,
      end: 20,
    }
  },
  {
    id: 3,
    name: "Pearl Shaw",
    workHour: DEFAULT_WORKHOUR
  },
  {
    id: 4,
    name: "Elias Joseph",
    workHour: DEFAULT_WORKHOUR
  },
  {
    id: 5,
    name: "Yolanda Houston",
    workHour: {
      start: 12,
      end: 20,
    }
  },
  {
    id: 6,
    name: "Willie Hamilton",
    workHour: {
      start: 5,
      end: 12,
    }
  },
]