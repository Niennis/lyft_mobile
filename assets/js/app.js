$(document).ready(function(){
  /* ----------------- SPLSAH ----------------- */
  $('header').fadeOut(2000);
  /* ----------------- FLAGS ------------------ */
  $('#demo').intlTelInput()
  /* -------------- NAVIGATION ---------------- */
  $('.signUpBtn').click(function(){
    $('#log').hide();
    $('#signUp').show();
  })
  
  $('.backToStart').click(function(){
    $('#signUp').hide();
    $('#log').show();
  })
/* Función de boton next puesta dentro de la funcion de validacion de input
  $('.nextBtnPhone, .reSend').click(function(){
    $('#signUp').hide();
    $('#codeGenerator').show();
  })*/

  $('.ok').click(function(){
    $('#codeGenerator').hide();
    $('#verify').show();
  })
  /* Función de boton next puesta dentro de la funcion de validacion de input
  $('.nextBtnVerify').click(function(){
    $('#verify').hide();
    $('#userData').show();
  })
*/
  $('.backToSignUp').click(function(){
    $('#verify').hide();
    $('#signUp').show();
  })
  /* Función de boton next puesta dentro de la funcion de validacion de input
  $('.finish').click(function(){
    $('#userData').hide();
    $('#done').show();
  })
  */
  $('.backToVerify').click(function(){
    $('#userData').hide();
    $('#verify').show();
  })  
  /* ------------- END NAVIGATION ------------- */
  /* ---- FUNCION PARA ACTIVAR O DESACTIVAR BTN NEXT ---- */
  $('#demo').keyup(function(){   
    var demo = $('#demo').val();
    if(demo.length >= 10){
      $('.nextBtnPhone').attr('disabled', false);
      /* funcion btn next y resend */
      $('.nextBtnPhone, .reSend').click(function(){
        $('#signUp').hide();
        $('#codeGenerator').show();
      });         
    }else{
      $('.nextBtnPhone').attr('disabled', true);    
    }
  })
  /*----FUNCION PARA OBTENER CODIGO RANDOM--- */
  $('.nextBtnPhone, .reSend').click(function(){
    $('.code').empty();
    var text = 'Your code is: LAB-';
    var possible = "0123456789";

    for(var i = 0; i < 3; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    $('.code').append(text);
  });
  /* ---- FUNCION PARA ACTIVAR/DESACTIVAR NEXT BTN EN VERIFY ---- */
  $('.digit01, .digit02, .digit03').keyup(function(){
    var digit01 = $('.digit01').val();
    var digit02 = $('.digit02').val();
    var digit03 = $('.digit03').val();
    
    if( digit01.length > 0 && digit02.length > 0 && digit03.length > 0){
      $('.nextBtnVerify').attr('disabled', false);
      $('.nextBtnVerify').click(function(){
        $('#verify').hide();
        $('#userData').show();
      })
    }else{
      $('.nextBtnVerify').attr('disabled', true);    
    }
  })
  /* ---- FUNCION PARA ACTIVAR/DESACTIVAR NEXT FINAL ---- */
  $('.nameUser, .lastNameUser, .email').keyup(function(){
    var name = $('.nameUser').val();
    var lastName = $('.lastNameUser').val();
    var mail = $('.email').val();

    if(name.length >= 3 && lastName.length >= 3 && mail.length >= 6){
      $('.finish').attr('disabled', false);
      $('.finish').click(function(){
        $('#userData').hide();
        $('#done').show();
      })
    }else{
      $('.finish').attr('disabled', true);    
    }
  })
})