const date = new Date();
const birthDate = new Date("1991", "04", "03");
const oneYearInSec = 60 * 60 * 24 * 1000 * 365;
const age = Math.floor((date - birthDate) / oneYearInSec);
const declensions = ["год", "года", "лет"];
const cases = [2, 0, 1, 1, 1, 2];

const declination = declensions[age % 100 > 4 && age % 100 < 20 ? 2 : cases[age % 10 < 5 ? age % 10 : 5]];

export { age, declination };
