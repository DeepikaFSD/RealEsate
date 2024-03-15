import React from 'react';

// import components
import HouseList from '../components/HouseList.jsx';
import Banner from '../components/Banner.jsx';

const Home = () => {
  return (
    <div className="min-h-[2500px]">
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
