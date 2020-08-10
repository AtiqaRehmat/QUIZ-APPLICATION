window. onload


//    date adjustment
var Now_Date=new Date();
var date=Now_Date.getDate();
var month=Now_Date.getMonth();
var year=Now_Date.getFullYear();

//  Quiz heading  and date
var h1=document.createElement("h1")
var Heading=document.getElementById("Heading")
var Heading_Text=document.createTextNode("QUIZ")
var h4_Date=document.createElement("h5")
var H4_Text=document.createTextNode("Date = "+date+" : "+month+" : "+year)
h4_Date.setAttribute("class","Date");
Heading.appendChild(h1)
Heading.appendChild(h4_Date)
h1.appendChild(Heading_Text)
h4_Date.appendChild(H4_Text)



//    Timer 
// var sec=0;
// function start()
// {

// sec++;
// Sec.innerHTML=sec;
// }
// var interval=setInterval(start,1000)
// function stop()
// {
// clearInterval(interval)
// }
// setTimeout(stop,10000)



var h4_Timer=document.createElement("h5");

h4_Timer.setAttribute("class","Timer")
// h4_Timer.setAttribute("id","sec")
// var Sec=document.getElementById("sec")

var Timer_Text=document.createTextNode("Test")
// Timer_Text.appendChild(Sec)



Heading.appendChild(h4_Timer)
h4_Timer.appendChild(Timer_Text)
// Timer_Text.appendChild(Sec)



// Start Button
var Start_Btn=document.createElement("button")
var Start_Btn_Text=document.createTextNode("Result")
Start_Btn.setAttribute("class","StartBtn")
Start_Btn.setAttribute("onclick","checking()")
Heading.appendChild(Start_Btn)
Start_Btn.appendChild(Start_Btn_Text)

Heading.style.borderBottom="5px solid black";

//   Question NO 1

var Ques_Div=document.getElementById("Question_1")
var Ques_1_h6=document.createElement("h6")
Ques_1_h6.setAttribute("class","Question")
var Ques_Text=document.createTextNode("Question:No:1= How many months in one year ?")
// var Ans=document.getElementById("Ans_1")
Ques_Div.appendChild(Ques_1_h6)
Ques_1_h6.appendChild(Ques_Text)



var Ques_Div_2=document.getElementById("Question_2")
var Ques_2_h6=document.createElement("h6")
Ques_2_h6.setAttribute("class","Question")
var Ques_2_Text=document.createTextNode("Question:No:2= What color is banana ?")
Ques_Div_2.appendChild(Ques_2_h6)
Ques_2_h6.appendChild(Ques_2_Text)




var Ques_Div_3=document.getElementById("Question_3")
var Ques_3_h6=document.createElement("h6")
Ques_3_h6.setAttribute("class","Question")
var Ques_3_Text=document.createTextNode("Question:No:3 = Who is the founder of pakistan  ?")
Ques_Div_3.appendChild(Ques_3_h6)
Ques_3_h6.appendChild(Ques_3_Text)



var Ques_Div_4=document.getElementById("Question_4")
var Ques_4_h6=document.createElement("h6")
Ques_4_h6.setAttribute("class","Question")
var Ques_4_Text=document.createTextNode("Question:No:4 = How many provinces in pakistan   ?")
Ques_Div_4.appendChild(Ques_4_h6)
Ques_4_h6.appendChild(Ques_4_Text)




function checking()
{
    var score=0;
    var right_ans_1=document.getElementById("q1-opt-a")
    var ans1_b=document.getElementById("q1-opt-b")
if(right_ans_1.checked === true)
{
score++

alert("Q1 right")
}    
else{
    alert("Q1 wrong")
}




var right_ans_2=document.getElementById("q2-opt-b")
var ans2_a=document.getElementById("q2-opt-a")
if(right_ans_2.checked === true)
{
score++
alert("Q2 right")
}    
else{
alert("Q2 wrong")
}


var right_ans_3=document.getElementById("q3-opt-b")
var ans3_a=document.getElementById("q3-opt-a")
if(right_ans_3.checked === true)
{
score++
alert("Q3 right")
}    
else{
alert("Q3 wrong")
}




var right_ans_4=document.getElementById("q4-opt-a")
var ans4_a=document.getElementById("q4-opt-b")
if(right_ans_4.checked === true)
{
score++
alert("Q4 right")
}    
else{
alert("Q4 wrong")
}



document.write("<br><br><br><br><br><br><h1><u>YOUR SCORE IS ="+score+" BY 4 </u></h1>")


}



// var Ans=document.getElementById("Ans_1")
// var Ques_1_Input=document.createElement("input")
// Ques_1_Input.setAttribute("type","radio")
// Ques_1_Input.setAttribute("name","Ques_Text")
// Ques_1_Input.setAttribute("value","atiqa")
// var Opt_1_A=document.createTextNode("atiqa")
// var Opt_1=document.getElementById("atiqa")
// if(Opt_1 === "atiqa")
// {
//     console.log("True")
// }
// else
// {
//     console.log("false")
// }


