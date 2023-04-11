//******Task # 01******* //
// function sum_of(num1){
//     return function(num2){
//         return num1 + num2;
//     }
// }
//  let callingFunction = sum_of(10);
//  console.log(callingFunction(5));


//******Task # 02******* //

// let vowel = ["A" , "E" , "I" , "O" , "U"];

// function search(vowel, value){
//     if(vowel.length === 0){
//         return false;
//     }
//     else if(vowel[0] === value){
//         return true;
//     }
//     else{
//         return search(vowel.slice(1), value);
//     }
// }
//    console.log(search(vowel, "I"));  // prints true
//    console.log(search(vowel, "S"));  // prints false


//******Task # 03******* //

// function changeBackgroundColor(element, color) {
//     myDiv= myDiv.style.backgroundColor = color;
//   }
//   const myDiv = document.getElementById("myDiv");
//   changeBackgroundColor(myDiv, "red");


//******Task # 04******* //

// function changeListItems(items){
//     document.querySelector('li');
//     return items;
//   }
//   let new_list = changeListItems("New Item");
//   console.log(new_list);

//******Task # 06******* //

//   function saveToLocalStorage(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
//   const myDetail = {name: "Muhammad Hassan Khan", age: 23};
// saveToLocalStorage("Hassan", myDetail);

// const storedObject = JSON.parse(localStorage.getItem("Hassan"));
// console.log(storedObject);
  
  
//******Task # 07******* //
  
  
  // function retrievedObject(){
  //   JSON.parse(localStorage.getItem("Hassan")); // to retrieve the string value that we previously stored
  // } 
  // retrievedObject();

  //******Task # 08******* //

  // function saveObjectToLocalStorage(key, value) {
  //     localStorage.setItem(key, JSON.stringify(value));
  //   }
    
  //   const myDetail = {name: "Muhammad Hassan Khan", age: 23};
                       
  //   saveObjectToLocalStorage("Hassan", myDetail);
    
  //   let retrievedObject = JSON.parse(localStorage.getItem("Hassan")); // to retrieve the string value that we previously stored
    