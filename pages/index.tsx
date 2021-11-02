import Banner from 'components/Banner';
import Header from 'components/Header';
import Nav from 'components/Nav';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />
    </div>
  );
};

export default Home;
