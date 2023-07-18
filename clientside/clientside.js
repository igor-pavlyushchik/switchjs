let log = console.log;
log("Home Task: 8 Client-Side JavaScript, Browser API");

/*
1. Use the window.location object to redirect the user to a different 
webpage when a button is clicked.
*/
document.querySelector("#firstButton").onclick = function () {
  location.href = "https://www.google.com";
};
/*
2. Use the window.history object to go back to the previous page when 
a button is clicked.
*/
document.querySelector("#secondButton").onclick = function () {
  history.back();
};
/*
3. Access and display the user's browser name and version using 
the window.navigator object.
*/
document.querySelector("#appCodeName").innerHTML =
  "navigator.appCodeName and appVersion is " +
  navigator.appCodeName +
  " " +
  navigator.appVersion;
/*
4. Display the screen width and height of the user's device using 
the window.screen object.
*/
document.querySelector("#screen").innerHTML =
  "window.screen width and height: " +
  window.screen.width +
  " " +
  window.screen.height;
/*
5. Change the background color of the document body to yellow 
when a button is clicked.
*/
document.querySelector("#yellowButton").onclick = function () {
  document.querySelector("body").classList.add("yellowStyle");
};
/*
6. Set a cookie with a name and value when a button is clicked.
*/
document.querySelector("#cookieButton").onclick = function () {
  document.cookie = "key1=value1";
};
/*
7. Select and highlight all paragraphs in a document 
when a button is clicked.
*/
document.querySelector("#paragraphs").onclick = function () {
  const paragraphs = Array.from(document.querySelectorAll("p"));
  paragraphs.forEach((element) => (element.style.color = "blue"));
};
/*
8. Replace the text content of a paragraph with a new value 
when a button is clicked.
*/
document.querySelector("#newText").onclick = function () {
  document.querySelector("#textChange").innerHTML = "New Text!!!";
};
/*
9. Change the background color and add a custom data attribute 
to a specific element when a button is clicked.
*/
document.querySelector("#backgroundAndAttribute").onclick = function () {
  let myPar = document.querySelector("#backgroundAndAttributePar");
  myPar.style.background = "lightblue";
  myPar.setAttribute("class", "democlass");
};
/*
10. Attach an event listener to a button that triggers an alert 
when clicked, and demonstrate event propagation by attaching another event 
listener to a parent element that triggers a different alert.
*/
document.querySelector("#propagation").onclick = function () {
  alert("Alert fired.");
};
document.querySelector("#propagation-div").onclick = function () {
  alert("Propagated Alert fired.");
};
