export const getMedal = (rank: number): string | null => {
  const GOLDMEDAL_URL = '/static/GoldMedal.svg';
  const SILVERMEDAL_URL = '/static/SilverMedal.svg';
  const BRONZEMEDAL_URL = '/static/BronzeMedal.svg';

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
