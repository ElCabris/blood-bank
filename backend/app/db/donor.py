from sqlalchemy import Column, Integer, String, Enum, Date
from data import Base
import enum

__tablename__: str = "Donor"

class GenderEnum(enum.Enum):
    FEMALE = "FEMALE"
    MALE = "MALE"

class Donor(Base):
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    last_name = Column(String)
    identity_card = Column(String, nullable=False)
    phone = Column(String)
    email = Column(String, nullable=False)
    city = Column(String)
    gender = Column(Enum(GenderEnum), nullable=False)
    birth_date = Column(Date, nullable=False)


