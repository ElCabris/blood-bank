from sqlalchemy import Column, Integer, String
from data import Base


class Certificate(Base):
    __tablename__: str = "Certificate"
    
    id = Column(Integer, primary_key=True)
    path = Column(String, nullable=False)