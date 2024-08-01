// // date object - object that contains values that represent time and date , these date can be changed and formatted
// //month starts with 0 so january is 0 , dec is 11

// //year, month , day , hour, minute , second , ms

// const date = new Date();
// console.log(date)





// // custom date method 1:
// const date = new Date(2024, 02, 04 , 02, 23 , 12, 12)
// console.log(date)


// //custom date method 2 : 
// const date = new Date('2024-01-12T12:00:00.00Z')
// console.log(date)



// //get date:
// const date  = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const millisecond = date.getMilliseconds();
// const dayOfWeek = date.getDay(); //sunday is 0 , monday is 1


// //custom date using set
// const date = new Date();
// date.setFullYear(2024);
// date.setMonth(6);
// date.setDate(7);
// date.setHours(4);
// date.setMinutes(12);
// date.setSeconds(50);
// date.setMilliseconds(24);
// console.log(date)




// // Setting Date and Time Components
// now.setDate(15); // Sets day of month to 15
// now.setFullYear(2025); // Sets year to 2025
// now.setHours(10); // Sets hour to 10
// now.setMilliseconds(500); // Sets milliseconds to 500
// now.setMinutes(45); // Sets minutes to 45
// now.setMonth(11); // Sets month to December (11)
// now.setSeconds(30); // Sets seconds to 30
// console.log('Updated Date and Time:', now); // Output: Updated date and time with the new values




// Formatting Methods
// const date = new Date();
// const date1 = date.toDateString(); // week , month , day, year ex. monday july 31 2024
// const date2 = date.toTimeString(); //time with clock info
// const date3 = date.toString(); // combination of toDateString and toTimeString
// const date4 = date.toLocaleDateString(); //month , day , year separated with /
// const date5 = date.toLocaleTimeString(); // time with identifier AM OR PM
// const date6 = date.toLocaleString(); //combination of toLocaleDateString and toLocaleTimeString
// console.log(date6)




















