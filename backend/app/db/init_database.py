if __name__ == '__main__':
    from .data import Base, engine
    from .tables.bank import Bank  # pylint: disable=W0611
    from .tables.certificate import Certificate  # pylint: disable=W0611
    from .tables.donation import Donation  # pylint: disable=W0611
    from .tables.donation_site import DonationSite  # pylint: disable=W0611
    from .tables.donor import Donor  # pylint: disable=W0611
    from .tables.lot_blood import LotBlood  # pylint: disable=W0611
    from .tables.medical_history import MedicalHistory  # pylint: disable=W0611

    Base.metadata.create_all(engine)
