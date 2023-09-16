import React from 'react';
import boatInAfricaImg from '../../images/boat-in-africa.png';
import SearchIcon from '@mui/icons-material/Search';

export default function Mockup() {
  return (
    <>
      <div className="bg-green">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="px-4 pt-4 pb-2 text-white">Currency Guru</h1>
              <p className="text-white px-4">
                Info on Spending Before Traveling
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="full-size-img">
        <img src={boatInAfricaImg} alt="Boat in Africa" />
        <div className="input-wrapper">
          <div>
            <input placeholder="Ask me about spending money abroad" />
            <SearchIcon className="search-icon" />
          </div>
        </div>
      </div>
    </>
  );
}
