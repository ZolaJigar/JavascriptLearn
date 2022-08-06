// let namsteBtn = document.querySelector('button'); //Query selector is function which is used to select element 
// namsteBtn.addEventListener('click' , inputMsg) ;   //When the button is clicked the inputMsg name function will be invoke

// // /*
// //     its multiline comment for javascript
// //     above its multiline comment
// //     ---------
// //     -----
// //     ----
// //     These lines are ignored by compiler
// // */

// function inputMsg() {
//     let name = prompt("Enter name of student") ;  
//     namsteBtn.textContent = 'Roll No. 1:' +name ; //Changing the content of the string which is inside the HTML file by this line replacing with the text of name variable
// }


//There are 2 data types in javascript let's see them below

// 1. Primitve data type - Boolean , undefined

//(1) . Boolean represents one of two values true or false

var yes = true ;
var no = false ;
var a = 25 ;
if(a==24)
{
    console.log(yes);
}
else{
    console.log(no);
}

//(2) . Undefined its not equal to 0.. its like this variable can not contain anything
var b ;
console.log(b) ; //Undefined type of variable

//(3) .  String type 
var str1 = "Hello world" ;  //You can also declare string with single cot ('')
console.log(str1);
console.log(typeof(str1));

//(4) . Null data type
var nullable = null ;
console.log(nullable);
console.log(typeof(nullable));

//(5) . Number type
var int = 11 ;
var float = 3.5 ;
var hex = 0xfff ;
var exponential = 2.2520010 ;
var octal = 0200 ;
console.log(int + "\n" + float + "\n" + hex + "\n" + exponential + "\n" + octal + "\n");

//Difference between double equal to and triple equal to 
var x = 3 == 3 ;
console.log(x);

//Double equal to wont see weather we are comparing the thing with string or number like 3 == '3' is true for it 
var x1 = 3 == '3';
console.log(x1);

var x2 = 3 === 3;
console.log(x2);

//Triple equal to will see we are comparing the string with number or not that's why it will return false to US
//In short we want same value also same type whom we are comparing with it
var x2 = 3 === '3';
console.log(x2);





