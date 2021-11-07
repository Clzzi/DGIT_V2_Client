import * as S from './styles';
import { ISSUE_URL, REPO_URL, WRITER_URL } from 'constants/help.constants';

const Help = (): JSX.Element => {
  return (
    <S.Help>
      <S.HelpTitle>
        <div>안내사항</div>
      </S.HelpTitle>
      <S.HelpContent>
        <li>대구 소프트웨어 고등학교 재학생 혹은 졸업생 대상입니다.</li>
        <li>
          비공개 저장소를 기여도로 표시하면 모든 기여도를 확인할 수
          있습니다(Github 설정)
        </li>
        <li>주간 기여도는 일요일부터 토요일까지의 기여도가 집계된 것입니다.</li>
        <li>데이터는 하루 7번 동기화됩니다.</li>
        <li>
          사용자 정보 삭제는{' '}
          <a href={WRITER_URL} target="_blank" rel="noreferrer">
            제작자
          </a>
          로 요청해주십시오.
        </li>
        <li>
          에러 또는 개선사항은{' '}
          <a href={ISSUE_URL} target="_blank" rel="noreferrer">
            이슈
          </a>
          를 남겨주세요!
        </li>
        <li>
          자세한 사항은{' '}
          <a href={REPO_URL} target="_blank" rel="noreferrer">
            이곳
          </a>
          을 참고해주십시오.
        </li>
      </S.HelpContent>
    </S.Help>
  );
};

export default Help;
