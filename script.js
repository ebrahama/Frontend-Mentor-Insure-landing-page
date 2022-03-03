let close0 = document.getElementById("close");
let hum = document.getElementById("hum");
let menu = document.getElementById("menu");
let hide = document.getElementsByClassName("hide");


close0.onclick = function(){

  menu.classList.add('hide');
  hum.classList.remove('hide');
  this.classList.add('hide');
  
}
hum.onclick = function(){

  menu.classList.remove('hide');
  close0.classList.remove('hide');
  this.classList.add('hide');

}