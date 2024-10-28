from typing import Optional

from fastapi import APIRouter

from app.db.crud.read.read_donor import get_donor
from app.schemas.donor import Donor

donor_router = APIRouter()


@donor_router.get("/donor")
async def get_donor_by_id(id: int) -> Optional[Donor]:
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
    return None
