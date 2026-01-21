from fastapi import APIRouter
from app.schemas import ChatRequest, InteractionCreate
from app.agents.graph import graph

router = APIRouter()

@router.post("/agent/chat")
def chat(req: ChatRequest):
    return graph.invoke({"input": req.message})

@router.post("/interaction/log")
def log(data: InteractionCreate):
    return {"status":"saved", "data":data}
