export const getPropertyWidth = (number: number): string => {
  switch (number) {
    case 0:
      return '9.7%';
    case 1:
      return '5.8%';
    case 2:
      return '9.8%';
    case 3:
      return '11.8%';
    case 4:
      return '10.5%';
    default:
      return 'auto';
  }
};
