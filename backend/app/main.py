from datetime import date

from fastapi import FastAPI

from app.api.v1.donor import donor_router
from app.db.crud.create.create_donor import add_donor
from app.db.init_database import init_db
from app.db.tables.donor import *

init_db()

app = FastAPI()

app.include_router(donor_router)
