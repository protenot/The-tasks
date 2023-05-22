export function getMinuites(now) {
  console.log(now);
  const minInDay = 24 * 60;
  const hrs = now.getHours();
  const mins = now.getMinutes();
  const minsPass = hrs * 60 + mins;
  return minInDay - minsPass;
}
