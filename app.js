//first// mnishvnelobebi da tipebi operatorebi



//programisti rasac aketebs aris is rom  bitebi da baitebi daaqvs sadac unda iq da rogorc unda
//azrs romelic gveubbneba rogor gadavchrat problema nabij nabij algoritmi qvia



//mnishvnelobebi aris ricxvebi, atwiladebi da ash
//tipebi aris ra wodeba aqvt elementebs stringi ricxvi undefind tu ravi racaa ra magis dedamovtyan
//operatorebi aris mimateba gamokleba gamravleba gayofa
//operatori aris raRac rac akeTebs operacias ragacaze
//ricxviti operatorebi aketeben operaciebs ricxvebze
//javaskriptshi textis chaweris sami gza arsebobs stringebi anu (`'") ert brjyaliani da or brchyalians shoris gansxvaveba saertod ar aris (back tick eg mesamea da amis gamosayeneblad tabis zemotaa da es gansxvavebulia im orze  da gansxvavebaa is rom mas kidev ragac shesadzleblobebi aqvs)
// (escapeingi)rodesac stringis gawyveta ginda da is ginda qvevit chamoagdos anu ert xazze ar ginda amistvis sachiroa (\n) gvchirdeba anu new line da tu ginda stringshi iyos es \ mashin \n win daartyam
// operatorebi bevrnairia aseve mati gamoyeneba teqstebshic sheidzleba
// prompt("what is your name") popupwindowaaa. aseve amis dalogvac sheidzleba anu consol logshi amogigdebs imas rasac prompts etyvi console.log(prompt("whats your name"))

// console.log("hello, " + prompt("whats your name")) 

// console.log("hello, " + prompt("whats your name")) 











// second // programis struqtura cvladebi da pirobiti operaciebi









// CVLADEBI

// cvladebia LET VAR da CONST const dzerski tipia anu konstanta da ar icvleba skopeshic
// let caught = 5*5
// console.log(caught)

// let mood = "light"
// console.log(mood)
// mood = "dark"
// console.log(mood)
// orive daibechdeba ratqmaunda

// let luigisDebt = 140
// luigisDebt = luigisDebt - 35
// console.log(luigisDebt)

// let one = 1 , two = 2    cvladebi ramdenic inda imdeni were ogond mdzime  
// console.log(one + two)   aseve mati shekreba da math qmedebebi shegidzlia    


// var saxeli = "Rene"
// const greet = "hello, " stingebis shekreba
// console.log( greet + saxeli )


// Math max and min function
// console.log(Math.max(2,4) * 100)
// console.log(Math.min(2,4) * 100)

// let max = Math.max(5,10,15)
// console.log(max)




//THIRD//  PIROBITI OPERACIEBI 


// let theNumber = prompt("pick a number")
// console.log("your number is the squear root of " + theNumber*theNumber)

// let theNumber = Number(prompt("pick a number"))
// console.log("your number doubled " + (theNumber+theNumber))



// Nan - Not A Number

// let theNumber = prompt("pick a number")

// if (theNumber >= 90 ) {
//     console.log("u got an A")
// }
// if (theNumber > 80 && theNumber < 90 ) {
//     console.log("u got an B")
// }
// if (theNumber > 70 && theNumber <= 80 ) {
//     console.log("u got an C")
// }
// if (theNumber < 70  ) {
//     console.log("dickhead u r stuck")
// }








// FOURTH //CIKLEBII DA MASIVEBI 

// ciklebshi shedis while ,do while, for and switch
//else , if and else if










//while

// let number = 0
// while(number<=12){
//     console.log(number +1) // (number)
//     number=number+2
// }

// whiles shemtxvevashi tu jer amowmebs kods da mere
// aketebs do while shemtxvevashi jer aketebs
//da mere amowmebs kods 

//do while

// let Yourname;
// do{ 
//    yourName = prompt("who are yoy bitch") 
//    if (yourName !="Rene"){
//     console.error("invalid name")
//    }
// } while (!yourName)

// console.log(yourName)

//for 

// for (let number=0;number<=12;number=number+2){
//     console.log(number)
// }


// for (let current = 20; ; current++){
//     if(current % 7 == 0){      tu 20 is 7 ze gayofisas nashti ar gveqneba mashin gacherdes anu roca gatruevdeba
//         console.log(current)
//         break
//     }
// }


//else if

// let x = prompt("Who's your X?")

// if (x === "value1") console.log("My x is You")
// else if (x === "value2") console.log("My x is your sister")
// else if (x === "value3") console.log("My x is your mom")
// else console.log("Default Action")


//switch 
// switch (prompt("what is the weather like")){
//     case "rainy":
//     console.log("remember to bring an umbrella")
//     break
//     case "sunny":
//     console.log("dress lightly")
//     break
//     case "cloudy":
//     console.log("go outside")
//     break
//     default: 
//     console.log("unknown weather")
//     break
// }







// FUNQCIEBI, OBIEQTEBI DA MASIVEBI 










//FUNQCIEBI 
// funqcia aris abstraqcia romelic garkveul instruqciebs aketebs

// const squear = function(x){
//     return x*x                 //martivi funqcia ubralod
// }                              //sintaqsistvis aucilebelia dauwero function mag x aris parametri
// console.log(squear(12))

// const power=function(base,exponent) {
//     let result = 1
//     for(let count=0;count<exponent;count++){
//         result *= base
//     }
//     return result
// }
// console.log(power(2,10))


// let x =10 
// if(true){        // shida scopedan garet gaxedva shegvidzlia garedan shignit ara.amitomaa var tsl kaci rom scopebs shoris shegvidzlia mivwvdet amitomacaa qvevit rom z xedavs romelic shida scopeshia da lets vegar imitorom leti scopeshi ylea
//     let y =20
//     var z = 30
//     console.log(x+y+z)
// }
// console.log(x+z)




//hummus 4 every1

// const hummus = function(factor){
//     const ingredient =function(amount,unit,name){
//     let ingredientAmount = amount * factor;
//     if(ingredientAmount > 1){
//         unit+= "s"
//     }
//     console.log(`${ingredientAmount}${unit}${name}`)  // rodesac dasaxelebit gvaqvs sheqmnili cvladebi da gvinda isini gamoviyeneot viyenebt template litteral s anudolaris nishani($) da mere figuruli frchxilebi({}) amatshi chasvam da gamoiyenebs mnishvnelobebs console.log 
// }
// ingredient (1,"can","chickpeas")
// ingredient(0.25,"cup","tahini")
// ingredient(0.25,"cup","lemon juice")
// ingredient(1,"clove","garlick")
// ingredient(2,"tablespoon","olive oil")
// ingredient(0.5,"teaspoon","cumin")
// }
// hummus(5)


// funqciebi adian kompilaciisas zevit yvelaze amitom shegvidzlia jer gamovidzaxot function da mere mivanichot mnishvneloba logika i mean



//ARROW FUNCTIONS 

// const squear1 = (x) => {return x*x}
// const squear2 = x => x*x //uketesi chanaweri


// const power = (base,exponent)=> {
//     let result = 1
//     for(let count =0;count<exponent;count++){    //aman motyna chemi tvini
//     result = result * base
// }
// return result
// }
// console.log(power(2,10))








// MASIVEBI 

//masivi aris mnishvnelobebis kalata 

// let listOfNumbers = [2,3,5,7,()=> console.log("hello world")] //masivshi funqciis shenaxvac sheidzleba
// console.log(listOfNumbers[0])
// console.log(listOfNumbers[3])   //amogeba sheidzleba kalatidanase
// console.log(listOfNumbers[3-1])
// listOfNumbers[4]()     //tu masividan ginda funqciis gamotana da mand console log weria ukve masivs agar miutiteb consolelogs da miwvdebi romel adgilzec dgas da gverdit miuwer frchxilebs imitorom frchxilebit idzaxeb funqcias



// let name = ("rene")
// console.log(name.length)

// let names = ["rene", "ketamini","xidze", "xazi","kaia", "ynosva",  ]
// console.log(names [names.length - 1] ) //esmashin roca bolos amotana ginda


// let names = ["rene", "ketamini","xidze", "xazi","kaia", "ynosva",  ]
// let index = names.indexOf("rene")   //es index amoigebs pirit kbilebit ara
// console.log(names[index])

// let doh ="jimni"
// console.log(typeof 3)   //typeof geubneba ra tipisaa konkretuli ram rac mieci
// console.log(doh)



// let sequence = [1,2,3]
// sequence.push(4)
// sequence.push(5)    //push amatebs masivs elements
// console.log(sequence)
// console.log(sequence.pop()) // .pop aklebs bolo elements araferi ar gadaecema frchxilebs
// console.log(sequence)












// OBIEQTEBI







// let description = {
//     work:"went to work",
//     "touched tree":"touched a tree"  //rodesac keys adgilze gvaq etze meti sityva is brchyalebshi unda chavsvat
// }
// console.log(description["touched tree"])// da rodesac brchyalebshi chasmuli key dan gvinda values amotana mashin is []aset frchxilebsi unda chavagdot


// let description = {
//     work:"went to work",
//     "touched tree":"touched a tree"  
// }
// let key = "work"
// console.log(description[key]) // rodesac gasagebis sityva inaxeba cvladshi da tu gvinda misi values gamotana mashin isic []aset frchxilebshi unda chavsvat




// let anObject = {left:1, right:2};
// console.log(anObject.left);
// delete anObject.left;            //delete washlis objects ase 
// console.log(anObject.left)
// console.log(anObject);
// console.log("left" in anObject);     //itoshi in amowmebs esatu is obieqti tu gvaq shignit     
// console.log("right" in anObject);


// let obj = {x: 0, y: 0,z:2}
// console.log(Object.keys(obj)) // amas amoaqvs marto keyebi
// console.log(Object.values(obj)) // amas amoaqvs valuebi
// console.log(Object.entries(obj)) // amas amoaqvs yvelaferi 


// let objectA = {a:1, b:2};
// Object.assign(objectA,{b:3,c:4});//Object.assign gamoiyeneba gasaertianeblad
// console.log(objectA);


//obieqtebis masivi 
// let journal = [
//     {events: ["work", "touched tree", "pizza",
//               "running", "television"],
//      squirrel: false},
//     {events: ["work", "ice cream", "cauliflower",
//               "lasagna", "touched tree", "brushed teeth"],   // usayvarlesad amoigeb nebismier elements masivshi ase elementis elementsac
//      squirrel: false},
//     {events: ["weekend", "cycling", "break", "peanuts",
//               "beer"],
//      squirrel: true},
// ]
// console.log(journal[0].events[2])



// primitiuli mnishvnelobebis mutacia ar shegvidzlia
// masivebis da obieqtebis ki
// let name = "rene"
// name [0] = "T"   //ase magalitad
// console.log(name)


// let names = ["rene","brian"]
// names[1]="louis"           //es magaliti imis ro masivis mutacia sheidzleba
// console.log(names)


// let person = {    // es magalitad obieqtebze
//     name:"alex",         
//     age:18           // ise mand ro const iyos let nacvlad mainc shevcvlidit shignit obieqtebs magic
// }               
// person.name = "ruby"
// console.log(person)


// uteslesi ragac 
// let object1 = {value:10}
// let object2 = object1
// let object3 = {value:10} 
// console.log(object1 == object2) 
// console.log(object1 == object3) 

// obj1 da obj3 ro yofiliyo xuti mashin dailogeboda true da true
//es imitom xdeba ro obieqtebi dardeba referensad anu mdebareobit da primitiuli mnishvnelobebi valuebad
// imitom daloga 5ebis dros true rom mati mnishvnelobebi sheadara da ara adgilebi sadac isini shenaxulebi iyvnen RAMshi
// masivebzec asea zustad






// masivis interacia-   for of loop

// for (let i = 0; i < JOURNAL.length; i++) {
//     let entry = JOURNAL[i];
//     console.log(entry)
//   }

// for of loop  gamoiyeneba marto masivebis interaciistvis

// for (let entry of JOURNAL){
//     console.log(entry)
// }


//tu ginda gacheko konkretuli obieqti tu aris masivshi 

// let arr = [1,2,3,"rene",false,null]
// console.log(arr.includes(null))

// tu raime data mogivida da gartymashi ar xar sad imyofeba konkretuli elementi mashin unda ipovo ase ra

// let arr = ["rene",22,"programming"]
// console.log(arr.indexOf("programming"))


//rogor unda amovigot masividan elementi ise rom misi index ar vicodet
// let arr = ["rene",22,"programming"]
// console.log(arr.splice(1)) //1 indexia
// console.log(arr)








