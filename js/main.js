
(function ($) {
    "use strict";



  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);


window.addEventListener("load",function(){
   
    let imagen= document.querySelector(".login100-more")
    
    let form= document.querySelector("form")
    imagen.style.transition="all 1.2s ease";
    imagen.style.marginBottom="0%"
    form.style.transition="all 1.2s ease";
    form.style.transform="translateX(0%)"
})


let loginLogo=document.querySelector(".login100-form-logo")
loginLogo.addEventListener("click",()=>{
    window.location.href="https://www.descorcha.com.ar/promociones/?utm_source=landing-page&utm_medium=direct&utm_campaign=landing-page"
})

let form= document.querySelector("form")
form.addEventListener("submit",function(){
        
            let response=document.querySelectorAll(".response")
            response.forEach(element=>{
                if(element.textContent!=null || element.textContent != "" && element.textContent>0){
                    setTimeout(window.location.href="https://www.descorcha.com.ar/promociones/?utm_source=landing-page&utm_medium=direct&utm_campaign=landing-page",1900)
                    
                }
            })
})