// const input = ['input1', 'input2', 'input3', 'input4'].map(id => document.getElementById(id));

const first_name_input = document.getElementById("input1");
const span1 = document.getElementsByClassName("error_text")[0];

const last_name_input = document.getElementById("input2");
const span2 = document.getElementsByClassName("error_text")[1];

const email_input = document.getElementById("input3");
const span3 = document.getElementsByClassName("error_text")[2];

const password_input = document.getElementById("input4");
const span4 = document.getElementsByClassName("error_text")[3];

const button = document.getElementById("button");

button.addEventListener("click", () => {
  if (
    first_name_input.value.length === 0 ||
    last_name_input.value.length === 0 ||
    email_input.value.length === 0 ||
    password_input.value.length === 0
  ) {
    first_name_input.style.borderColor = "#FF7979";
    first_name_input.style.background =
      "url(./Icons/Exclamation_icon.png) no-repeat right 27px top 16px";
    span1.style.display = "block";
    last_name_input.style.borderColor = "#FF7979";
    last_name_input.style.background =
      "url(./Icons/Exclamation_icon.png) no-repeat right 27px top 16px";
    span2.style.display = "block";
    email_input.style.borderColor = "#FF7979";
    email_input.style.background =
      "url(./Icons/Exclamation_icon.png) no-repeat right 27px top 16px";
    span3.style.display = "block";
    password_input.style.borderColor = "#FF7979";
    password_input.style.background =
      "url(./Icons/Exclamation_icon.png) no-repeat right 27px top 16px";
    span4.style.display = "block";
  } else if (
    first_name_input.value.length > 0 &&
    last_name_input.value.length > 0 &&
    email_input.value.length > 0 &&
    password_input.value.length > 0
  ) {
    first_name_input.style.borderColor = "#DEDEDE";
    first_name_input.style.background = "unset";
    span1.style.display = "none";
    first_name_input.value = "";
    last_name_input.style.borderColor = "#DEDEDE";
    last_name_input.style.background = "unset";
    span2.style.display = "none";
    last_name_input.value = "";
    email_input.style.borderColor = "#DEDEDE";
    email_input.style.background = "unset";
    span3.style.display = "none";
    email_input.value = "";
    password_input.style.borderColor = "#DEDEDE";
    password_input.style.background = "unset";
    span4.style.display = "none";
    password_input.value = "";
  }
});
