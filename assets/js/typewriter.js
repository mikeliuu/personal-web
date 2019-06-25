// typewriter
let wrap = document.getElementsByClassName("typewriter-wrapper")[0],
    txtEl = wrap.getElementsByTagName('span')[0],
    txt = txtEl.innerHTML,
    speed;

function typewriter() {

  // Delete old Text
  txtEl.innerHTML = "";
  
  let count = 0,
      len =  txt.length;
  
  let i = setInterval(function(){
    txtEl.innerHTML = txt.substr(0, count);
    count++;
    if(count === len + 1) {
      clearInterval(i);
    }
  }, 100) ;
}

typewriter();