const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date !== "undefined") {
    if (date.getMonth) {
      month = date.getMonth()+1;
    } else {
      throw new Error("Invalid date!");
    }
    let season = '';
    if (date.hasOwnProperty('toString')) {
      throw new Error("Invalid date!");
    }
    switch (month) {
      case 1 : 
        season = 'winter';
        return season;
      case 2 : 
        season = 'winter';
        return season;
      case 3 : 
        season = 'spring';
        return season;
      case 4 : 
        season = 'spring';
        return season;
      case 5 : 
        season = 'spring';
        return season;
      case 6 : 
        season = 'summer';
        return season;
      case 7 : 
        season = 'summer';
        return season;
      case 8 : 
        season = 'summer';
        return season;
      case 9 : 
        season = 'autumn';
        return season;
      case 10 : 
        season = 'autumn';
        return season;
      case 11 : 
        season = 'autumn';
        return season;
      case 12 : 
        season = 'winter';
        return season; 
      default:
      throw new Error("Invalid date!");
    } 
  } else { 
    return 'Unable to determine the time of year!';
  }  
}


module.exports = {
  getSeason
};
