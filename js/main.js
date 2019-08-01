let toDo =[];

$('button').on('click',function (e){
  var input = $('input').val();
   toDo.unshift(input);
   $('.list').append(`<li><button>X</button>${input}</li>`);

   console.log(toDo);


});

$('ul.list').on('click', 'button',function() {
        $(this).closest('li').fadeOut(1000, function(){
          $(this).remove(); 
         });
});