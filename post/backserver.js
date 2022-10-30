const firebaseConfig = {
  apiKey: "AIzaSyAKXWFm7NyNlXt0hNZ4KYP3xviY2RV3pbQ",
  authDomain: "algomox-test.firebaseapp.com",
  databaseURL: "https://algomox-test-default-rtdb.firebaseio.com",
  projectId: "algomox-test",
  storageBucket: "algomox-test.appspot.com",
  messagingSenderId: "93689685057",
  appId: "1:93689685057:web:adc59c37a54add6bd692c0"
};
// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var date = getElementVal("date");
  var emailid = getElementVal("emailid");
  var income = getElementVal("income");
  var ipaddress = getElementVal("ipaddress");



  saveMessages(name, date, emailid, income, ipaddress);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, date, emailid, income, ipaddress) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    date: date,
    emailid: emailid,
    income: income,
    ipaddress: ipaddress,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
