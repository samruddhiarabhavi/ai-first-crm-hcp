# AI-First CRM – HCP Interaction Module

## Overview
This project implements an AI-first CRM module for logging Healthcare Professional (HCP) interactions.
Field representatives can log interactions either via a structured form or conversational AI interface.

## Tech Stack
- Frontend: React + Redux Toolkit + Vite
- Backend: FastAPI (Python)
- AI Agent Framework: LangGraph
- LLM: Groq (gemma2-9b-it)
- Database: PostgreSQL / MySQL
- Styling: Google Inter Font

## AI Architecture
- LangGraph orchestrates sales tools
- LLM extracts summary, sentiment, follow-ups, compliance
- Tools:
  - Log Interaction
  - Edit Interaction
  - Generate Summary
  - Suggest Follow-ups
  - Compliance Check

## Setup Instructions

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
