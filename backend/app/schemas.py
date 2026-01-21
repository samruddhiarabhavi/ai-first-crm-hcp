from pydantic import BaseModel

class InteractionCreate(BaseModel):
    hcp_name: str | None = None
    interaction_type: str | None = None
    topics: str | None = None
    sentiment: str | None = None
    outcomes: str | None = None
    follow_ups: str | None = None
    raw_text: str | None = None

class ChatRequest(BaseModel):
    message: str
