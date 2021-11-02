import Banner from 'components/Banner';
import Header from 'components/Header';
import Nav from 'components/Nav';
import PropertyBar from 'components/PropertyBar';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />
      <PropertyBar />
    </div>
  );
};

export default Home;
