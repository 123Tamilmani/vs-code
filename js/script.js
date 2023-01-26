'use strict'; // to show some hidden errors.
//javascript

//Type conversion and coercion

//Type conversion

// const inputYear='2002';
// console.log(Number(inputYear));

// console.log(inputYear + 18);
// console.log(Number(inputYear) + 18);

// console.log(Number('tamil'));
// console.log(String(inputYear));

// 2002
// 200218
// 2020
// NaN
// 2002

//Type coercion

// console.log('I am ' + 20 + ' years old');

// console.log('34'-'12'-10);
// console.log('34'*'2');
// let n='1' + 1;
// n=n-1;
// console.log(n);

// I am 20 years old
// 12
// 68  
// 10

//truthy and falsy values

// Five falsy values : 0,'',undefined,null,NaN

// console.log(Boolean(0));                //false
// console.log(Boolean(undefined));        //false
// console.log(Boolean('tamil'));          //true
// console.log(Boolean({}));               //true

// let age= 20;

// if(age)
// {
//     console.log("age is defined!");
// }
// else
// {
//     console.log("age is undefined!");
// }
//age is defined!

// let age;

// if(age)
// {
//     console.log("age is defined!");
// }
// else
// {
//     console.log("age is undefined!");
// }
//age is undefined!

//age is undefined!

// let age=0;

// if(age)
// {
//     console.log("age is defined!");
// }
// else
// {
//     console.log("age is undefined!");
// }
// age is undefined!


//Equality operator

// let age = 18;

// if(age === 18) //strict equality
//     console.log("You are eligible to vote"); //You are eligible to vote

// age="18";
// if(age == 18) //lossly equality
//     console.log("lossly equal");

// let age = prompt("enter your age : ");

// console.log(age);           //20
// console.log(typeof(age));   //string

// if(age !== 18)
//     console.log("not 18")       //not 18

// //boolean logics AND OR NOT

// // const hasDriverlicense = true;
// // const hasGoodvision =  true;

// // console.log(hasDriverlicense && hasGoodvision);   //true


// const hasDriverlicense = true;
// const hasGoodvision =  true;

// console.log(hasDriverlicense && hasGoodvision); //false
// console.log(hasDriverlicense || hasGoodvision); //true

// const hasDrive = hasDriverlicense && hasGoodvision;

// if(hasDrive)
// {
//     console.log(`he/she can drive`);
// }
// else
// {
//     console.log(`not able to drive`)        //not able to drive
// }

// const isTired = false;

// if(hasDriverlicense && hasGoodvision && !isTired)
// {
//     console.log("can drive");   //can drive
// }
// else
// {
//     console.log("can't drive");
// }


//switch statement

// const day = 'monday';

// switch(day)
// {
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(day);   //monday
// }

// const day = 'wednesday';

// switch(day)
// {
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(da y);  //wednesday
// }

// const day = 'friday';

// switch(day)
// {
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(day);
//         break;
//     default :
//     console.log("Nothing");     //Nothing
// }

// const day = 'tuesday';

// switch(day)
// {
//     case 'monday':
//         console.log('monday');
//         break;
//     case 'tuesday':
//         console.log('tuesday'); //tuesday
//         //break;
//     case 'wednesday':
//     case 'thursday':
//         console.log(day);   //tuesday
//         //break;
//     case 'saturday':
//         console.log('saturday');    //saturday
//         break;
//     default :
//     console.log("Nothing");     
// }


//Statements and Expressions

//Expressions 3+4
//1990
//true && false && !false

//statements

// if(10>5)
// {
//     const big = '10 is bigger';
// }

// //Conditional ternary operator

// const age = 20;
// age >= 18 ? console.log("eligible to vote") : console.log("not eligible to vote");  //eligible to vote

// const drink = age>=18 ? 'wine' : 'water';
// console.log(drink);     //wine

// console.log(`I like to have ${age >= 18 ? 'wine' : 'water'}`);  //I like to have wine


// use strict   

// let hasDriverslicense = false;
// const passTest =true;

// if(passTest) hasDriverlicense = true;

// if(hasDriverslicense) console.log('I have drivresLicense'); //Uncaught ReferenceError: hasDriverlicense is not defined

//functions

// function logger(){
//     console.log('My name is Tamil');
// }

// //callig, running, invoking a function
// logger();   //My name is Tamil
// logger();   //My name is Tamil

// function fruitPocessr(apples, oranges){
// console.log(apples, oranges);   //2 3
// const juice = `juice with ${apples} and ${oranges} oranges`;
// //console.log(juice);
// return juice;
// }

// let res = fruitPocessr(2,3);
// console.log(res);   //juice with 2 and 3 oranges
// console.log(fruitPocessr(4,6)); //juice with 4 and 6 oranges

// let num;

// function store()
// {
//     num=5;
// }

// store();

// console.log(num);
// let str="123";
// function strTonum(str)
// {
//     str=Number(str);
//     return str;
// }
// let num = strTonum(str);
// console.log(typeof num);   //number

//Function declaration vs function expression

// //function declaration
// function ageCalc1(birthYear){
// return 2022-birthYear;
// }

// const age1 = ageCalc1(2002);
// //console.log(age1);

// //function expression
// const ageCalc2 = function (birthYear){
//     return 2022-birthYear;
// }
// let age2 = ageCalc2(2002);
// console.log(age1, age2);  //20 20

//Arrow functions

// let ageCalc3 = birthYear => 2022 - birthYear;
// let age3 = ageCalc3(2002);
//console.log(ageCalc3(2002));
// console.log(age3); 

// let add = (x,y) => x + y;

// let res=add(2,3);
// console.log(res);

// const yearsUntilRetirement = (firstName, birthYear) => {
//     const age = 2022 - birthYear;
//     const retirement = 65 - age;
//     //return retirement;    //45
//     return `${firstName} retires in ${retirement} years`;
// } 

// console.log(yearsUntilRetirement("Tamil", 2002));   //Tamil retires in 45 years


//Functions calling other Functions

// function fruitCutter(fruit)
// {
//     return fruit * 4;
// }
 
// function fruitPocesser(apples, oranges){
//    // const applePeices = fruitCutter(apples);
//   //  const orangePeices = fruitCutter(oranges);
//     const juice = `juice with ${fruitCutter(apples)} apple and ${fruitCutter(oranges)} orange peices`;
//     return juice;
// }

// console.log(fruitPocesser(2,3));


// //Reviewing Functions

// const ageCalc = function (birthYear){
//     return 2022-birthYear;
// }

// const yearsUntilRetirement = function (firstName, birthYear){
//     const age = ageCalc(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0)
//         return retirement;  
//     else
//         return -1;  
   
//         //return `${firstName} retires in ${retirement} years`;
// } 

// console.log(yearsUntilRetirement("Tamil", 1950));
// console.log(yearsUntilRetirement("Vijay", 1990));

//Coding challenge

// const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;

// // const dalfinScore = calcAverage(85, 54, 41);    //dalfin is the winner 60 vs 28
// // const kolaScore = calcAverage(23, 34, 27);

// const dalfinScore = calcAverage(44, 23, 71);       //No one is the winner!
// const kolaScore = calcAverage(65, 54, 49);

// const Winner = function(dalfinScore, kolaScore){
//     if(dalfinScore > kolaScore *2)
//         return `dalfin is the winner ${dalfinScore} vs ${kolaScore}`;
//     else if(kolaScore > dalfinScore * 2)
//         return `kola is the winner ${kolaScore} vs ${dalfinScore}`;
//     else    
//         return `No one is the winner!`;
// }
// console.log(Winner(dalfinScore,kolaScore));


// // Arrays

// const friends = ['Vijay', 'Nithin', 'Sakthi', 12];  //Array is non primitive and mutable

// console.log(friends);       //(4) ['Vijay', 'Nithin', 'Sakthi', 12]

// console.log(friends[0]);    //Vijay

// console.log(friends.length);    //4

// console.log(friends[friends.length-1]); //12

// friends[3] = 'Ponjeeva';

// console.log(friends);   //(4) ['Vijay', 'Nithin', 'Sakthi', 12]

// //friends = ['Tamil', 'Mani'];    //Uncaught TypeError: Assignment to constant variable

// const firstName = "Tamil"
// const tamil = [firstName, 'Mani', 2022-2000, 'student', friends];

// console.log(tamil);     //(5) ['Tamil', 'Mani', 22, 'student', Array(4)]
//                         // (4) ['Vijay', 'Nithin', 'Sakthi', 'Ponjeeva']

          
// const years = [1990, 2002, 2005, 2010, 2020];

// const ageCalc = function (birthYear) {
//     return 2022-birthYear;
// }

// console.log(years); //(5) [1990, 2002, 2005, 2010, 2020]

// console.log(ageCalc(years));    //NaN

// const age1 = ageCalc(years[0]);
// console.log(age1);  //32

// const ages = [ageCalc(years[0]), ageCalc(years[1]), ageCalc(years[2]), ageCalc(years[3]), ageCalc(years[4])];
// console.log(ages);  //[32, 20, 17, 12, 2]


// //Basic Array Oprations Method

// const friends = ['Vijay', 'Nithin', 'Sakthi'];

// //Add elements

// //push method

// friends.push('ponjeeva');
// console.log(friends);   //['Vijay', 'Nithin', 'Sakthi', 'ponjeeva']

// //Unshift method

// friends.unshift('Tamil');
// console.log(friends);   //(5) ['Tamil', 'Vijay', 'Nithin', 'Sakthi', 'ponjeeva']

// //remove elements

// //Pop method

// friends.pop();
// console.log(friends);   //['Tamil', 'Vijay', 'Nithin', 'Sakthi']

// //shift method

// friends.shift();
// console.log(friends);   //['Vijay', 'Nithin', 'Sakthi']

// //indexOf()
// console.log(friends.indexOf('Sakthi')); //2

// //includes()
// console.log(friends.includes('Vijay')); //true

//Coding Challenge 

// function tipCalc(bill)
// {
//     let x;
    // switch(bill){
    //     case (bill>=50 && bill<=300):
    //         x = (bill*15)/100;
    //         break
    //     default:
    //         x = (bill*20)/100;
    // }

//     if(bill>=50 && bill<=300)
//     {
//         x = (bill*15)/100;
//     }
//     else{
//         x = (bill*20)/100;
//     }
//     return x;
// }

// const bills = [250, 20, 350];

// // const tip1 = tipCalc(bills[0]);
// // const tip2 = tipCalc(bills[1]);
// // const tip3 = tipCalc(bills[2]);
// // tips.push(tip1);
// // tips.push(tip2);
// // tips.push(tip3);
// // console.log(tip1, tip2, tip3);  //37.5 4 70

// const tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

// console.log(tips);  //[37.5, 4, 70]

// const totals = [tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]];
// console.log(totals);    //[287.5, 24, 420]

