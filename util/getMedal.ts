export const getMedal = (rank: number) => {
  switch (rank) {
    case 1:
      return '/static/GoldMedal.svg';
    case 2:
      return '/static/SilverMedal.svg';
    case 3:
      return '/static/BronzeMedal.svg';
    default:
      return null;
  }
};
