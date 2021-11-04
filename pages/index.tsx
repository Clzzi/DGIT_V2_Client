import AccountButton from 'components/AccountButton';
import Banner from 'components/Banner';
import Header from 'components/Header';
import Nav from 'components/Nav';
import PropertyBar from 'components/PropertyBar';
import UserList from 'components/UserList';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';
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
      {Token.getToken(ACCESS_TOKEN_KEY) && <AccountButton />}
    </div>
  );
};

export default Home;
