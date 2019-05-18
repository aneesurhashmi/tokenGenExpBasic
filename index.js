// // inbuilt data object
// // Format: Sat May 18 2019 05:50:22 GMT+0500 (Pakistan Standard Time)
// // This is same as computer time, not directly from internet

// let currentDate = new Date();
// // current date and time
// console.log(currentDate);

// // It is not string by default
// // To convert it to string Use: dateVar.toString()

// //  future or past date
// let anyDate = new Date(2019, 11, 1);
// // console.log(anyDate);

// // Getting specific part of Date
// let stdDate = currentDate.toDateString();
// console.log(stdDate); // Sat May 18 2019
// console.log("Local String:  ", currentDate.toLocaleDateString());
// console.log("GMT String:  ", currentDate.toGMTString());

// // ========== Parts of Date and Time ========= //
// // to get a day name
// let today = currentDate.getDay();
// // this returns a number: sun = 0 and sat = 6
// let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
// console.log("Day is: ", daysOfWeek[today]);

// // To get month (0 for jan and 11 for dec)
// let thisMonth = currentDate.getMonth();
// let monthsOfyear = [
//   "Jan",
//   "Feb",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sep",
//   "Oct",
//   "Nov",
//   "Dec"
// ];
// console.log("Month is: ", thisMonth);

// // To get day of month (date)
// let thisDay = currentDate.getDate();
// console.log("Date is: ", thisDay);

// // To get year
// console.log("Year is: ", currentDate.getFullYear());
// // To get hours (0-23) >> (midnight to 11pm)
// console.log("Hours : ", currentDate.getHours());
// // To get Miniutes
// console.log("Minutes : ", currentDate.getMinutes());
// // To get seconds , miliseconds
// // To get TIme full (miliseconds since midnight January 1 1970)
// console.log(currentDate.getTime());

// // ========= Specifying date and time ========== //

// let myDOB = new Date("Octobar 03, 1999");
// console.log(myDOB);

// let myAgeInDays = currentDate.getTime() - myDOB.getTime();
// console.log("Age in days: ", myAgeInDays / (24 * 60 * 60 * 1000));

// // =========== Changing ELements of Date and time without changing other elements ======= //

// // let afiaDOB = new Date(2010,04,18);
// let afiaDOB = new Date("May 18, 2009");
// console.log(afiaDOB);

// afiaDOB.setFullYear(2010);
// console.log(afiaDOB);

// ===================== practice ================== //

let currentDate = new Date();

let tokenIDCount = 0;
let tokenRecord = {};

function printToken(forDays) {
  tokenIDCount++;
  let printToken =
    "Token id: " + tokenIDCount + ". Time expiry: " + generateToken(forDays);
  pushToHTML(tokenDisplayDiv, createTag("h2", printToken));
}

function generateToken(expiryDays = 7) {
  let entryTime = new Date();
  entryTime.setDate(entryTime.getDate() + expiryDays);
  tokenRecord[tokenIDCount] = entryTime.getTime();
  return onlyDateTime(entryTime);
}

function onlyDateTime(dateObj) {
  dateObj = dateObj.toString();
  dateObj = dateObj.slice(0, dateObj.indexOf("G"));
  return dateObj;
}

//  =============================== //
function checkTokenExpiry() {
  let id = tokenIDinput.value;
  if (tokenRecord[id] != null) {
    let tokenGenTime = tokenRecord[id]; // time of token generated in ms
    let checkTime = new Date(); // time when token status is checked

    // check if token is expired or not
    if (checkTime.getTime() < tokenGenTime) {
      let tokenTime = new Date(tokenGenTime); // to display token time in Date format
      let tokenStatus =
        "Valid Token. Token Expires at:" + onlyDateTime(tokenTime);
      alert(tokenStatus);
    } else {
      alert("TOKEN EXPIRED!!");
    }
  } else {
    alert("Invalid Token ID!");
  }
}
// ============================= //

// ============ Basic custom DOM Functions ============ //
function createTag(name, text) {
  let tag = document.createElement(name);
  tag.innerHTML = text;
  return tag;
}

function createInput(inputType = "text") {
  let inp = document.createElement("input");
  inp.type = inputType;
  return inp;
}

function pushToHTML(parent, child) {
  parent.appendChild(child);
}
// ======================== //

let tokenGenButtton = document.querySelector("#tokenGenButton");
let tokenIDinput = document.querySelector("#tokenID");
let tokenExpButton = document.querySelector("#tokenExpButton");
let tokenDisplayDiv = document.querySelector("#tokenDisplay");
let tokenExpDays = document.querySelector("#tokenForDays");

tokenGenButtton.onclick = () => {
  printToken(Number(tokenExpDays.value));
};

tokenExpButton.onclick = () => {
  checkTokenExpiry();
};