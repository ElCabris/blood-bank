import MenuDonor from '../components/MenuDonor';
import DonationHistory from './DonationHistory';
import DonationSites from './DonationSites';
import DonorEditProfile from './DonorEditProfile';
import React, { useState } from 'react';
import Chat from '../components/Chat';

function DonorHome() {
  const banks = ['banco 1', 'banco 2', 'banco 3'];
  const [activeComponent, setActiveComponent] = useState('edit-profile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'edit-profile':
        return <DonorEditProfile />;
      case 'chat':
        return <Chat />;
      case 'donation-sites':
        return <DonationSites />;
      case 'donation-history':
        return <DonationHistory />;
      default:
        return <div>Component dont found</div>;
    }
  };
  return (
    <>
      <div>
        <MenuDonor banks={banks} setActivateComponent={setActiveComponent} />
      </div>
      <div>{renderComponent()}</div>
    </>
  );
}

export default DonorHome;
