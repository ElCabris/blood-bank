from typing import Optional
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.db.tables.medical_history import MedicalHistory
from app.db.data import engine


def add_medical_history(path: str) -> Optional[int]:

    with Session(engine) as session:
        try:
            medical_history = MedicalHistory(path=path)
            session.add(medical_history)
            session.commit()
            session.refresh(medical_history)
            return medical_history
        except IntegrityError:
            print(f"Error: path {path} already exists in table medical_history")
            return None
