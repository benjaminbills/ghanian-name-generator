const userForm = document.querySelector("#userForm");
const resultContainer = document.querySelector("#result");

userForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const userBirthday = userForm.elements.birthday.value;
  const userGender = userForm.elements.gender.value;
  let birthdayArray = userBirthday.split("-");
  let cc = birthdayArray[0].substring(0, 2);
  let yy = birthdayArray[0].substring(2, 4);
  let mm = birthdayArray[1];
  let dd = birthdayArray[2];

  // let dayofweek =
  //   (cc / 4 - 2 * cc - 1 + (5 * yy) / 4 + (26 * (mm + 1)) / 10 + dd) % 7;
  // console.log(dayofweek);
});
