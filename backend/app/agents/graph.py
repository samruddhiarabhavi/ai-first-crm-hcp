from langgraph.graph import StateGraph
from app.agents.tools import *

class State(dict): pass

g = StateGraph(State)
g.add_node("log", lambda s: {"log": log_interaction_tool(s["input"])})
g.add_node("summary", lambda s: {"summary": summarize_tool(s["input"])})
g.add_node("follow", lambda s: {"follow": followup_tool(s["input"])})
g.add_node("compliance", lambda s: {"compliance": compliance_tool(s["input"])})

g.set_entry_point("log")
g.add_edge("log","summary")
g.add_edge("summary","follow")
g.add_edge("follow","compliance")

graph = g.compile()
