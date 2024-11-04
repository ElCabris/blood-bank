import React from 'react';
import MenuBank from '../components/MenuBank';
import { useState } from 'react';
import AddBatch from './AddBatch';
import DeleteBatch from './DeleteBatch';
import Statistics from './Statistics';
import BankEditProfile from './BankEditProfile';
import Chat from '../components/Chat';
import RequestDonor from '../components/RequestDonor';

function BankHome() {
  const [activateComponent, setActivateComponent] = useState('edit-profile');
  const donors = ['donante1', 'donante2', 'donante3'];

  const renderComponent = () => {
    switch (activateComponent) {
      case 'edit-profile':
        return <BankEditProfile />;
      case 'request-donor':
        return <RequestDonor />;
      case 'statistics':
        return <Statistics />;
      case 'add batch':
        return <AddBatch />;
      case 'delete batch':
        return <DeleteBatch />;
      case 'chat':
        return <Chat />;
      default:
        return <h2>Error</h2>;
    }
  };

  return (
    <>
      <div>
        <MenuBank donors={donors} setActivateComponent={setActivateComponent} />
      </div>
      <div>{renderComponent()}</div>
    </>
  );
}

export default BankHome;
