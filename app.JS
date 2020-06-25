//  Chapter 1#

alert("Welcome")
alert("Error! please Enter a valid password")
alert("welcome to js land...\nHappy coding")
alert("welcome to js land...")
alert("Happy Coding")
alert("Hello...I can run JS through my web browser's console")

//Chapter 2#

var username
var myName="Moiz Khan"
var message = "Hello World"
alert(message)
alert("Moiz")
alert("20 Years Old")
alert("Certified mobile and web development")
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")
alert("my email address is moizsmiu@gmail.com")
var book="A smarter way to learn Java Script"
alert("I am trying to learn from the book " + book )
document.write("Yeh! i can write HTML content through Java Script")
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")
 
// Chapter 3#

var age="20"
alert("I am " + age + " years old")
alert("You have visited this site 14 times")
var birthYear="1999"
document.write("My Birthday Year Is " + birthYear + "<br />" + "Data type of my declared variable is number")
var name
var title
var quantity
document.write("<br />John Doe ordered 5 T-shirt(s) on XYZ Clothing store")

// Chapter 4#

var first="My "
var middle="Name is "
var last="Moiz"
alert(first  +  middle + last )
// Illegal Name
// var moiz khan
// var 1day
// var %h
// var alert
// var to day
// //Legal Name
// var news
// var num
// var count$$
// var alpha_g
// var NewsOne
document.write("<h1>Rules for naming JS variables</h1><br />")
document.write("Variable names can only contain letters, numbers, $, and _ . For example $my_1stVariable<br />")
document.write("Variables must begin with a letter ,$ or _.  For example $name, _name or name<br />")
document.write("Variable names are case sensitive<br />")
document.write("Variable names should not be JS Keyword<br />")

//  Chapter 5#



//                          1st And 2nd

var no1=+prompt("Write first number")
var no2=+prompt("Write second number")
var add = no1 + no2
document.write("The Sum of " + no1 + " and " + no2 + " is " + add +"<br />")
var diff = no1 - no2
document.write("The difference of " + no1 + " and " + no2 + " is " + diff +"<br />") 
var product = no1 * no2
document.write("The product of " + no1 + " and " + no2 + " is " + product +"<br />")
var ratio = no1 / no2
document.write("The ratio of " + no1 + " and " + no2 + " is " + ratio +"<br />") 
var modulus = no1 % no2
document.write("The modulus of " + no1 + " and " + no2 + " is " + modulus +"<br /><hr /><br />")

//                             3rd 

var num
document.write("Value after variable declaration is undefined<br />")
 var num= 5
document.write("initial value: " + num + "<br />")
num++;
document.write("“Value after increment is:" + num +"<br />")
num = num + 7
document.write("Value After Addition is:" + num +"<br />")
--num
document.write("value after decrement is:" + num +"<br />")
num = num % 3
document.write("The reminder is:" + num +"<br /><hr /><br />")

//                              4th

var ticket=+prompt("how many tickets you want?")
var price = ticket * 600
document.write("The total cost of buy " + ticket + " tickets is " + price + " PKR <br /><hr /><br />") 

//                               5th

var table=+prompt("type a number which table you want?")
document.write("Table of " + table + "<br />")
document.write(table + " X 1 = " + (table*1) + "<br />")
document.write(table + " X 2 = " + (table*2) + "<br />")
document.write(table + " X 3 = " + (table*3) + "<br />")
document.write(table + " X 4 = " + (table*4) + "<br />")
document.write(table + " X 5 = " + (table*5) + "<br />")
document.write(table + " X 6 = " + (table*6) + "<br />")
document.write(table + " X 7 = " + (table*7) + "<br />")
document.write(table + " X 8 = " + (table*8) + "<br />")
document.write(table + " X 9 = " + (table*9) + "<br />")
document.write(table + " X 10 = " + (table*10) + "<br /><hr /><br />")

//                              6th 
 
var tempCelsius=+prompt("Write The Temperature In Celsius")
var Fahrenheit=(tempCelsius * 9/5)+32
document.write(tempCelsius + " C is " + Fahrenheit + "F<br />")
var tempFahrenheit=+prompt("Write The Temperature In Fahrenheit")
var Celsius=(tempFahrenheit - 32) * 5 / 9
document.write(tempFahrenheit + "F is " + Celsius + "C<br /><hr /><br />")

//                              7th

document.write("<h1>Shopping Cart</h1>")
var item1Quantity=+prompt("write the quantity of item 1")
var item2Quantity=+prompt("write the quantity of item 2")
var item1price=650
var item2price=100
var finalprice=(item1Quantity * 650 + item2Quantity * 100 + 100)
document.write("The price of item 1 is " + item1price + "<br />")
document.write("Quantity of item 1 is " + item1Quantity + "<br />")
document.write("The price of item 2 is " + item2price + "<br />")
document.write("Quantity of item 2 is " + item2Quantity + "<br /><br />")
document.write("Shipping charges 100<br /><br /><br />")
document.write("Total cost of your order is " + finalprice + "<br /><hr /><br />")

//                               8th

var totalMarks=+prompt("Write Total Marks")
var obtainMarks=+prompt("Write Obtain Marks")
var percentage=obtainMarks/totalMarks*100
document.write("<h1>Mark Sheet</h1><br /><br /><br />")
document.write("Total Marks = " + totalMarks +"<br />")
document.write("Obtain Marks = " + obtainMarks +"<br />")
document.write("Percentage = " + percentage+"%<br /><hr /><br />")

//                               9th

var dollar = 10
var riyal = 25
var pkr= dollar*104.80 + riyal*28
document.write("<h1>Currency In PKR</h1><br />Total Currency in PKR: " + pkr +"<br /><hr /><br />")

//                               10th

var myNum=5
myNum=(myNum+5*10)/2
document.write(myNum + "<br /><hr /><br />")

//                               10th

var mynum=5
mynum=mynum+5
mynum=mynum*10
mynum=mynum/2
document.write(mynum + "<br /><hr /><br />")

//                                11th

var currentYear= +prompt("Write Current Year")
var birthYear= +prompt("Write Birth Year")
var age=currentYear - birthYear
document.write("Current Year " + currentYear + "<br />")
document.write("Birth Year " + birthYear + "<br />")
document.write("Your Age is: " + age + "<br /><hr /><br />")

//                                 12th

var radius=+prompt("Write the Radius Of Circle:")
var circumference = 2 * radius * 3.14
var area = 3.14* radius * radius
document.write("<h1>The Geometrizer</h1><br />")
document.write("The Radius of Circle is: " + radius + "<br />")
document.write("The Circumference of Circle is: " + circumference + "<br />")
document.write("The Area of Circle is: " + area + "<br /><hr /><br />")

//                                 13th

var snack="Jam Heart"
var currentAge=21
var maximumAge=61
var perday=5
var totalSnack= (maximumAge-currentAge)*perday
document.write("<h1>The Lifetime Suppply Calculator</h1><br />")
document.write("Favourite Snack : "+ snack +"<br />")
document.write("Current Age : "+ currentAge +"<br />")
document.write("Estimated Maximum Age : " +maximumAge +"<br />")
document.write("Amount Of Snacks per day : " + perday +"<br />")
document.write("You will need " + totalSnack + " to last you until the ripe old age of " + maximumAge )


// Chapter 6 to 9

  //Question No 1

  var a=+prompt("Write a number")
  document.write("Result : <br />The value of a is : " + a +"<br /><hr /><br />")
  a=++a
  document.write("The Value of ++a is : " + a +"<br />")
  document.write("Now the value of a is : " + a +"<br /><br />")
  a=a++
  document.write("The value of a++ is : " + a +"<br />")
  document.write("Now The value of a is " + (a) +"<br /><br />")
  a=--a
  document.write("The value of --a is : " + a + "<br />")
  document.write("Now the value of a is : " + a + "<br />")
  a=a--
  document.write("The value of a-- is : " + a + "<br />")
  document.write("Now the value of a is : " + a +"<br /><hr /><br />")
  
  //                          //Question No 2
  
  var a=2
  var b=1
  document.write("a = " + a + "<br />")
  document.write("b = " + b + "<br />")
  var result=--a - --b+ ++b + b--
  document.write(result + "<br /><hr /><br />")
  
  
  //                          //OR
  
  var a=+prompt("Write Any value")
  var b=+prompt("Write Another value")
  document.write(--a +"<br />")
  document.write(--a - --b +"<br />")
  document.write(--a - --b + ++b +"<br />")
  document.write(--a - --b + ++b + b-- +"<br /><hr /><br />")                         
  
  //                          //Question No 3
  
  var name=prompt("Write Your Name")
  document.write(" Welcome " + name + "<br /><hr /><br />")                          
  
  //                          //Question No 4
  
   var table=+prompt("type a number which table you want?" , 5)
  document.write("Table of " + table + "<br />")
  document.write(table + " X 1 = " + (table*1) + "<br />")
  document.write(table + " X 2 = " + (table*2) + "<br />")
  document.write(table + " X 3 = " + (table*3) + "<br />")
  document.write(table + " X 4 = " + (table*4) + "<br />")
  document.write(table + " X 5 = " + (table*5) + "<br />")
  document.write(table + " X 6 = " + (table*6) + "<br />")
  document.write(table + " X 7 = " + (table*7) + "<br />")
  document.write(table + " X 8 = " + (table*8) + "<br />")
  document.write(table + " X 9 = " + (table*9) + "<br />")
  document.write(table + " X 10 = " + (table*10) + "<br /><hr /><br />")       
  
                           //Question No 5
  
  var subject1=prompt("Enter the name of 1st subject")
  var subject2=prompt("Enter the name of 2nd subject")
  var subject3=prompt("Enter the name of 3rd subject")
  var totalMarks=300
  var obtainMarks1=+prompt("Write the obtain marks of 1st subject")
  var obtainMarks2=+prompt("Write the obtain marks of 2nd subject")
  var obtainMarks3=+prompt("Write the obtain marks of 3rd subject")
  var totalObtainMarks=obtainMarks1+obtainMarks2+obtainMarks3
  var percentage=(totalObtainMarks/totalMarks)*100;
  document.write(subject1 + " Obtain Marks = " + obtainMarks1 +"<br />" )
  document.write(subject2 + " Obtain Marks = " + obtainMarks2 +"<br />" )
  document.write(subject3 + " Obtain Marks = " + obtainMarks3 +"<br />" )
  document.write("Total Obtain Marks = " + totalObtainMarks + "<br />")
  document.write("Percentage = " + percentage +"%<br /><hr /><br />")

  //  Chapter 9 to 11

   //Question No. 1

var city=prompt("Write Your City Name")
if(city==="karachi"){
    document.write("welcome to the city of light<br /><hr /><br />")
}

//                          Question No. 2

var gender=prompt("Select your gender")
if(gender==="male"){
    document.write("<br />Good Morning Sir<br /><hr /><br />")
}
if(gender==="female"){
    document.write("<br />Good Morning Ma'am<br /><hr /><br />")
}


                         //Question No. 3

var color=prompt("Write any name of the color traffic signal")
if (color==="red"){
document.write("<br />Must Stop<br /><hr /><br />")
}   
if (color==="green"){
document.write("<br />Move on<br /><hr /><br />")
}   
if (color==="yellow"){
document.write("<br />Ready To move<br /><hr /><br />")
}                 

                         //Question No. 4

var fuel=+prompt("how much fuel your car has?")
if(fuel<0.25) {
    document.write("Please refill the fuel in your car<br /><hr /><br />")
}                         

                         //Question No. 5

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}
     
                         //Question No.6

var obtainMarks=+prompt("write Obtain Marks")
var totalMarks=+prompt("Write Total marks")
var percentage= (obtainMarks/totalMarks)*100  
document.write("<h1>Mark Sheet</h1><br />")                       
document.write("Total Marks : " + totalMarks + "<br />")
document.write("Obtain Marks : " + obtainMarks + "<br />")
document.write("Percentage : " + percentage + "%<br />")
if(percentage>=80){
 document.write(" Grade = A-one<br />")   
 document.write("Remarks = Excellent<br /><hr /><br />")
}
else if(percentage>=70 && percentage<80) {
    document.write(" Grade = A<br />")
    document.write("Remarks = Good<br /><hr /><br />")
}
else if(percentage>=60 && percentage<70){
    document.write(" Grade = B<br />")
    document.write("Remarks = You need to improve<br /><hr /><br />")
}
else if(percentage<60){
    document.write(" Grade = Fail<br />")
    document.write("Remarks = Sorry<br /><hr /><br />")
}

                         //Question No.7

var userNo=+prompt("Guess the Secret Number")
if(userNo===5){
    document.write("Bingo! Correct answer<br /><hr /><br />")
}
else if(userNo===6){
    document.write("Close enough to the correct answer<br /><hr /><br />")
}
else{
    document.write("Sorry Try Again<br /><hr /><br />")
}

                         //Question No. 8

var numdiv=+prompt("Write a number")
if(numdiv % 3===0){
    document.write("The number is divisible by 3<br /><hr /><br />")
}
else{
    document.write("The number is not divisible by 3<br /><hr /><br />")
}                         

                         //Question No. 9

var MyNum=+prompt("write a number")
if(MyNum % 2===0){
    document.write(MyNum + " is Even Number<br /><hr /><br />")
}
else{
    document.write(MyNum + " is Odd Number<br /><hr /><br />")
}                         
             
                         //Question No. 10

var temp=+prompt("Write Today's Temperature<br />")
if(temp>=40){
    document.write("It is too hot outside.<br /><hr /><br />")
}                         
else if(temp>=30 && temp<40){
    document.write("The Weather today is Normal<br /><hr /><br />")
}
else if(temp>=20 && temp<30){
    document.write("Today’s Weather is cool<br /><hr /><br />")
}
if(temp>=10 && temp<20){
    document.write("OMG! Today’s weather is so Cool<br /><hr /><br />")
}

//     Chapter 12 to  13


                             //Question No. 1
                             char.charCodeAt
                             var char=prompt("Write Any Key")
                             if(char.charCodeAt==='65'){
                                 document.write("You Enter A")
                             }
                             
                                                          //Question No. 2
                             
                             var userNum1=+prompt("Enter Any Number")
                             var userNum2=+prompt("Enter Another Number")
                             if(userNum1===userNum2){
                                 document.write("Both Numbers Are Equal<br /><hr /><br />")
                             }
                             else if(userNum1>userNum2){
                                 document.write(userNum1 + " is greater<br /><hr /><br />")
                             }                          
                             else if(userNum2>userNum1){
                                 document.write(userNum2 + " is greater<br /><hr /><br />")
                             }
                             
                                                          //Question No. 3
                                                          
                             var userNum3=+prompt("Enter A Number")
                             if(userNum3===0){
                                 document.write("The Number is Zero<br /><hr /><br />")
                             }                             
                             else if(userNum3>0){
                                 document.write("The Number is Positive<br /><hr /><br />")
                             }
                             else if(userNum3<0){
                                 document.write("The Number is Negative<br /><hr /><br />")
                             }
                             
                                                          //Question No. 4
                             
                             var character=prompt("Enter any alphabate")
                             if(character==='a' || character==='e' || character==='i' || character==='o' || character==='u'){
                                 document.write("true<br /><hr /><br />")
                             }                         
                             else{
                                 document.write("False<br /><hr /><br />")
                             }    
                             
                                                          //Question No. 5
                             
                             var userpassword=prompt("Enter Password")
                             var mypassword="moizkhan"              
                             if(userpassword===""){
                                 document.write("Please Enter Your Password<br /><hr /><br />")
                             }
                             else if(userpassword===mypassword){
                                 document.write("Correct! The password you entered matches the original password<br /><hr /><br />")
                             }
                             else{
                                 document.write("Incorrect Password<br /><hr /><br />")
                             }            
                             
                                                          //Question No. 6
                             alert("Welcome")
                             var hour=+prompt("how many hours")
                             if (hour < 18) {
                                 alert("Good day")
                             }
                             else{
                                 alert("Good evening")
                             }
                             
                                                          //Question No. 7
                             
                             var time=+prompt("Wriite The Time like : 1900 = 7pm ")
                             if(time>=0000 && time<1200){
                                 document.write("Good Morning<br /><hr /><br />")
                             }                             
                             if(time>=1200 && time<1700){
                                 document.write("Good Afternoon<br /><hr /><br />")
                             }
                             if(time>=1700 && time<2100){
                                 document.write("Good Evening<br /><hr /><br />")
                             }                      
                             if(time>=2100 && time<=2359){
                                 document.write("Good Night<br /><hr /><br />")
                             }     

    //Chapter 14 to 16

    // Task 1
var student=[];

// Task 2
var student1=["Faizan","Uzair","Usama","Haseeb"];

// Task 3
var strng=["Cat","Dog","Fox"];

// Task 4
var bool=[false,true];

// Task 5
var mixArray=["Ramiz",22,true];

// Task 6
var i, edu=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]

// Task 7
document.write("<h3>Qualifications:</h3>"+"<br>");

for(i=0; i<edu.length;i++){
document.write("<h5>"+edu[i]+"</h5>");

}
// Task 8
var stuArray=["Faizan","Basit","Ali"];
var stuScore=["320","200","400"];
var total=500,stuPerc;

for(i=0; i<stuArray.length;i++){
stuPerc=stuScore[i]/total*100;
document.write("Score of "+stuArray[i]+" is "+stuScore[i]+". Percentage: "+stuPerc+"%"+"<br>");

}
// Task 9
var i,colorNames=["Red","Orange","Blue","Yellow"];
document.write("<h3>Color Names</h3><br>");
for(i=0; i<colorNames.length;i++){
document.write(colorNames[i]+"<br>");
}

// Task 10
var score=["420","300","470","490"];
document.write("<br>Scores of Students : "+score+"<br>");
score.sort();
document.write("Ordered Scores of Students : "+score+"<br>");

// Task 11
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var copyCities=cities.slice(2,4);
document.write("Cities list :<br> "+cities+"<br>");
document.write("Selected cities list :<br> "+copyCities);

// Task 12
var arr=["This","is","my","cat"];
document.write("<br>"+arr.join()+"<br><br>");

// Task 13
var i,storeArray=[];
storeArray[0]=prompt("Input first value");
storeArray[1]=prompt("Input second value");
storeArray[2]=prompt("Input third value");
storeArray[3]=prompt("Input fourth value");
for(i=0;i<storeArray.length;i++){

    
document.write("Out:<br>"+storeArray[i]+"<br>");
}

// Task 14

var i,storeArray1=[];
storeArray1[0]=prompt("Input first value");
storeArray1[1]=prompt("Input second value");
storeArray1[2]=prompt("Input third value");
storeArray1[3]=prompt("Input fourth value");
document.write("<br>");
for(i=storeArray1.length-1;i>=0;i--){

    
document.write("Out:<br>"+storeArray1[i]+"<br>");
}

// Task 15
var manufac=["Apple","Samsung","Nokia","Sony","Motorola","Haier"];
document.write("<br>"+"<select ><option value=''>"+manufac[0]
    +"</option><option value=''>"+manufac[1]
    +"</option><option value=''>"+manufac[2]
    +"</option><option value=''>"+manufac[3]
    +"</option><option value=''>"+manufac[4]
    +"</option><option value=''>"+manufac[5]
    +"</option></select>");


    // Chapter 16 to 20

    //Task 1
var arr=[["",""],["",""],["",""]];

// Task 2
var i,j,arr1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]  ];

for(i=0;i<3;i++){
for(j=0;j<4;j++){

    document.write(arr1[i][j]+" ");
}
document.write("<br>");
}

// Task 3
var i;
for(i=1;i<=10;i++){

    document.write("<br>"+i);
}


// Task 4
var table,leng,i,mulResult;

table=prompt("Enter a number to show its multiplication table");
leng=prompt("Enter length multiplication table");

document.write("<br>Multiplication table of "+table+" length "+leng+"<br>");

for(i=1;i<=leng;i++){
    mulResult=table*i;
document.write(table+" x "+i+" = "+mulResult+"<br>");

}

// Task 5

var i,fruits=["apple","banana","mango","orange","strawberry"];

for(i=0;i<fruits.length;i++){
document.write(fruits[i]+"<br>");
}

for(i=0;i<fruits.length;i++){
document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}


// Task 6
var i;
document.write("<br> <h3>Counting:</h3>");
for(i=1;i<=17;i++){
document.write(i+" ");
}
document.write("<br> <h3>Reverse counting:</h3>");
for(i=17;i>=1;i--){
document.write(i+" ");
}

document.write("<br> <h3>Even:</h3>");
for(i=2;i<=20;i){
    
document.write(i+" ");
i=i+2;
}

document.write("<br> <h3>Odd:</h3>");
for(i=1;i<=20;i){
    
document.write(i+" ");
i=i+2;
}
document.write("<br> <h3>Series:</h3>");
for(i=2;i<=20;i){
    
document.write(i+"K ");
i=i+2;
}


// Task 7
var i,user,A=["cake","apple pie","cookie","chips","patties"];

user=prompt("Search Bakery item");
for(i=0;i<=10;i++){
    if(user === A[i])
        {
            document.write(user + " is availaible at index " + i + " in our bakery");
            break;
        }
        else
        {
            document.write("We are Sorry " + user + " is not availaible in our bakery");
            break;
        }

}
// Task 8
var i,largest,B=[24,53,78,91,12];
document.write("<br><br>Array items: "+B+"<br>");
largest=B[0];
for(i=1;i<B.length;i++){

    if(largest<B[i]){
    largest=B[i];
    value=B[i];

    }
}
document.write("The largest number is "+value);


// Task 9
var i,largest,B=[24,53,78,91,12];
document.write("<br><br>Array items: "+B+"<br>");
largest=B[0];
for(i=1;i<B.length;i++){

    if(largest>B[i]){
    largest=B[i];
    value=B[i];

    }
}
document.write("The smallest number is "+value);


// Task 10
var num3=5;
document.write("<br>");
for(num3=5;num3<=100;){

document.write(num3+", ");
num3=num3+5;
}


                             