  //*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

/* PART 1 */

function lastLetterSort( stringArray ) {

    // TODO: implement me. sort the strings in alphabetical
    // order using their last letter

  function sorting ( a, b ) {
    var lastLetterOfA = a[ a.length - 1 ];
    var lastLetterOfB = b[ b.length - 1 ];

    if ( lastLetterOfA < lastLetterOfB ) {
      return -1;
    }

    if ( lastLetterOfA === lastLetterOfB ) {
      return 0;
    }

    if ( lastLetterOfA > lastLetterOfB ) {
      return 1;
    }

  }

  stringArray.sort( sorting );

console.log( stringArray );

return stringArray;
}

assertDeepEqual(
  lastLetterSort( [ "blue", "red", "green" ] ),
  [ "red", "blue", "green" ],
  "array not sorted by last letter"
);

assertDeepEqual(
  lastLetterSort( [ "apple", "peach", "banana" ] ),
  [ "banana", "apple", "peach" ],
  "not sorted correctly"
);

/* PART 2 */

var arrayOfArrays = [ [ 1, 4, 3 ], [ 6, 2, 3 ], [ 3, 9 ], [ 0, 1 ] ];

function sumArray( numberArray ) {
  var sum = 0;

  // TODO: implement me using forEach

  for ( var x = 0; x < numberArray.length; x++ ) {
    sum = sum + numberArray[ x ];
    }
    return sum;
  }

// TODO: implement me using sumArray
//  order the arrays based on the sum of the numbers
//  inside each array

function sumSort( array ) {
  array.sort( function( a, b ) {
    return sumArray( b ) - sumArray( a );
  } );

  console.log ( array );
    return array;
}

// Write an assertion that tests the above code

assertDeepEqual(
  sumSort( arrayOfArrays ),
  [ [ 3, 9 ], [ 6, 2, 3 ], [ 1, 4, 3 ], [ 0, 1 ] ],
  "array not sorted by sum of numbers properly"
);

// Another exanple of the assert

assertDeepEqual(
  sumSort( [ [ 1, 22 ], [ 14, 3, 8 ], [ 0, 2 ] ] ),
  [ [ 14, 3, 8 ], [ 1, 22 ], [ 0, 2 ] ],
  "array not sorted by sum of numbers properly"
);

// We're going to use this special assert method again to
// test our code

function assert( expression, failureMessage ) {
  if ( !expression ) {
    console.log( "assertion failure: ", failureMessage );
  }
}

// Use this method to test to arrays when they are not
// the same arrays but content should be equal
function assertDeepEqual( actual, expected, failureMessage ) {
  try {
    if ( JSON.stringify( actual ) !== JSON.stringify( expected ) ) {
      throw new Error( failureMessage );
    }
  }
  catch ( err ) {
    console.log( "assertion failure: ", err,
                "\nexpected:", expected,
                "\nactual:", actual );
  }
}
