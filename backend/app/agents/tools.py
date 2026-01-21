from app.llm.groq_client import client, MODEL

def llm(prompt):
    r = client.chat.completions.create(
        model=MODEL,
        messages=[{"role":"user","content":prompt}]
    )
    return r.choices[0].message.content

def log_interaction_tool(text): return llm(f"Extract CRM fields from: {text}")
def edit_interaction_tool(text): return llm(f"Edit interaction: {text}")
def summarize_tool(text): return llm(f"Summarize: {text}")
def followup_tool(text): return llm(f"Suggest follow-ups: {text}")
def compliance_tool(text): return llm(f"Check compliance risks: {text}")
