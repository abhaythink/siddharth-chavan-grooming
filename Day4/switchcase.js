let day = 9;
let dayName;

switch(day) {
    case 1:
        dayName = "Monday";
        break
    case 2:
        dayName = "Tuesday";
        break
    case 3:
        dayName = "Wednesday";
        break
    case 4:
        dayName = "Thursday";
        break
    case 5:
        dayName = "Friday";
        break
    case 6:
        dayName = "Saturday";
        break
    case 7:
        dayName = "Sunday";
        break
    default:
        dayName = "Enter a Valid day number (1-7)";
        break;
}

console.log(dayName);








let year = 2016;
let month = 2;
let daysInMonth;

switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break; 
    case 2:
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
            daysInMonth = 29;
        }else{
            daysInMonth = 28;
        }
        break;
    default:
        daysInMonth = "-1 Enter valid Month (1-12)";
    break;
}

console.log(daysInMonth);