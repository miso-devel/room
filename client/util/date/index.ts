import { cdate } from 'cdate';

export const formatDate = (date: number | undefined) => {
  if (!date) return null;
  return cdate(date).format('YYYY/MM/DD');
};

export const formatDateTime = (date: number | undefined) => {
  if (!date) return null;
  const d = new Date(date);
  const now = new Date();

  // 月日が同じ場合は日付を省略
  if (now.getDate() === d.getDate() && now.getMonth() === d.getMonth()) return cdate(date).format('今日 HH:mm');

  // 同じ年の場合は年を省略
  if (now.getFullYear() === d.getFullYear()) return cdate(date).format('MM/DD HH:mm');

  return cdate(date).format('YYYY/MM/DD HH:mm');
};
