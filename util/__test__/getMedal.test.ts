import {
  GOLDMEDAL_URL,
  SILVERMEDAL_URL,
  BRONZEMEDAL_URL,
} from 'constants/medal.constants';
import { getMedal } from 'util/getMedal';

describe('Test getMedal', () => {
  const UserRankArray = [1, 2, 3];
  const MedalArray = [GOLDMEDAL_URL, SILVERMEDAL_URL, BRONZEMEDAL_URL];
  const NotTopUserRank = 4;

  it('getMedal Correctly', () => {
    UserRankArray.forEach((rank) => {
      expect(getMedal(rank)).toBe(MedalArray[rank - 1]);
    });
  });

  it('getNoMedal Correctly', () => {
    expect(getMedal(NotTopUserRank)).toBeNull();
  });
});
