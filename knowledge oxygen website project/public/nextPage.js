// header Start
function over(n) {
    var image = n;
    switch (image) {
        case 0:
            document.getElementById("im0").src = "images/homepage1.png";
            break;
        case 1:
            document.getElementById("im1").src = "images/About-Us-Icon-21.png";
            break;
        case 2:
            document.getElementById("im2").src = "images/books1.png";
            break;
        case 3:
            document.getElementById("im3").src = "images/magazine1.jpg";
            break;
        case 4:
            document.getElementById("im4").src = "images/ContactUs-011.gif";
            break;
    }

}

function out(n) {
    var image = n;
    switch (image) {
        case 0:
            document.getElementById("im0").src = "images/homepage2.png";
        case 1:
        case 1:
            document.getElementById("im1").src = "images/About-Us-Icon-22.png";
            break;
        case 2:
            document.getElementById("im2").src = "images/books11.png";
            break;
        case 3:
            document.getElementById("im3").src = "images/magazine2.jpg";
            break;
        case 4:
            document.getElementById("im4").src = "images/ContactUs-0111.gif";
            break;
    }

}
// header End


// Next Page 
var imageArray = ["images/book font images/font cover/a time to kill.jpg",
    "images/book font images/font cover/american.jpg",
    "images/book font images/font cover/ancient rome.jpg",
    "images/book font images/font cover/digital bank.jpg",
    "images/book font images/font cover/doing life.jpg",
    "images/book font images/font cover/fade to black.jpg",
    "images/book font images/font cover/giver.jpg",
    "images/book font images/font cover/heretic.jpg",
    "images/book font images/font cover/hope and miracle.jpg",
    "images/book font images/font cover/lord of the ring.jpg",
    "images/book font images/font cover/morrissey.png",
    "images/book font images/font cover/night of the living dead.jpg",
    "images/book font images/font cover/once open a dream.jpg",
    "images/book font images/font cover/redplanet.jpg",
    "images/book font images/font cover/runing with crows.jpg",
    "images/book font images/font cover/shifter.jpg",
    "images/book font images/font cover/take.jpg",
    "images/book font images/font cover/the avenger.jpg",
    "images/book font images/font cover/the button.jpg",
    "images/book font images/font cover/the deception artist.jpg",
    "images/historical/a game of thrones.jpg",
    "images/historical/a glimpse of freedom.jpg",
    "images/historical/abraham lincoln.jpg",
    "images/historical/against our better judgment.jpg",
    "images/historical/anna karenina.jpg",
    "images/historical/Ceras-Place.jpg",
    "images/historical/creator failure.jpg",
    "images/historical/erik larson.jpg",
    "images/historical/fever.jpg",
    "images/historical/let honor prevail.jpg",
    "images/historical/nablus.jpg",
    "images/historical/philippa gregory.jpg",
    "images/historical/psychology of space exploration.jpg",
    "images/historical/scripting.jpg",
    "images/historical/slavery and human progress.jpg",
    "images/historical/the hand fasted wife.jpg",
    "images/historical/the knight.jpg",
    "images/historical/the miniaturist.jpg",
    "images/historical/the wise man.jpg",
    "images/historical/we were the lucky one.jpg",
    "images/adventure/blood.jpg",
    "images/adventure/dungeon of dread.jpg",
    "images/adventure/ella.jpg",
    "images/adventure/forbidden.jpg",
    "images/adventure/huckleberry.jpg",
    "images/adventure/hyperrion.jpg",
    "images/adventure/island of the blue dolphin.jpg",
    "images/adventure/man of action.jpg",
    "images/adventure/not the end of the world.jpg",
    "images/adventure/one game home.jpg",
    "images/adventure/romulus buckle.jpg",
    "images/adventure/seed o f harmony.png",
    "images/adventure/soldier son.jpg",
    "images/adventure/the lazarus machine.jpg",
    "images/adventure/the lost garden.jpg",
    "images/adventure/the sea of monsters.jpg",
    "images/adventure/the wolf.jpg",
    "images/adventure/the world we make.jpg",
    "images/adventure/walking the nile.jpg",
    "images/adventure/will winlder.jpg",
    "images/horror/anguish.jpg",
    "images/horror/anno dracula.jpg",
    "images/horror/dark creature.jpg",
    "images/horror/dark vanishing.jpg",
    "images/horror/dead house.jpg",
    "images/horror/holy ghosts.jpg",
    "images/horror/les chiens.jpg",
    "images/horror/night stone.jpg",
    "images/horror/phobic.jpg",
    "images/horror/silent murder.jpg",
    "images/horror/sis ter.jpg",
    "images/horror/stephen king.jpg",
    "images/horror/suicide games.jpg",
    "images/horror/survival of the dead.jpg",
    "images/horror/the creep.jpg",
    "images/horror/the ice scream man.jpg",
    "images/horror/the lost girl.png",
    "images/horror/the walking dead.jpg",
    "images/horror/vampire diaries.jpg",
    "images/horror/zombie night.jpg",
    "images/short story/A kiling of engel.jpg",
    "images/short story/books of die for.jpg",
    "images/short story/breaking the time barrier.gif",
    "images/short story/city on fir.jpg",
    "images/short story/dave aggers.jpg",
    "images/short story/fatime.jpg",
    "images/short story/i know why the caged gird sings.jpg",
    "images/short story/just courage.jpg",
    "images/short story/love your life.jpg",
    "images/short story/never in ink.jpg",
    "images/short story/no country for old man.jpg",
    "images/short story/short story.jpg",
    "images/short story/stephen king.jpg",
    "images/short story/the accidents.jpg",
    "images/short story/the bitter.jpg",
    "images/short story/the melanie.jpg",
    "images/short story/the price of down.jpg",
    "images/short story/the short short.jpg",
    "images/short story/the winning mind set.jpg",
    "images/short story/this road i ride.jpg"

];


var counterOrder = 0;
var a = localStorage.getItem("number");
var remainCounter = localStorage.getItem("shoppingCart");
console.log(a);


var b = document.getElementById("nextImage").src = imageArray[a];
var author1 = localStorage.getItem("Author:");
var publication_date = localStorage.getItem("Publication Date:");
var price1 = localStorage.getItem("price");
var dPrice1 = localStorage.getItem("dicountP");
var save1 = localStorage.getItem("save");
var pOff1 = localStorage.getItem("discountPer");
document.getElementById("author").innerHTML = author1;
document.getElementById("date").innerHTML = publication_date;
var aboutStory = localStorage.getItem("aboutStory");
var bookN = localStorage.getItem("bookN");
document.getElementById("aboutStory").innerHTML = aboutStory;
document.getElementById("bookName").innerHTML = bookN;




function counterMultiplyPrice(n) {
    document.getElementById("aDP").innerHTML = "Rs: " + dPrice1 * n + ".00";
    if (save1 === "") {
        document.getElementById("rS").innerHTML = save1;
    }
    else {
        document.getElementById("rS").innerHTML = "Save Rs: " + save1 * n + ".00";
    }
    if (save1 === "") {
        document.getElementById("dicPriceh").innerHTML = price1;
    }
    else {
        document.getElementById("dicPriceh").innerHTML = "Rs: " + price1 * n + ".00";
        document.getElementById("dicPriceh").setAttribute("class", "pDP1");
    }
}


var fpDP = document.getElementById("pDP").innerHTML = pOff1;
var fpDP1 = document.getElementById("pDP");
if (fpDP !== "") {
    fpDP1.setAttribute("class", "pDP1");
}


//  Number of books order start


addLessfunc2();
function addLessfunc1() {
    if (counterOrder < 2) {
        counterOrder = 1;
        document.getElementById("countSP").innerHTML = counterOrder;
        counterMultiplyPrice(counterOrder);
    } else {
        counterOrder--;
        document.getElementById("countSP").innerHTML = counterOrder;
        console.log(counterOrder);
        counterMultiplyPrice(counterOrder);
    }

}
function addLessfunc2() {
    if (counterOrder > 4) {
        alert("Sorry in one shipment you maximum order five books");
        counterOrder = 5;
        document.getElementById("countSP").innerHTML = counterOrder;
        counterMultiplyPrice(counterOrder);
    } else {
        counterOrder++;
        document.getElementById("countSP").innerHTML = counterOrder;
        counterMultiplyPrice(counterOrder);
    }
}
  
  
                                                // Shopping Card
	var array = [];
var flag = true;
var student1;

   function Student(authorName, imageNumber, price, publicationDate, count) {
    this.Name = authorName;
    this.image1 = imageNumber;
    this.price = price;
    this.publicationDate = publicationDate;
    this.count = count;
}
function addToCart() {
	student1 = new Student(author1, a, dPrice1, publication_date, counterOrder);
	addToArray(student1);
	window.location.reload();
	
}


function addToArray(n) {
if(array.length === 0) {
console.log("a");
 array.push(n);
 var shopJSON = JSON.stringify(array);
localStorage.setItem("shoppingCart",shopJSON);
 flag = false;
} else if(array.length > 0) {
flag = true;
for(i = 0;i < array.length;i++) {
if(array[i].image1 === n.image1) {
array[i].count += n.count;
if(array[i].count > 5) {
	array[i].count = 5;
	alert("You have already selected " + array[i].count + " books.In one shipment you have to select five copy of one book " );
}
console.log(array[i].count + "abc");
 console.log("koi milgya");
   var shopJSON1 = JSON.stringify(array);
  localStorage.setItem("shoppingCart",shopJSON1);
 flag = false;
}
}
 }
if(flag === true) {
  array.push(n);
  var shopJSON2 = JSON.stringify(array);
  localStorage.setItem("shoppingCart",shopJSON2);
} 
}
autoRun();
function autoRun() {
 var getArray = JSON.parse(localStorage["shoppingCart"]);
 array = getArray;


}

											
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
												
																

/** 
 * get cart variable on page load
 * If cart is empty or null or undefined
 * var cart = [];
 * else var cart = localStorage cart
*/

// Auto run function 
// var cart = [];
//autoRun();
//function autoRun() {
  //  var storeLocalStorage = JSON.parse(localStorage.getItem("cartData"));
  //  var copy = storeLocalStorage;
  //  if(copy !== null) {
  //      cart = copy;
  //  }
  //  console.log(cart + "tumhain dil se na ");
  //  if(storeLocalStorage == null) {
  //  }
  //   else if (storeLocalStorage == []) {
  //  } 
  //  else if(storeLocalStorage.length > 0) {
  //  }
  //  console.log(storeLocalStorage + "runme");
//}
// Number of books order End


//   function Items(authorName, imageNumber, price, publicationDate, count) {
//   this.Name = authorName
//    this.image1 = imageNumber
//    this.price = price
//    this.publicationDate = publicationDate
//    this.count = count
//};


//function addToCart() {
//    var item = new Items(author1, a, dPrice1, publication_date, counterOrder);
//	console.log(item + "a");
//	console.log(cart.length + "b");
//	console.log(cart + "c");
//    if (cart === 0) {
//        cart.push(item);
//        addToLocalStorage(cart);
 //   } else if (cart.length > 0) {
 //       for (var i in cart) {
 //           if (cart[i].image === a) {
  //              cart[i].count += counterOrder;
  //              addToLocalStorage(cart);
  //              return;
   //         } else {
   //             cart.push(item);
   //             addToLocalStorage(cart);
   //         }
   //     }
   // }
//	console.log(cart);
//}

//function addToLocalStorage(n) {
 //   var cartJSON = JSON.stringify(n);
  //  localStorage.setItem("cartData", cartJSON);
//}










// function addToCart() {
//  var item = new Item(author1,a,dPrice1,publication_date,counterOrder);
//  if (cart.length === 0) {
//      console.log("one");
//       cart.push(item);
//       var shopJSON = JSON.stringify(cart);
//       localStorage.setItem("shoppingCart",shopJSON);
//  } else if(cart.length > 0) {
//      var newCart = localStorage.getItem("shoppingCart");
//      var newCart1 = JSON.parse(newCart);
//      var lengthh = newCart1.length;
//   for(var i in newCart1) {
//       if(newCart1[i].image === item.image) {
//          var a =  newCart1[i].count += counterOrder;
//       } else {
//           var cartlength = cart.length;
//           cart[cartlength].push(localStorage.setItem("shoppingCart",shopJSON));
//       }
//   } 


    //  for(var i in cart) {
    //      if(cart[i].image == cart[i].image) {
    //         console.log(item.count);
    //      }
    //  }
//  }
// }


// function addToCart() {
// var users = new Array();
// users.push(authorName,imageNumber,price,publicationDate,count);
// var JSONReadyUsers = JSON.stringify(users);
// localStorage.setItem("users", JSONReadyUsers);

// var changedUsers = JSON.parse(localStorage["users"]);

// changedUsers.push("Bobby");
// console.log(changedUsers);
// }

//  else if (cart[i].image === item.a) {
//      cart[i].count += count;
//  }  else {
//              cart.push(item);
//              var cartJSON = JSON.stringify(cart);
//              localStorage.setItem("shoppingCart",cartJSON);
//  }
//  console.log(cart[0]);
// }
// function add(n) {
// cart.push(n);
// console.log(cart);
// 
// cart.push( new Item(author1,b,dPrice1,counterOrder) );
// console.log(cart);

// function addItemToCart(authorName,image,price,count) {
//     for (var i in cart) {
//         if (cart[i].Name === authorName) {
//             cart[i].count += count;
//             return;
//         }
//     }
//     var item = new Item(authorName,image,price,count);
//     cart.push(item);
// }
// addItemToCart(author1,b,dPrice1,counterOrder);


// function removeItemFromCart(authorName)  {// Removes one item
//       for (var i in cart) {
//           if (cart[i].Name === authorName) { 
//               cart[i].count --;
//               if (cart[i].count === 0) {
//                   cart.splice(i,1);
//               }
//               break;

//           }
//       }
// }


// function  removeItemFromCartAll(authorName) { // removes all item name
//      for (var i in cart) {
//          if (cart[i].Name === authorName) {
//              cart.splice(i,1);
//              break;
//          }
//      }
// }

// addItemToCart("Apple", 1.22, 1);
// addItemToCart("Pear", 1.72, 3);
// addItemToCart("Apple", 1.22, 1);
// addItemToCart("Apple", 1.22, 3);
// addItemToCart("Banana", 1.00, 1);
// addItemToCart("Car", 34.00, 1);
// addItemToCart("Plush Toy", 5.82, 1);
// addItemToCart("Sticky Notes", 4.00, 3);

// console.log(cart.length);
// console.log(cart);

// removeItemFromCartAll("Car");

// console.log(cart.length);
// console.log(cart);

// clearCart()

// countCart()  --> return total count

// totalCart() --> return total cost

// listCart() --> array of Item

// saveCart()

// loadCart()
















