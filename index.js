// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  const intToWord = {

   1: 'one',

   2: 'two',

   3: 'three',

   4: 'four',

   5: 'five',

   6: 'six',

   7: 'seven',

   8: 'eight',

   9: 'nine',

   10: 'ten',

   11: 'eleven',

   12: 'twelve',

   13: 'thirteen',

   14: 'fourteen',

   15: 'fifteen',

   16: 'sixteen',

   17: 'seventeen',

   18: 'eighteen',

   19: 'nineteen',

   20: 'twenty',

   21: 'twenty one',

   22: 'twenty two',

   23: 'twenty three',

   24: 'twenty four',

   25: 'twenty five',

   26: 'twenty six',

   27: 'twenty seven',

   28: 'twenty eight',

   29: 'twenty nine',

 };

  const times = time.split(":");
  const hour = times[0]; // string
  const min = times[1];
  const intHour = Number(hour);
  const intMin = Number(min);

  const wordMin = intToWord[intMin];
  const wordHour = intToWord[intHour];

  const nextHour = intHour + 1;
  const nextWordHour = intToWord[nextHour];

  // case 1: quarter past
  if (intMin == 15) {
    return 'quarter past ' + wordHour;
  // case 2: quarter to
  } else if (intMin == 45) {
    return 'quarter to ' + nextWordHour;
  // case 3: xx:01-xx:29 exlcuding xx:15 quarter -> 'min' past ''
  } else if (intMin > 1 && intMin < 30 && intMin != 15) {
    return wordMin + " past " + wordHour;
  // case 4: xx:31-xx:59 exlcuding xx:15 quarter -> 'min' to ''
  } else if (intMin > 30 && intMin < 60 && intMin != 45) {
    return wordMin + " to " + nextWordHour;
  // case 5: half past
  } else if (intMin == 30) {
    return "half past " + wordHour;
  // case 6: on the clock
  } else if (intMin == 0) {
    console.log(wordHour + " o'clock");
  }
}

convertTimeToWords('9:00');
module.exports = { convertTimeToWords };