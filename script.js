const signUpButton = document.querySelector("#signUp");
const signInButton = document.querySelector("#signIn");
const container = document.querySelector("#container");
const telvalue = document.querySelector(`#tel`);
const forget = document.querySelector(`#forget`);
const signup = document.querySelector(`#signup`);
signUpButton.addEventListener("click", () => {
  container.classList.add("Ractive");
});

forget.addEventListener("click", (ev) => {
  ev.preventDefault();
  container.classList.add("Ractive");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("Ractive");
});

signup.addEventListener("click", () => {
  ev.preventDefault();
  container.classList.remove("Ractive");
});

// function checkme() {
//   let val = telvalue.value;
//   let mobilevalid =
//     /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/;
//   if (!mobilevalid.test(val)) {
//     alert("请输入正确的手机号码！");
//     return false;
//   }
// }
// checkme();
