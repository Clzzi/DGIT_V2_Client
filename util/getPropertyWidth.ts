export const getPropertyWidth = (number: number): string => {
  switch (number) {
    case 0:
      return '136px';
    case 1:
      return '91px';
    case 2:
      return '136px';
    case 3:
      return '159px';
    case 4:
      return '151px';
    default:
      return 'auto';
  }
};
