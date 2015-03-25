$(function() {
  console.log( 'ready!' );

  if ( $( '#nonexistent'.length > 0 ) ) {
  console.log('Found the nonexistant id')
}

// Get something
var listItems = $( 'li' );
var secondListItem = listItems.eq( 1 );
secondListItem.remove();

//$( 'li' ).html( 'New HTML' );

$( 'li' ).html(function( index, oldHtml ) {
  return oldHtml + '!!!'
});

// Do this too!
$( 'li' ).each(function( index, elem ) {
  // this: the current, raw DOM element
  // index: the current element's index in the selection
  // elem: the current, raw DOM element (same as this)
  $( elem ).prepend( '<b>' + index + ': </b>' );
});

// Something else
$( 'li' )
  .click(function() {
    $( this ).addClass( 'clicked' );
  })
  .find( 'span' )
    .attr( 'title', 'Hover over me' );

    $( 'li' ).addClass( 'hidden' );
    $( 'li' ).eq( 1 ).removeClass( 'hidden' );

//
var clones = $( 'li' ).clone();

clones.html(function( index, oldHtml ) {
  return oldHtml + '!!!';
});

$( '#my-unordered-list' ).append( clones );

//

var foo = 1;
var bar = 0;
var baz = 2;

foo || bar;     // returns 1, which is truthy
bar || foo;     // returns 1, which is truthy

foo && bar;     // returns 0, which is falsy
foo && baz;     // returns 2, which is truthy
});
