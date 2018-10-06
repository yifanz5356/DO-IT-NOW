/*/////////////////////////////////////////
JS(JQuery) code for To-DO List
ECE 209AS Bake-off 1
Aurthor: Yifan Zhang
Using Jquery to implement the to-do list operations
*//////////////////////////////////////////

//Initialization

// Create close button
$('li').each(function(){
  $(this).append('<span class=\'close\'>\u00D7</span>');
  return;
});

// Create up button
$('li').each(function(){
  $(this).append('<span class=\'up\'>\u21E7</span>');
});

// Delete Entry when close button clicked
$('.close').click(function(){
  $(this).parent('li').remove();
  return;
});

// move up
$('.up').click(function(){
  $(this).parent('li').click();
  var $current = $(this).parent();
  var $pre = $current.prev('li');
  if ($pre.length != 0){
    $current.insertBefore($pre);
  }
});

// Check/uncheck item when item clicked
$('li').click(function(){
  $(this).toggleClass('checked')
  return;
});

// Add new element
$('.addBtn').click(function() {
  content = $('input').val();
  if(content){
    console.log(content);
  } else {
    alert("Please Enter Item Contents!");
    return;
  }
  cat = $('select').val();
  console.log(cat);
  $('ul').append('<li></li>');
  $('li').last().text(content);
  $('li').last().addClass(cat);
  $('input').val('')
  // item Initialization
  $('li').last().append('<span class=\'close\'>\u00D7</span>');
  $('li').last().append('<span class=\'up\'>\u21E7</span>');
  $('.close').last().click(function(){
    $(this).parent('li').remove();
    return;
  });

  $('li').last().click(function(){
    $(this).toggleClass('checked')
    return;
  });

  $('.up').last().click(function(){
    $(this).parent('li').click();
    var $current = $(this).parent();
    var $pre = $current.prev('li');
    if ($pre.length != 0){
      $current.insertBefore($pre);
    }
  });
  return;
});

// Clear button
$('.clrBtn').click(function(){
    $('input').val('');
    return;
});

// Reset
$('.reset').click(function(){
  if (confirm('Are you sure to RESET the entire To Do List?')){
    $('li').remove();
}
});

// update the item count
$('ul, span').click(function(){
  setTimeout(function(){
    let count_all = $('ul').children().length;
    let count_undo = count_all - $('ul').find('.checked').length;
    $('h5').text("To Do Items: " + count_undo + '/' + count_all);
    return;
  }, 50);
  let count_undo =  $('ul').children().length - $('ul').find('.checked').length;
  if (count_undo == 0){
    $('h2').text('Great Job! All Clear!');
    $('.header').css('background-color','#33cc33')
  }else if(count_undo < 8){
    $('h2').text('Keep Calm and Carry On!');
    $('.header').css('background-color','#ffcc00');
  }else{
    $('h2').text('Hey! DO YOUR WORK RIGHT NOW!!');
    $('.header').css('background-color','#ff0000');
  }
  return;
});
