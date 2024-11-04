from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.bank import bank_router
from app.api.v1.donor import donor_router
from app.db.init_database import init_db

init_db()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(donor_router)
app.include_router(bank_router)
