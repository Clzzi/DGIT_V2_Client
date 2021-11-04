import AccountButton from 'components/AccountButton';
import Banner from 'components/Banner';
import Header from 'components/Header';
import Nav from 'components/Nav';
import PropertyBar from 'components/PropertyBar';
import UserList from 'components/UserList';
import Token from 'lib/token';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Nav />
      <PropertyBar />
      <UserList />
      {Token.getToken('access_token') && <AccountButton />}
    </div>
  );
};

export default Home;
