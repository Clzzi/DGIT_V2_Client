import Token from 'lib/token';
import Head from 'next/head';
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
  const prefix =
    process.env.NODE_ENV === 'production' ? 'http://dgit.b1nd.com' : '';
  return (
    <div>
      <Head>
        <title>{'DGIT'}</title>
      </Head>
      <Header />
      <Banner prefix={prefix} />
      <Nav />
      <PropertyBar />
      <UserList />
      {Token.getToken(ACCESS_TOKEN_KEY) && <AccountButton />}
    </div>
  );
};

export default Home;
