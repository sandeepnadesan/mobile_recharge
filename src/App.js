import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const providers = [
    { name: 'Singtel', img: 'singtel-logo.png' },
    { name: 'TPG Telecom', img: 'tpg-logo.png' },
    { name: 'Circles.Life', img: 'circles-life-logo.png' },
    { name: 'M1', img: 'm1-logo.png' },
    { name: 'StarHub', img: 'starhub-logo.png' },
    { name: 'MyRepublic', img: 'myrepublic-logo.png' },
    // { name: 'GoMo', img: 'gomo-logo.png' },
    // { name: 'redONE', img: 'redone-logo.png' },
    // { name: 'SIMBA', img: 'simba-logo.png' },
    // { name: 'Changi Mobile', img: 'changimobile-logo.png' },
    // { name: 'Geenet', img: 'geenet-logo.png' },
    // { name: 'ViewQwest', img: 'viewqwest-logo.png' },
    // { name: 'Giga', img: 'giga-logo.png' },
    // { name: 'Zero1', img: 'zero1-logo.png' },
  ];

  const specialProviders = [
    { name: 'Singtel', img: 'singtel-logo.png' },
    { name: 'StarHub', img: 'starhub-logo.png' },
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="app-header">
        <div className="navbar navbar-expand-lg bg-primary text-white p-3">
          <div className="container d-flex justify-content-center align-items-center">
            <span className="h5 mb-0 title text-center">Select Service Provider</span>
          </div>
        </div>
        <div className="bg-warning text-center py-2">
          <p className="mb-0">Dear customer, please recheck numbers twice before recharging.</p>
        </div>
      </header>

      {/* Body */}
      <div className="container card-container my-4">
        <h5 className="text-center mb-4">Available Service Providers</h5>
        <div className="row justify-content-center">
          {/* Loop through providers */}
          {providers.map((provider, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 my-3 d-flex align-items-stretch" key={index}>
              <div className="card text-center shadow-sm border-0 w-100">
                <div className="card-body">
                  <img src={`/images/${provider.img}`} alt={provider.name} className="card-img-top mx-auto my-2 provider-logo" />
                  <h6 className="card-title font-weight-bold">{provider.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Recharge Networks */}
        <h5 className="special-recharge-title text-center mt-5">Special Recharge Networks (Margin Low)</h5>
        <div className="row justify-content-center">
          {specialProviders.map((provider, index) => (
            <div className="col-lg-4 col-md-6 my-3 d-flex align-items-stretch" key={index}>
              <div className="card text-center shadow-sm border-0 w-100">
                <div className="card-body">
                  <img src={`/images/${provider.img}`} alt={provider.name} className="card-img-top mx-auto my-2 provider-logo" />
                  <h6 className="card-title font-weight-bold">{provider.name}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
