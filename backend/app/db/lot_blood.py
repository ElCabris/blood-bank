from data import Base
from sqlalchemy import Integer, Column, Date, Float, ForeignKey
import enum

class TypeDonation(enum.Enum):
    PLATELETS = 0
    STEM_CELLS = 1
    RED_BLOOD_CELL = 2

class LoteBlood(Base):
    __tablename__: str = "LotBlood"

    id = Column(Integer, primary_key=True)
    date = Column(Date, nullable=False)
    liters = Column(Float, nullable=False)
    bank = Column(Integer, ForeignKey('Bank.id'))
