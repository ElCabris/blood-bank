from datetime import date

from pydantic import BaseModel

from app.db.tables.donor import GenderEnum, BloodTypeEnum, StateEnum

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
    last_name: str
    phone: str
    city: str
    medical_history_id: int
