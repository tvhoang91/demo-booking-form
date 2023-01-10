export type ServiceModel = {
  id: number,
  name: string,
  excludeAgents: number[],
  price: number,
}

export const SERVICE_DATA: ServiceModel[] = [
  {
    id: 1,
    name: "Haircut",
    excludeAgents: [],
    price: 20,
  },
  {
    id: 2,
    name: "Haircut & Color",
    excludeAgents: [],
    price: 50,
  },
  {
    id: 3,
    name: "Beard Trim",
    excludeAgents: [1, 2, 3, 4],
    price: 10,
  },
  {
    id: 4,
    name: "Kids Haircut",
    excludeAgents: [5, 6],
    price: 15,
  },
  {
    id: 5,
    name: "Blowout",
    excludeAgents: [1, 2],
    price: 30,
  },
]
