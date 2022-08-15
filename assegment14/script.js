var cnt=5;
function startSpin() {
        var e = document.getElementById("spin");
         
        e.className = "spinAround";
  cnt=cnt-1;
  document.getElementById("chnl").value=cnt;
  setTimeout(function() {
          document.getElementById("spin").className = "nospin";
     ;
     
          document.getElementById("scr").value=parseInt( document.getElementById("scr").value) + parseInt(Math.floor(Math.random() * 100 + 1));
        }, 6500)
}
function fsc(){
  var t=document.getElementById("scrf");
  t.value=Math.floor(Math.random() * 400 + 1);
  
}


setInterval(winl,10);
function winl(){
  if(cnt==0){
     document.getElementById("pl").style.display="block";
    document.getElementById("yl").style.display="block";
    document.getElementById("spin").style.display="none";
  }
  
}
setInterval(winw,50);
function winw(){
  if(parseInt(document.getElementById("scr").value)>parseInt(document.getElementById("scrf").value))
  {
     document.getElementById("yw").style.display="block";
    document.getElementById("spin").style.display="none";
    document.getElementById("pl").style.display="block";
  }
  
}
function ply(){
  document.getElementById("scr").value=00;
  var tt=document.getElementById("scrf");
  tt.value=Math.floor(Math.random() * 400 + 1);
  cnt=5;
 document.getElementById("yw").style.display="none";
  document.getElementById("yl").style.display="none";
   document.getElementById("chnl").value=cnt; document.getElementById("spin").style.display="block";
  document.getElementById("pl").style.display="none";
}
setInterval(pr,50);
function pr(){
  document.getElementById("prog").style.width=parseInt(document.getElementById("scr").value)/parseInt(document.getElementById("scrf").value)*100 + "%";

}
/*document.getElementById("scr").value< document.getElementById("scrf").value*/

