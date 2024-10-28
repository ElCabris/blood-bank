import re
from datetime import date
from typing import Optional

from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.db.crud.create.create_medical_history import add_medical_history
from app.db.data import engine
from app.db.tables.donor import BloodTypeEnum, Donor, GenderEnum, StateEnum


def is_email(email: str) -> bool:
    regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"

    return re.match(regex, email) is not None


def add_donor(
    name: str,
    identity_card: str,
    email: str,
    gender: GenderEnum,
    birth_date: date,
    blood_type: BloodTypeEnum,
    user: str,
    password: str,
    state: StateEnum,
    last_name: Optional[str] = None,
    phone: Optional[str] = None,
    city: Optional[str] = None,
    path: Optional[str] = None,
) -> Optional[int]:
    try:
        if not is_email(email):
            raise ValueError(f"{email} is not valid email")

        if birth_date > date.today():
            raise ValueError(
                f"{birth_date} is not valid date. The date must be less than the current day"
            )
    except ValueError as e:
        print(e)

    medical_history = add_medical_history(path) if path else None

    with Session(engine) as session:
        try:
            donor = Donor(
                name=name,
                identity_card=identity_card,
                last_name=last_name,
                phone=phone,
                city=city,
                password=password,
                state=state,
                user=user,
                gender=gender,
                blood_type=blood_type,
                birth_date=birth_date,
                email=email,
                medical_history=medical_history,
            )

            session.add(donor)
            session.commit()

            print(f"Donor '{name}' added sucessfully")
            session.refresh(donor)
            return donor
        except IntegrityError as e:
            session.rollback()
            print(str(e))
            return None
