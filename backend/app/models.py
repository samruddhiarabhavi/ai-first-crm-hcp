from sqlalchemy import Column, Integer, String, Text
from app.database import Base

class Interaction(Base):
    __tablename__ = "interactions"
    id = Column(Integer, primary_key=True)
    hcp_name = Column(String)
    interaction_type = Column(String)
    topics = Column(Text)
    sentiment = Column(String)
    outcomes = Column(Text)
    follow_ups = Column(Text)
    raw_text = Column(Text)
