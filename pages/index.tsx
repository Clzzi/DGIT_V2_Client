import Banner from 'components/Banner';
import Header from 'components/Header';
import Nav from 'components/Nav';
import PropertyBar from 'components/PropertyBar';
import UserList from 'components/UserList';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  // 로그인 토큰 없음 && code 없음 => 계정 버튼 없음 & 로그인버튼
  // 로그인 토큰 없음 && code 있음 => default ui & 서버에 로그인 & 메인으로 리다이렉트
  // 로그인 토큰 있음 && 계정 있음 => 계정 수정 버튼 & 로그아웃 버튼
  // 로그인 토큰 있음 && 계정 없음 => 계정 생성 버튼 & 로그아웃 버튼

  return (
    <div>
      <Header />
      <Banner />
      <Nav />
      <PropertyBar />
      <UserList />
    </div>
  );
};

export default Home;
