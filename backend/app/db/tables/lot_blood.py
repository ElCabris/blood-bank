import enum

from sqlalchemy import Column, Date, Float, ForeignKey, Integer

from app.db.data import Base


class TypeDonation(enum.Enum):
    PLATELETS = 0
    STEM_CELLS = 1
    RED_BLOOD_CELL = 2


class LotBlood(Base):
    __tablename__: str = "lots_blood"

    id = Column(Integer, primary_key=True)
    date = Column(Date, nullable=False)
    liters = Column(Float, nullable=False)
    bank = Column(Integer, ForeignKey("banks.id"), nullable=False)
    donor_id = Column(Integer, ForeignKey("donors.id"), nullable=False)
