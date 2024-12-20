from sqlalchemy import Column, Integer, String

from app.db.data import Base


class Certificate(Base):
    __tablename__: str = "certificates"

    id = Column(Integer, primary_key=True)
    path = Column(String, nullable=False)
