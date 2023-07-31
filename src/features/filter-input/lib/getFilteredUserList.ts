import { User } from '../../../entities/user/model';

const excludeColumns = ['id', 'phone', 'website', 'company', 'address'];

export const getFilteredUserList = (text: string, list: User[] | null) => {
  const lowerCasedText = text.toLowerCase().trim();
  if (lowerCasedText === '') {
    return list;
  }
  return list?.filter((item: User) => {
    const arrKeys = Object.keys(item) as Array<keyof User>;
    return arrKeys.some((key) => {
      return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowerCasedText);
    });
  });
};
