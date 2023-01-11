import "./ServiceStep.scss"

import { ServiceModel, SERVICE_DATA } from "@src/data/services/service.model"
import useBookingFormContext from "@src/store/context/useBookingFormContext"

function ServiceStep() {

  const { selectService, navNext } = useBookingFormContext(s => s, () => true)

  const selected = useBookingFormContext(s => s.selected)
  const serviceList = SERVICE_DATA.filter((service) => {
    if (selected.agent) {
      if (service.excludeAgents.includes(selected.agent.id)) {
        return false
      }
    }

    return true
  })

  function clickService(service: ServiceModel) {
    selectService(service)
    navNext()
  }

  return (
    <div className="bf-service-step">
      {serviceList.map((service) => (
        <div key={service.id}
          className="bf-service-card"
          onClick={() => clickService(service)}
        >
          <div>{service.name}</div>
          <div>${service.price}</div>
        </div>
      ))}
    </div>
  )
}

export default ServiceStep