$(document).ready(function(){
  /* ----------------- SPLSAH ----------------- */
  $('header').fadeOut(200);
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

  $('.nextBtnPhone, .reSend').click(function(){
    $('#signUp').hide();
    $('#codeGenerator').show();
  })

  $('.ok').click(function(){
    $('#codeGenerator').hide();
    $('#verify').show();
  })
  
  $('.nextBtnVerify').click(function(){
    $('#verify').hide();
    $('#userData').show();
  })

  $('.backToSignUp').click(function(){
    $('#verify').hide();
    $('#signUp').show();
  })
  
  $('.finish').click(function(){
    $('#userData').hide();
    $('#done').show();
  })
  
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
    
    if( digit01.length >= 1 && digit02 >= 1 && digit03 >= 1){
      $('.nextBtnVerify').attr('disabled', false);
    }else{
      $('.nextBtnVerify').attr('disabled', true);    
    }
  })
  /* ---- FUNCION PARA ACTIVAR/DESACTIVAR NEXT FINAL ---- */
  $('.nameUser, .lastNameUser, .email').keyup(function(){
    var name = $('.nameUser').val();
    var lastName = $('.lastNameUser').val();
    var mail = $('.email').val();

    if(name.length >= 3 && lastName.length >=3 && mail.length >= 6){
      $('.finish').attr('disabled', false);
    }else{
      $('.finish').attr('disabled', true);    
    }
  })
})