import Token from 'lib/token';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { ACCESS_TOKEN_KEY } from 'constants/auth.constants';

const Header = dynamic(() => import('components/Header'));
const Banner = dynamic(() => import('components/Banner'));
const Nav = dynamic(() => import('components/Nav'));
const PropertyBar = dynamic(() => import('components/PropertyBar'));
const UserList = dynamic(() => import('components/UserList'));
const AccountButton = dynamic(() => import('components/AccountButton'));

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
