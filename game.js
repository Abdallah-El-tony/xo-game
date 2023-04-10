let title = document.querySelector('.title')
let boxes = document.querySelectorAll('.boxes .Box')
let Boxes = document.querySelector('.boxes')
let turn = 'x';
let temp=0;
let array =[];
for(let i=0; i<=9; i++){
array[i]=boxes[i]
}
function turnplayer(Box){
  if(turn==='x'&& Box.innerHTML=='')
  {
    temp++;
    Box.innerHTML='x'
    turn='o';
    title.innerHTML='O'
  }
  else if(turn==='o'&& Box.innerHTML==''){
    Box.innerHTML='O'
    turn='x';
    title.innerHTML='X'
    temp++;
  }
  
   winner()
}

function winner(){
   
    if(array[0].innerHTML==array[1].innerHTML&&array[1].innerHTML==array[2].innerHTML&&array[0].innerHTML!='')
    {
       chechwinner(0,1,2)        
    }
else if(array[3].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[5].innerHTML&&array[3].innerHTML!='')
    {
        chechwinner(3,4,5)
     
    }
    else if(array[6].innerHTML==array[7].innerHTML&&array[7].innerHTML==array[8].innerHTML&&array[6].innerHTML!='')
    {
        chechwinner(6,7,8)
    }
//-----------------------------------------------

   else if(array[0].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[8].innerHTML&&array[0].innerHTML!='')
    {
        chechwinner(0,4,8)
    }
else if(array[2].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[6].innerHTML&&array[2].innerHTML!='')
    {
        chechwinner(2,4,6)
    }
    //------------------------------------------
    
   else if(array[0].innerHTML==array[3].innerHTML&&array[3].innerHTML==array[6].innerHTML&&array[0].innerHTML!='')
    {
        chechwinner(0,3,6)
       
    }
else if(array[1].innerHTML==array[4].innerHTML&&array[4].innerHTML==array[7].innerHTML&&array[1].innerHTML!='')
    {
        chechwinner(1,4,7)
    }
    else if(array[2].innerHTML==array[5].innerHTML&&array[5].innerHTML==array[8].innerHTML&&array[2].innerHTML!='')
    {
        chechwinner(2,5,8)
    }
    else {
if(temp==9){
    title.innerHTML='Draw'
    title.style.color='black'
    title.style.fontWeight='bold'
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},4000)
}
    }
    
}
function chechwinner(one,tow,three){
    array[one].style.backgroundColor='black'
    array[tow].style.backgroundColor='black'
    array[three].style.backgroundColor='black'
    title.style.backgroundColor='green'
    title.innerHTML=`${array[one].innerHTML} winner`
    setInterval(function(){title.innerHTML+='.'},1000)
    setTimeout(function(){location.reload()},4000)
    
}
let hexarray=[0,1,2,3,4,5,6,"A","B","C","D","E","F"];
console.log(hexarray[Math.trunc(Math.random() * hexarray.length)])
let color=[]
for(let i=0; i<6; i++){
color.push(hexarray[Math.trunc(Math.random() * hexarray.length)])
}
let x=`#${color.join('')}`
Boxes.style.backgroundColor=x;
document.body.style.backgroundColor=x;