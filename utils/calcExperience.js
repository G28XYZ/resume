const date = new Date();
const startDate = new Date("2022", "09", "01");
const oneYearInSec = 60 * 60 * 24 * 1000 * 365;
const ageExperience = (date - startDate) / oneYearInSec;
const plural = ["год", "года", "лет"];
const cases = [2, 0, 1, 1, 1, 2];

function secondsToHms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / 864000);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor((seconds % 3600) % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}
moment.locale();
console.log(moment("202209011000", "YYYYMMDD").fromNow());

const declinationExp =
  plural[ageExperience % 100 > 4 && ageExperience % 100 < 20 ? 2 : cases[ageExperience % 10 < 5 ? ageExperience % 10 : 5]];

export { ageExperience, declinationExp };
