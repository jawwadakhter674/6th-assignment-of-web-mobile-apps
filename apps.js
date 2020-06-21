var a= prompt("Enter Your First Name")
var b= prompt("Enter Your Last Name")
alert("Welcome "+a+" "+b);                 //Question1






var a= prompt("Enter Your Favroute mobile ");
var b=a.length;
alert(" The length of string is  "+b)              //Question2




var p="Pakistan";
document.write("String: "+ p +"<br>");
document.write("Index of 'n' is : "+p.indexOf("n"))        //Question3






var p="Hello World";
document.write("String: "+ p +"<br>");
document.write("last index of : "+p.indexOf("d"))        //Question4







var p="Pakistan";
document.write("String: "+ p +"<br>");
document.write("3rd  index of : "+p.charAt(3) )       //Question5






var a= prompt("Enter Your First Name")
var b= prompt("Enter Your Last Name")
var n=  a.concat(b)
alert("Welcome "+n);                 //Question6





var h="Hyderabad"
document.write("City:"+h+"<br>")
var b=h.replace("Hyder", "Islam");
document.write("After Replacement : "+b)     //Question7




var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("Before Replacement:"+message+"<br>")
var b=message.replace("and", "&");
document.write("After Replacement : "+b)        //Question8




var a="472";
document.write("value :" +a+"<br>")
document.write("Type: String " +"<br>")
var b=parseInt(a);

document.write("value :" +b+"<br>")
document.write("Type: Number " +"<br>")                //Question9












var c= prompt("Enter any word in small letter")
document.write("User input: "+c+"<br>")
var d=c.toUpperCase();
document.write("Title case: "+d)                       //Question10








var c= prompt("Enter any word in small letter")
var first=c.slice(0,1);
first=first.toUpperCase();
var sec=c.slice(1);
sec=sec.toLowerCase();
var th=first+sec;
document.write(th)                     //Question11









var num=35.36;
document.write("Number: "+num+"<br>");
var str= 3536
document.write("String: "+ str.toString());                      //Question12






passwordCheck();
function passwordCheck(){
var pass = prompt("Enter Password")

if(pass.length >= 6){
for (var i = 0; i < pass.length; i++) {
var j = pass.charCodeAt(i);
var k = pass.charCodeAt(i);
if( (k >= 65 && k<= 90)|| (k>=97 && k<=122) ){
    if( (j >= 48 && j <= 64)|| (j>= 65 && j<= 90)|| (j>=97 && j<=122)){

    }
    else{
      
        alert("Password must be contain alphabets and numbers only")
        passwordCheck();

    }

}

else{
    k = 0
    //   console.log(k)  

        alert("Password can not begin with a number or symbol Please enter a valid password")
        passwordCheck();
    }
  
}
  document.write("Password Match")
}
else{
       alert("Passwrod must be contain  at least 6 characters long ")
       passwordCheck();
   
    }
}                   //Question15






var country = "Pakistan";
var b = country.length;
document.write("User input: "+ country+ "<br>")

document.write("Last character of input: "+ country[b -1]+ "<br>")          //Question17









function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));              //Question18








































                  //
















//Chapter26-30



var a=+parseFloat(prompt("Enter number"));
document.write("number: "+a+"<br>");
document.write("Round off value :"+ Math.round(a)+"<br>")
document.write("floor value :"+ Math.floor(a)+"<br>")
document.write("ceill value :"+ Math.ceil(a)+"<br>")            //Question1











var a=-parseFloat(prompt("Enter number"));
Math.sign(-a)
document.write("number: "+a+"<br>");
document.write("Round off value :"+ Math.round(a)+"<br>")
document.write("floor value :"+ Math.floor(a)+"<br>")
document.write("ceill value :"+ Math.ceil(a)+"<br>")        //Question2



var a=4;
Math.abs(-4);
document.write("The Absolute value of "+ a+" is "+ a)    //question3







 


var first=prompt("enter first");
var second=prompt("enter second");

document.write("The dice value of  "+ first+" is: "+Math.floor(Math.random(1,6)*6)+"<br>")
document.write("The dice value of  "+ second+" is: "+Math.floor(Math.random(1,6)*6)+"<br>")          //Question4









var a=Math.floor(Math.random()*3);
document.write(a+"<br>")
if(a===1){
    document.write("Random coins value is : Head")
}else{
    document.write("Random coins value is : Tail")
}                                                                  //Question5







var b=Math.floor(Math.random()*100)
document.write("Random number between 1 and 100 is : "+b+"<br>")           //Question6










var a= parseFloat(prompt("Enter Your Weight in kgs "));
document.write("The weight of user is "+a+" kilograms")     //Question7






var a= 9;
var b=parseInt(prompt("enter a guessing numbers"))
if(b===a){
    alert("Congratulations !!")
}else{
    alert("Try Again")
}                                                   //Question8































































                //




























//Chapter31-34





var a= new Date()
document.write(a)            //Question1




var a=new Date();
// var Currentmonth=a.getMonth();
var b=a.toString();
var c=b.slice(4,7)
document.write("Current Month :"+c)              //Question2





var a=new Date();

var b=a.toString();
var c=b.slice(0,3)
document.write("Today is :"+c)              //Question3




var s=prompt("Enter day name");
if(s==="saturday"){
    alert("its Fun Day")
}else if(s==="sunday"){
    alert("its Fun Day")
}else{
    alert(s)
}                                              //Question4




var m=+parseInt(prompt("Enter Month Day"));
if(m <= 15){
    alert("First Fifteen days of the month")
}else{
    alert("Last Fifteen days of the month")
}                                                      //Question5





var cd= new Date();
document.write("Current Date : "+cd+"<br>");
var b=cd.getTime();
document.write("Elapsed Millisecond since january 1 ,1970:   "+b+"<br>");
var c= b/1000;
document.write("Elapsed Minutes since january 1 ,1970:   "+c+"<br>");            //Question6





var h= new Date();
var b=h.getHours();
document.write(b);
if(b <=12){
    alert("Its AM")
}else{
    alert("Its PM")
}                                                 //Question7








var b=new Date();
b.setFullYear(2020, 11, 31);
b.setHours(00);
b.setMinutes(00)
b.setSeconds(00);
document.write("Later Date : "+" "+b)                         //Question8







var r= new Date( 2020,3,23);
var rm=r.getTime();
//document.write(rm+"<br>")
var today= new Date();
var todaym=today.getTime();
//document.write(todaym+"<br>")
var d=todaym-rm;
var c=Math.floor(d/(1000*60*60*24));
document.write(c+"  days have passed since 1st Ramadan, 2020")       //Question9







var d= new Date(2015,11,5);
d.setHours(22,50,16)
document.write("On refrence Date : "+" "+d+"<br>");
var e=d.getTime();
//document.write(e+"<br>")
var f=new Date(2015,0,0);
var g=f.getTime();
//document.write(g+"<br>");
var h=e-g;
var i=Math.floor(h/(1000*60));
document.write(i+"seconds had passed since begining of 2015"+"<br>")              //Question10






var e=new Date();
document.write("Current date: "+" "+e+"<br>");
var d=new Date();
d.setHours(18)
document.write("1 hour ago it was "+d+"<br>")                      //question11











var c=new Date();
document.write("Current Date: "+" "+c+"<br>")
var b= new Date(1920,5,18);
document.write("Its "+b)                                   //Question12
 







var dob= new Date(prompt("Enter birth year"));

var dobmili=dob.getTime();
var j=dob.toString();
var k=j.slice(11,15)

//document.write(rm+"<br>")
var today= new Date();
var todaym=today.getTime();
//document.write(todaym+"<br>")
var d=todaym-dobmili;
var c=Math.floor(d/(1000*60*60*24*30*12));
document.write(" Your age is: "+" "+c+"<br>")
document.write("your birth year is : "+" "+k)       //Question13






document.write("<h2>K-ELECTRIC  BILL</h2>")

var a=prompt("Enter Your name:");
document.write("Customer Name: "+" "+a+"<br>");

var b=prompt("Enter current month");
document.write("Current Month : "+" "+b+"<br>")

var c= parseInt(prompt("Enter Units"));
 document.write("Number of units: "+" "+c)

 var d= 16;
 document.write("Charges per units: "+" "+d+"<br>");

 var e=c*d;
 document.write("Net Amount payable (within due date)"+"<br>");

 var f=350;
 document.write("Late payment surchage :"+f+"<br>");

 var g=e+f;
 document.write("Gross amount payable(after due date)"+" "+g+"<br>")


























































































































 //Chapter35-38


 function time(a){
    var a= new Date();
    document.write(a)
}
time();                        //Question1




function name(a,b){

    var a=prompt("Enter your first name:");
    var b=prompt("Enter your last name")
    alert("Welcome "+a+" "+b)
}
name();                           //Question2






function add(c){

    var a=+prompt("Enter your first number:");
    var b=+prompt("Enter your second number")
    var c= a+b;
    alert(c)
}
add();                           //Question3




function calc(num1,operat,num2){

    

    if(operat==="+"){
          return num1+num2
    }else if(operat==="-"){

        return num1-num2
    }
    else if( operat==="/"){
        return num1/num2

    }else {

        return num1*num2
    }

}
var result=calc(6,"*",6);
var result1=calc(6,"+",6);
var result2=calc(6,"-",66);
var result3=calc(6,"/",66);
var result4=calc(6,"%",6);
document.write(result) 
document.write(result1+"<br>") 
document.write(result2+"<br>") 
document.write(result3+"<br>") 
document.write(result4+"<br>")                  //Question4










function sq(c){

    var a=+prompt("Enter your first number:");
    if (a === 0) {  
        return 1;  
        document.write(a)
    } 
    else {  
        return a * sq( a - 1 );
        document.write(a)  
    } 
}
sq();                           //Question5



function user(){

     var a=parseInt(prompt("Enter Starting number:"))
     var b=parseInt(prompt("Enter Ending number:"));
    
for (i = a; i < b; i++) {
    document.write(  i + "<br>");
  }
   
}
user();                //Question6








function nest(){

    var a=parseInt(prompt("Enter Base number:"))
     var b=parseInt(prompt("Enter Perpendicular number:"));
     var c= (a*a)+(b*b);
     document.write("The value of Hypotenius is"+" "+c+"<br>")


function square(){

    var c= a*4;
    document.write("The value of Square is"+" "+c)
}
square();
}
nest();                 //Question8










function rect(){
var a=parseInt(prompt("Enter width of a triangle"));
var b= parseInt(prompt("Enter height of a triangle"));
var c=a*b;
document.write("The Area Of a Triangle is : "+" "+c)

}
rect();                   //Question9




function pal(){



var word=prompt("Enter your word");
var check="";
for(var i=word.length - 1; i>=0; i--){
check += word[i];
}
//document.write(word,check)
if(word===check){
    document.write(word+" "+ "is palandrome word")
}else{
    document.write(word+" "+ "is not  palandrome word")
}

}
pal();               //Question10





function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));             //Question11










function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));        //Question12







function str_count(str1)
{
  var str_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (str_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(str_count("The quick brown fox"));  //Question13


function calcCircumference(){
    var c=parseFloat( prompt("Enter circle radius"))
    var d=(2*(3.14)*c);
    document.write("The Circumference of the circle is :"+" "+d+"<br>")

    function calcArea(){
        var e=(3.14*c)
        document.write("The area of circle is : "+" "+e+"<br>")
    }
    calcArea();
}
calcCircumference();









