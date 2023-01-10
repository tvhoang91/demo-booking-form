import { getStep } from "@src/data/steps/step.model"
import { useCallback } from "react"
import useBookingFormContext from "../context/useBookingFormContext"

function useBookingFormSteps() {
  const stepsState = useBookingFormContext(s => s.steps)
  const currentStepModel = getStep(stepsState.stepsOrdered[stepsState.current])

  const { navNext, navPrev, unselectService, unselectAgent, unselectDatetime,
  } = useBookingFormContext(s => s, () => true)

  const canNavPrev = stepsState.current > 0
  const navPrevHandler = useCallback(() => {
    if (!canNavPrev) return

    const prevStepModel = getStep(stepsState.stepsOrdered[stepsState.current - 1])
    switch (prevStepModel.id) {
      case "service":
        unselectService()
        break
      case "agent":
        unselectAgent()
        break
      case "datetime":
        unselectDatetime()
        break
    }

    navPrev()
  }, [canNavPrev, stepsState])

  return {
    stepsState, currentStepModel, canNavPrev,
    navNextHandler: navNext, navPrevHandler
  }
}

export default useBookingFormSteps