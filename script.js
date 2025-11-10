function myFunction1() {
  console.log("Tab 1 clicked");
  document.getElementById("firstTab");
  firstTab.classList.add("active");
  secondTab.classList.remove("active");
  thirdTab.classList.remove("active");
  fourthTab.classList.remove("active");
}
function myFunction2() {
  console.log("Tab 2 clicked");
  document.getElementById("secondTab");
  secondTab.classList.add("active");
  firstTab.classList.remove("active");
  thirdTab.classList.remove("active");
  fourthTab.classList.remove("active");
}
function myFunction3() {
  console.log("Tab 3 clicked");
  document.getElementById("thirdTab");
  thirdTab.classList.add("active");
  secondTab.classList.remove("active");
  firstTab.classList.remove("active");
  fourthTab.classList.remove("active");
}
function myFunction4() {
  console.log("Tab 4 clicked");
  document.getElementById("fourthTab");
  fourthTab.classList.add("active");
  secondTab.classList.remove("active");
  thirdTab.classList.remove("active");
  firstTab.classList.remove("active");
}
