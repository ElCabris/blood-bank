from sqlalchemy import Column, Integer, String, Enum, Date, ForeignKey
from data import Base
import enum


class GenderEnum(enum.Enum):
    FEMALE = "FEMALE"
    MALE = "MALE"

class BloodTypeEnum(enum.Enum):
    A_POSITIVE = "A+"
    A_NEGATIVE = "A-"
    B_POSITIVE = "B+"
    B_NEGATIVE = "B-"
    AB_POSITIVE = "AB+"
    AB_NEGATIVE = "AB-"
    O_POSITIVE = "O+"
    O_NEGATIVE = "O-"

class StateEnum(enum.Enum):
    ENABLED = 'ENABLED'
    DISABLED = 'DISABLED'

class Donor(Base):
    __tablename__: str = "Donor"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    last_name = Column(String)
    identity_card = Column(String, nullable=False)
    phone = Column(String)
    email = Column(String, nullable=False)
    city = Column(String)
    gender = Column(Enum(GenderEnum), nullable=False)
    birth_date = Column(Date, nullable=False)
    blood_type = Column(Enum(BloodTypeEnum), nullable=False)
    medical_history_id = Column(Integer, ForeignKey('MedicalHistory.id'), nullable=False)
    user = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False)
    state = Column(Enum(StateEnum), nullable=False)

