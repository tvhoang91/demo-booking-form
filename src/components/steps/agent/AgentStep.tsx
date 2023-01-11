import { AgentModel, AGENT_DATA } from "@src/data/agents/agent.model"
import useBookingFormContext from "@src/store/context/useBookingFormContext"
import "./AgentStep.scss"

function AgentStep() {

  const { selectAgent, navNext } = useBookingFormContext(s => s, () => true)

  const context = useBookingFormContext(s => s.context)
  const selected = useBookingFormContext(s => s.selected)

  const agentList = AGENT_DATA.filter((agent) => {
    if (context.agents) {
      if (!context.agents.includes(agent.id)) {
        return false
      }
    }

    if (selected.service) {
      if (selected.service.excludeAgents.includes(agent.id)) {
        return false
      }
    }

    return true
  })

  function clickAgent(agent: AgentModel) {
    selectAgent(agent)
    navNext()
  }

  return (
    <div className="bf-agent-step">
      {agentList.map((agent) => (
        <div key={agent.id}
          className="bf-agent-card"
          onClick={() => clickAgent(agent)}
        >
          <div>{agent.name}</div>
          <div>{`${agent.workHour.start}h~${agent.workHour.end}h`}</div>
        </div>
      ))}
    </div>
  )
}

export default AgentStep