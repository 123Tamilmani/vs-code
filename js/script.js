'use strict';// to show some hidden errors.
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

////Objects

// const Tamil = {
//     firstName: 'Tamil',
//     lastName: 'Mani',
//     age: 22,
//     friends: ['vijay', 'nithin', 'sakthi']
// };

// console.log(Tamil); //{firstName: 'Tamil', lastName: 'Mani', age: 22, friends: Array(3)}age: 22firstName: "Tamil"friends: (3) ['vijay', 'nithin', 'sakthi']lastName: "Mani"[[Prototype]]: Object

// //Dot vs Bracket Notation


// console.log(Tamil.firstName);   //Tamil
// console.log(Tamil['lastName'])  //Mani

// const inputOption = prompt("what would you likes to know : Tamil's => firstName; lastName; age; friends");
// console.log(Tamil.inputOption); //undefined
// console.log(Tamil[inputOption]);    //Tamil

// Tamil.location = 'salem';
// Tamil['Insta'] = 'tamil_vij';

// console.log(Tamil); //{firstName: 'Tamil', lastName: 'Mani', age: 22, friends: Array(3), location: 'salem', …}

// console.log(`${Tamil.firstName} has ${Tamil.friends.length} friends and his best friend is ${Tamil.friends[0]}`);   //Tamil has 3 friends and his best friend is vijay


// //Object Methods

// const Tamil = {
//     firstName: 'Tamil',
//     lastName: 'Mani',
//     birthYear: 2002,
//     friends: ['vijay', 'nithin', 'sakthi'],
//     driverLicense: true,
//     checkDriverLicense: function(driverLicense)
//     {
//         this.hasDriverLicense = this.driverLicense ? 'yes' : 'no';
//         return this.hasDriverLicense;
//     },
//     // calcAge: function(birthYear){
//     //     return 2022-birthYear;
//     // }

//     // calcAge: function(){
//     //     //return 2022-Tamil.birthYear;    //20
//     //     return 2022-this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2022-this.birthYear;
//         return this.age;
//     }
// };

// console.log(Tamil.checkDriverLicense());    //yes
// console.log(Tamil.hasDriverLicense);    //yes
// console.log(Tamil.driverLicense);   //true

// // console.log(Tamil);

// // console.log(Tamil.calcAge());   //20
// // console.log(Tamil.age);  //20
// // console.log(Tamil.age); //20
// // console.log(Tamil.age); //20
// // console.log(Tamil.age); //20

// // const x=Tamil.calcAge(2002);
// //.log(x); //this.age

// // const x=Tamil.calcAge(Tamil.b);
// // console.log(x); //20

//Coding challenge


// const mark = {
//     firstName : 'Mark',
//     height : 1.69,
//     weight : 78,
//     //markBMI,
//     calcBMI : function(){
//         let markBMI = this.weight/(this.height**2);
//         return markBMI;
//     }
// }

// const john = {
//     firstName : 'John',
//     height : 1.95,
//     weight : 92,
//     //johnBMI,                       //Mark has higher score 27.309968138370508 (27.309968138370508 vs 24.194608809993426)
//     calcBMI : function(){            
//         let johnBMI = this.weight/(this.height**2);
//         return johnBMI;
//     }            
// }

// console.log(`${mark.calcBMI() > john.calcBMI() ? mark.firstName : john.firstName} has higher score ${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()} (${mark.calcBMI()} vs ${john.calcBMI()})`);


// const mark = {
//     firstName : 'Mark',
//     height : 1.69,
//     weight : 78,
//     //markBMI,
//     calcBMI : function(){
//         let markBMI = this.weight/(this.height**2);
//         return markBMI;
//     }
// }

// const john = {
//     firstName : 'John',
//     height : 1.95,
//     weight : 92,
//     //johnBMI,
//     calcBMI : function(){
//         let johnBMI = this.weight/(this.height**2);
//         return johnBMI;
//     }
// }

// console.log(`${mark.calcBMI() > john.calcBMI() ? mark.firstName : john.firstName} has higher score ${mark.calcBMI() > john.calcBMI() ? mark.calcBMI() : john.calcBMI()} (${mark.calcBMI()} vs ${john.calcBMI()})`);
 

// //Iteration : The For Loop

// for(let i=1; i<=3; i++)
// {
//     console.log(`Hello No : ${i}`); //Hello No : 1
// }                                   //Hello No : 2
//                                     //Hello No : 3



// //Looping Arrays Breaking and Continuing


// const tamil = ['Tamil', 'Mani', 20, ['vijay',   'sakthi', 'nithin']];
 
// console.log(tamil[0]);  //Tamil
// for(let i=0;i<tamil.length ;i++)    
// {
//     console.log(tamil[i]);      //Tamil
//                                 //Mani
//                                   //20
//                                 //(3) ['vijay', 'sakthi', 'nithin']
// }

// const types = [];

// for(let i=0;i<tamil.length;i++)
// {
//     types[i] = typeof tamil[i];
// }

// console.log(types); //(4) ['string', 'string', 'number', 'object']

//  const years = [1992, 1998, 2000, 2002, 2010];

//  const ages = [];

//  for(let i=0;i<years.length;i++)
//  {
//     ages.push(2022-years[i]);
//  }

//  console.log(ages);     //[30, 24, 22, 20, 12]


//  // Continue
// for(let i=0;i<tamil.length;i++)
// {
//     if(typeof tamil[i] !== 'string') continue;
//     console.log(tamil[i]);      //Tamil
//                                 //Mani
// }

// //Break;

// for(let i=0;i<tamil.length;i++)
// {
//     if(typeof tamil[i] === 'number') break;
//     console.log(tamil[i]);       //Tamil
//                                 //Mani
// }


//Looping in Backward and Loops in Loops

// const tamil = ['Tamil', 'Mani', 20, ['vijay',   'sakthi', 'nithin']];

// for(let i = tamil.length-1;i>=0;i--)
// {
//     console.log(tamil[i]);  //(3) ['vijay', 'sakthi', 'nithin']
//                             //20
//                             //Mani
//                             //Tamil
// }

// for(let i=1;i<4;i++)
// {
//     console.log(`____starting exersice ${i}`);
//     for(let j=1;j<6;j++)
//     {
//         console.log(`rep No : ${j}`);
//     }
// }

// ////output

// // ____starting exersice 1
// //  rep No : 1
// //  rep No : 2
// //  rep No : 3
// //  rep No : 4
// //  rep No : 5
// //  ____starting exersice 2
// //  rep No : 1
// //  rep No : 2
// //  rep No : 3
// //  rep No : 4
// //  rep No : 5
// //  ____starting exersice 3
// //  rep No : 1
// //  rep No : 2
// //  rep No : 
// //  rep No : 5


//While Loop
// let rep=1;
// while(rep <= 5)
// {
//     console.log(`rep No : ${rep}`);
//     rep++;
// }

//o/p

//  rep No : 1
//  rep No : 2
//  rep No : 3
//  rep No : 4
//  rep No : 5

// let dice = 0;
// // console.log(dice);
// while(dice!==6)
// {
//     dice = Math.trunc(Math.random()*7);
//     console.log(dice);
// }

////coding challenge

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTips = function(bill)
// {
//     return (bill*15)/100;
// } 

// const calcAvg = function(arr){
//     let sum = 0;
//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     return sum/arr.length;
// }

// for(let i=0;i<bills.length;i++)
// {
//     tips.push(calcTips(bills[i]));
//     totals.push(tips[i] + bills[i]); 
// }

// console.log(`tips ${tips}`);                //tips 3.3,44.25,26.4,66,5.55,15.75,1.5,165,12.9,7.8
// console.log(`totals ${totals}`);            //totals 25.3,339.25,202.4,506,42.55,120.75,11.5,1265,98.9,59.8
// console.log(`average ${calcAvg(totals)}`);     //average 267.14500000000004

// //coding challenge

// const temp = [1,-2,-3,4,-6,7,3,'error',2,7];

// const tempamplitude = function(min,max)
// {
//     return max-min;
// }

// let min=temp[0];
// let max=temp[0];

// for(let i=0;i<temp.length;i++)
// {
//     if(typeof temp[i] == 'string')
//     {
//         console.log(temp[i]);
//         continue;
//     }
//     if(temp[i]<min)
//     {

//         min=temp[i];
//     }
//     if(temp[i]>max)
//     {

//         max=temp[i];
//     }
// }

// console.log(tempamplitude(min,max));

// //coding challenge

// const foreCast = function(arr)
// {
//     let res = "...";
//     for(let i=0;i<arr.length;i++)
//     {
//         res += `${temp[i]} cel in day ${i+1}...`;
//     }
//     return res;
// }

// const temp = [20, 21, 30];

// console.log(foreCast(temp));