
//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.
       It should internally (in the constructor) set  this.peoplePerHour to 1 on initialization and have a function
       eatTown that takes a population size and returns the number of
       hours it takes to eat that town! It should also keep track of the
       peoplePerHour increase due to eating the town.

 TODO: Next, create an instance of Blob named blob.
.
*/
function Blob() {
  this.peoplePerHour = 1;

  this.eatTown = function( population ) {
    var peopleConsumed = 0;
    var rateOfConsumption = 1;
    var hourCount = 0;

    do {
      peopleConsumed = peopleConsumed + rateOfConsumption;
      rateOfConsumption++;
      hourCount++;
    } while ( peopleConsumed <= population );
      return hourCount;
  };
}

var Nowhereville = 0;
var Dowington = 1000;
var Smallsville = 5000;
var Portland = 500000;

// Use the eatTown method and console log result:
// 1) How log for four different blobs to each eat one of the towns

console.log( new Blob().eatTown( Nowhereville ) + " hour." );
console.log( new Blob().eatTown( Dowington ) + " hours." );
console.log( new Blob().eatTown( Smallsville ) + " hours." );
console.log( new Blob().eatTown( Portland ) + " hours." );

// 2) How log for the same blob to sequentially eat all four towns!

var blob = new Blob();
console.log( blob.eatTown( Nowhereville ) + " hour." );
console.log( blob.eatTown( Dowington ) + " hours." );
console.log( blob.eatTown( Smallsville ) + " hours." );
console.log( blob.eatTown( Portland ) + " hours." );

