/**
 * enqueueする時に現在時刻からどれくらいに後にtaskを実行するかを計算する
 * @param now 現在時刻
 * @param startTime 開始時刻
 * @param dif 開始時刻からどれくらいずらして通知するか(-なら早めに、+なら遅めに通知する)
 * @returns delay(number)
 */
export const calculateDelay = (
  now: Date,
  start: string,
  dif = 0,
): number => {
  const startDate = new Date(start);
  const nowInJP = now.setHours(now.getHours() + 9);
  const startInJP = startDate.setHours(startDate.getHours() + 9);
  const timeDif = startInJP - nowInJP;
  if (timeDif < 0) return 0;
  const timeDifWithDelay = timeDif + dif;
  if (timeDifWithDelay < 0) return timeDif;

  // debugDelay(timeDifWithDelay);

  return timeDifWithDelay;
};

// debug用
// const debugDelay = (dif: number) => {
//   const millisecondsInSecond = 1000;
//   const millisecondsInMinute = 60 * millisecondsInSecond;
//   const millisecondsInHour = 60 * millisecondsInMinute;
//   const millisecondsInDay = 24 * millisecondsInHour;

//   const days = Math.floor(dif / millisecondsInDay);
//   const hours = Math.floor((dif % millisecondsInDay) / millisecondsInHour);
//   const minutes = Math.floor(
//     (dif % millisecondsInHour) / millisecondsInMinute,
//   );
//   const seconds = Math.floor(
//     (dif % millisecondsInMinute) / millisecondsInSecond,
//   );

//   console.log(`差分: ${days} 日, ${hours} 時間, ${minutes} 分, ${seconds} 秒`);
// };
