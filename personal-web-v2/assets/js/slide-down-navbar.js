// slide down navbar effect

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("nav-box").style.top = "0";
  } else {
    document.getElementById("nav-box").style.top = "-80px";
    document.getElementById("nav-box").style.opacity = "0.95";
  }
}