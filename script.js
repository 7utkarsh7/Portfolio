// document.getElementById("navbar").style.backgroundColor = "blue";

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").className = "test";
    document.getElementById("navbar").style.paddingTop = "0%";
  } else {
    document.getElementById("navbar").className = "";
    document.getElementById("navbar").style.paddingTop = "1%";
  }
}
