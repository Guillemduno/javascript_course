

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, 
// the second - from the year 101 up to and including the year 200, etc.
// For year = 1905, the output should be
// centuryFromYear(year) = 20;
// For year = 1700, the output should be
// centuryFromYear(year) = 17.

/**
 * FIRST VERSION
 * @param {*} year 
 * @returns 
 */

function yearToCentury(year){

  const yearToString = year.toString(); // Convert integer to string
  const yearToStringLength = yearToString.length;
  let splitYear;
  let century;

  switch (yearToStringLength) {
    case 1:
      splitYear = yearToString.substring(0,1); // Save last to numbers
      century = 0;

      break;
    case 2:
      splitYear = yearToString.substring(1,2); // Save last to numbers
      century = 0;
      
      break;
      case 3:
        splitYear = yearToString.substring(1,3); // Save last to numbers
        century = Math.floor((year/100));
        
        break;
        case 4:
          splitYear = yearToString.substring(2,4); // Save last to numbers
          century = Math.floor((year/100));
      break;
    default:
      break;
  }

  const checkNumberInt = parseInt(splitYear); // Convert string to integer
  
  if(checkNumberInt>0){
    century = century +1;
    // console.log("major que 0");
  }else{
    // console.log("menor que zero");
  }
  console.log("year: "+year+" - century: "+century);
  return century;
 
}

// yearToCentury(9999);  // 
// yearToCentury(8);  // 1
// yearToCentury(45);  // 1
// yearToCentury(201);  // 1
// yearToCentury(1905);  // 20
// yearToCentury(1700);  // 17

console.log("_________________")
/**
 * SECOND VERSION
 *
 * @param {*} year 
 * @returns 
 */


function yearCentury(year){
  return Math.ceil((year/100)+1);                                                       
}

// yearCentury(1700);
// yearToCentury(9999);  // 
// yearToCentury(8);  // 1
// yearToCentury(45);  // 1
// yearToCentury(201);  // 1
// yearToCentury(1905);  // 20
// yearToCentury(1700);  // 17