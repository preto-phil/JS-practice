/// Comparisons

// Results as booleans

alert( 2 > 1 );  
alert( 2 == 1 ); 
alert( 2 != 1 ); 

// Comparing strings

alert( 'Z' > 'A' ); 
alert( 'Glow' > 'Glee' );
alert( 'Bee' > 'Be' );

// Comparing strings to numbers

alert( '2' > 1 );
alert( '01' == 1 );

// comparing booleans to numbers

alert( true == 1 );
alert( false == 0 );

// Comparing with strict equality operators

alert( true === 1);
alert( false === 0);

// Comparing null and undefined

alert( null === undefined); // False
alert( null == undefined); // True

// Comparing 0 and null

alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true
