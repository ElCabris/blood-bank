from datetime import date
from typing import Optional

from fastapi import APIRouter, HTTPException, Response, status

from app.db.crud.create.create_donor import add_donor
from app.db.crud.read.read_donor import get_donor
from app.db.tables.donor import BloodTypeEnum, GenderEnum, StateEnum
from app.schemas.donor import Donor

donor_router = APIRouter()


@donor_router.get("/donor", response_model=Donor)
async def get_donor_by_id(id: int):
    donor = get_donor(id)

    if donor is not None:
        new_donor = Donor(
            id=donor.id,
            name=donor.name,
            gender=donor.gender,
            identity_card=donor.identity_card,
            email=donor.email,
            birth_date=donor.birth_date,
            blood_type=donor.blood_type,
            user=donor.user,
            password=donor.password,
            state=donor.state,
            last_name=donor.last_name,
            phone=donor.phone,
            city=donor.city,
            medical_history_id=donor.medical_history_id,
        )

        return new_donor
    return HTTPException(
        status_code=status.HTTP_404_NOT_FOUND, detail="Donor not found"
    )


@donor_router.post("/donor/", status_code=status.HTTP_201_CREATED)
async def set_donor(
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
):
    result = add_donor(
        name,
        identity_card,
        email,
        gender,
        birth_date,
        blood_type,
        user,
        password,
        state,
        last_name,
        phone,
        city,
        path,
    )

    if result is None:
        return HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="Donor creation faild"
        )
    return Response(status_code=status.HTTP_201_CREATED)
