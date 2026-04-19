function changeStyle() {
  //gets generic style sheet
  mainStyle = document.getElementById("mainStyle");

  //gets the current style
  currStyle = mainStyle.getAttribute("href");

  //figure which one is the new style
  if (currStyle.includes("generic.css")) {
    newStyle = "gloomy.css";
  } else {
    newStyle = "generic.css";
  }

  //changes to the new style
  mainStyle.setAttribute("href", newStyle);

  localStorage.setItem("mainStyle", newStyle);
}

//makes style persist when refreshed
window.onload = function () {
  storage = localStorage.getItem("mainStyle");

  mainStyle = document.getElementById("mainStyle");

  mainStyle.setAttribute("href", storage);
};
