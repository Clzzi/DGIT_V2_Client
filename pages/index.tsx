import Head from 'next/head';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Banner from 'components/Banner';

const UserList = dynamic(() => import('components/UserList'));
const Nav = dynamic(() => import('components/Nav'), { ssr: false });
const Header = dynamic(() => import('components/Header'), { ssr: false });
const AccountButton = dynamic(() => import('components/AccountButton'));
const PropertyBar = dynamic(() => import('components/PropertyBar'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{'DGIT'}</title>
        <meta
          name="description"
          content="DGIT은 대구소프트웨어마이스터고 학생들의 개발 문화 개선을 위해 제작한 사이트입니다."
        />
        <meta property="og:title" content="DGIT" />
        <meta property="og:url" content="http://dgit.b1nd.com" />
        <meta
          property="og:description"
          content="DGIT은 대구소프트웨어마이스터고 학생들의 개발 문화 개선을 위해 제작한 사이트입니다."
        />
      </Head>
      <Header />
      <Banner />
      <Nav />
      <PropertyBar />
      <UserList />
      <AccountButton />
    </div>
  );
};

export default Home;
