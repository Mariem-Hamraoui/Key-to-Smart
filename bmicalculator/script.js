$('#button1').click(function () {

  if ($('#Others').val() === '' || $('#Weight').val() === '' || $('#height').val() === '')

    alert('You must write something , Please!')

  else

    alert('Welcome to keto-Start-Fresh! ')

})

$("#reset").click(function () {
  $("#form")[0].reset()
});


$("Q").click(function () {
  $('Q').css({ "color" : "blue" ,"font-size" : "200%" })
});



$("#bmi").click(function () {
  var BMI;
  var height = ($('#height').val())*0.1;
  var weight = $('#weight').val() ;
  BMI = Math.trunc((weight / (height * height) ) * 100) ; 
  
  if( 18.5 < BMI &&  BMI < 25)
  alert("  Your Body Mass Index is  " + BMI + "  kg/m2  is Normal  .. \n keep it up! ") ;
   
  else ( BMI < 18.25 &&  25 < BMI ) 
  alert (" Your Body Mass Index is  " + BMI + "  kg/m2   .. \n Take heed! " );
  $('#height').empty();
  $('#Weight').empty();
})








