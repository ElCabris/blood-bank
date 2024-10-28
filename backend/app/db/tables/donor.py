import enum

from sqlalchemy import Column, Date, Enum, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.db.data import Base


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
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


class Donor(Base):

    __tablename__ = "donors"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    gender = Column(Enum(GenderEnum), nullable=False)
    identity_card = Column(String, nullable=False, unique=True)
    email = Column(String, nullable=False, unique=True)
    birth_date = Column(Date, nullable=False)
    blood_type = Column(Enum(BloodTypeEnum), nullable=False)
    user = Column(String, nullable=False, unique=True)
    password = Column(String, nullable=False, unique=True)
    state = Column(Enum(StateEnum), nullable=False)

    # optional columns
    last_name = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    city = Column(String, nullable=True)
    medical_history_id = Column(
        Integer, ForeignKey("medical_history.id"), nullable=True
    )

    # relation
    medical_history = relationship("MedicalHistory")
