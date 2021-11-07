import {
  BRONZEMEDAL_URL,
  GOLDMEDAL_URL,
  SILVERMEDAL_URL,
} from 'constants/medal.constants';
import { getMedal } from 'util/getMedal';

describe('Test getMedal', () => {
  const FirstRank = 1;
  const SecondRank = 2;
  const ThirdRank = 3;
  const NotTopRank = 4;

  it('getGoldMedal Correctly', () => {
    expect(getMedal(FirstRank)).toBe(GOLDMEDAL_URL);
  });

  it('getSilverMedal Correctly', () => {
    expect(getMedal(SecondRank)).toBe(SILVERMEDAL_URL);
  });

  it('getBronzeMedal Correctly', () => {
    expect(getMedal(ThirdRank)).toBe(BRONZEMEDAL_URL);
  });

  it('getNoMedal', () => {
    expect(getMedal(NotTopRank)).toBeNull();
  });
});
