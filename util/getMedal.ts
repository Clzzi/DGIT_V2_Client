import {
  BRONZEMEDAL_URL,
  GOLDMEDAL_URL,
  SILVERMEDAL_URL,
} from 'constants/medal.constants';

export const getMedal = (rank: number): string | null => {
  switch (rank) {
    case 1:
      return GOLDMEDAL_URL;
    case 2:
      return SILVERMEDAL_URL;
    case 3:
      return BRONZEMEDAL_URL;
    default:
      return null;
  }
};
