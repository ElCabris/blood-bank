from datetime import date
from typing import Optional

from pydantic import BaseModel

from app.db.tables.donor import BloodTypeEnum, GenderEnum, StateEnum


class Donor(BaseModel):
    id: int
    name: str
    gender: GenderEnum
    identity_card: str
    email: str
    birth_date: date
    blood_type: BloodTypeEnum
    user: str
    password: str
    state: StateEnum
    last_name: Optional[str]
    phone: Optional[str]
    city: Optional[str]
    medical_history_id: Optional[int]
