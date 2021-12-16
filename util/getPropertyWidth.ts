export const getPropertyWidth = (number: number): string => {
  switch (number) {
    case 0:
      return '11.8%';
    case 1:
      return '8%';
    case 2:
      return '11.8%';
    case 3:
      return '13.8%';
    case 4:
      return '13.1%';
    default:
      return 'auto';
  }
};
