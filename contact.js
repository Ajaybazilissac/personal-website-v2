$(function(){
  var $registerform=$("#registration");
  if($registerform.length){
    $registerform.validate({
      rules:{
        username:{
          required:true
        },
        emailcontact:{
          required:true,
          email:true
        },
        number:{
          required:true
        }

      },
      messages:{
        username:{
          required:"Name is mandatory"
        },
        emailcontact:{
          required:"Email is mandatory",
          email:'PLease enter valid email.'
        },
        number:{
          required:"Number is mandatory"
        }

      }

      

    })
  }
})
