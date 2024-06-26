
var ic=document.getElementById("icon1");
var cls=document.getElementById("cl1");
  ic.onclick=function()
  {
    cls.classList.toggle("cl1");
    if(cls.classList.contains("cl1")){
      ic.src="images/icons8-sun-50.png";
    }
    else{
      ic.src="images/night-mode.png";
    }
}