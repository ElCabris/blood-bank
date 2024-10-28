# pylint: disable=unused-import

from .data import Base, engine
from .tables.bank import Bank
from .tables.certificate import Certificate
from .tables.donation import Donation
from .tables.donation_site import DonationSite
from .tables.donor import Donor
from .tables.lot_blood import LotBlood
from .tables.medical_history import MedicalHistory


def init_db() -> None:
    Base.metadata.create_all(engine)


if __name__ == "__main__":
    init_db()
