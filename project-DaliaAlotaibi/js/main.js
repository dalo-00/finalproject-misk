
$(document).ready(function() 
{
    var  turn="X";
    var  EMPTY = "&nbsp;" , boxes=[] , moves=1;
    var state=false;
    
    set();
    


function set()
{
    var board = document.querySelectorAll("td");
    for(var i=0;i<board.length;i++)
     {
       document.getElementById("cell"+i).addEventListener("click", check , {once : true}); 
     }
     
}    

function check()
{
   
    if((win()))
    {
        alert("Congratulation!! Won");
        document.getElementById("message").innerHTML="Congratulation!!"
        
    $("#message").css({"-webkit-animation-duration": "2s","animation-iteration-count": "10", "-webkit-animation-name": "example"
    , "animation-name": "example"});
    }
    else if (moves==9)
    {
        alert("The game is Draw");
        document.getElementById(this.id).innerHTML=turn;
        document.getElementById("message").innerHTML="The game is Draw"
    }
    else
    {
        document.getElementById(this.id).innerHTML=turn;
        moves++;
        turn = turn === 'X' ? 'O' : 'X';
        document.getElementById("turn").innerHTML=turn
    }
   

    boxes[0]=document.getElementById("cell0").innerHTML;
    boxes[1]=document.getElementById("cell1").innerHTML;
    boxes[2]=document.getElementById("cell2").innerHTML;
    boxes[3]=document.getElementById("cell3").innerHTML;
    boxes[4]=document.getElementById("cell4").innerHTML;
    boxes[5]=document.getElementById("cell5").innerHTML;
    boxes[6]=document.getElementById("cell6").innerHTML;
    boxes[7]=document.getElementById("cell7").innerHTML;
    boxes[8]=document.getElementById("cell8").innerHTML;
}

function win()
{  
if((boxes[0]=="X" && boxes[1]=="X" && boxes[2]=="X")||(boxes[3]=="X" && boxes[4]=="X" && boxes[5]=="X")||(boxes[6]=="X" && boxes[7]=="X" && boxes[8]=="X"))
   {
     
       
return true; }
   else if ((boxes[0]=="X" && boxes[3]=="X" && boxes[6]=="X")||(boxes[1]=="X" && boxes[4]=="X" && boxes[7]=="X")||(boxes[2]=="X" && boxes[5]=="X" && boxes[8]=="X"))
   {
   
    return true;   
}

   else if ((boxes[0]=="X" && boxes[4]=="X" && boxes[8]=="X")||(boxes[2]=="X" && boxes[4]=="X" && boxes[6]=="X"))
   {
   
    return true;  

}
else if((boxes[0]=="O" && boxes[1]=="O" && boxes[2]=="O")||(boxes[3]=="O" && boxes[4]=="O" && boxes[5]=="O")||(boxes[6]=="O" && boxes[7]=="X" && boxes[8]=="X"))
{

    
return true; }
else if ((boxes[0]=="O" && boxes[3]=="O" && boxes[6]=="O")||(boxes[1]=="O" && boxes[4]=="O" && boxes[7]=="O")||(boxes[2]=="O" && boxes[5]=="O" && boxes[8]=="O"))
{
 
 return true;   
}

else if ((boxes[0]=="O" && boxes[4]=="O" && boxes[8]=="O")||(boxes[2]=="O" && boxes[4]=="O" && boxes[6]=="O"))
{

 return true;  

}
   
   else
   {
       return false;
   }
 
}

});


