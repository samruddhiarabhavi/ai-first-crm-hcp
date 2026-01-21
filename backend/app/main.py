from fastapi import FastAPI
from app.api.interaction_routes import router

app = FastAPI(title="AI-First CRM HCP")
app.include_router(router, prefix="/api")
