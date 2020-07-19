var regexName= /^[a-zA-Z]+$/;
var isValidFirstName=false;
var isValidLastName=false;
var regexEmail= /^[a-zA-z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
var isValidEmail=false;
var regexMobile= /^[0-9]+$/;
var isValidMobile=false;
var isValidCreatePW=false;


function onload()
{
    var firstNameWarning=document.getElementById("firstNameWarning");
    var lastNameWarning=document.getElementById("lastNameWarning");
    var emailWarning=document.getElementById("emailWarning");
    var mobileWarning=document.getElementById("mobileWarning");
    var createWarning=document.getElementById("createWarning");
}

function onSubmitClick()
{
    var firstName=document.getElementById("firstName").value;
    if(!regexName.test(firstName) && firstName != "")
    {
        firstNameWarning.classList.remove("warning-hide");
        firstNameWarning.setAttribute('title','Only alphabets are allowed');
        isValidFirstName=false;
    }
    else if(regexName.test(firstName))
    {
        firstNameWarning.classList.add("warning-hide");
        isValidFirstName=true;
    }
    else if(firstName== "")
    {
        firstNameWarning.classList.remove("warning-hide");
        firstNameWarning.setAttribute('title','First Name is required');
        isValidFirstName=false;
    } 


    var lastName=document.getElementById("lastName").value;
    if(!regexName.test(lastName) && lastName != "")
    {
        lastNameWarning.classList.remove("warning-hide");
        lastNameWarning.setAttribute('title','Only alphabets are allowed');
        isValidLastName=false;
    }
    else if(regexName.test(lastName))
    {
        lastNameWarning.classList.add("warning-hide");
        isValidLastName=true;
    }
    else if(lastName == "")
    {
        lastNameWarning.classList.remove("warning-hide");
        lastNameWarning.setAttribute('title','last Name is required');
        isValidLastName=false;
    } 


    var email=document.getElementById("email").value;
    if(!regexEmail.test(email) && email != "")
    {
        emailWarning.classList.remove("warning-hide");
        emailWarning.setAttribute('title','Invalid email Address');
        isValidEmail=false;
    }
    else if(regexEmail.test(email))
    {
        emailWarning.classList.add("warning-hide");
        isValidEmail=true;
    }
    else if(email == "")
    {
        emailWarning.classList.remove("warning-hide");
        emailWarning.setAttribute('title','Email is required');
        isValidEmail=false;
    } 

    
    var mobile=document.getElementById("mobile").value;
    if((!regexMobile.test(mobile) && mobile.length < 10  &&  mobile.length != 0) 
          || (!regexMobile.test(mobile) && mobile.length != 0))
    {
        mobileWarning.classList.remove("warning-hide");
        mobileWarning.setAttribute('title','Invalid Mobile Number');
        isValidMobile=false;
    }
    else if(regexMobile.test(mobile) && mobile.length == 10)
    {
        mobileWarning.classList.add("warning-hide");
        isValidMobile=true;
    }
    else if(mobile.length == 0)
    {
        mobileWarning.classList.remove("warning-hide");
        mobileWarning.setAttribute('title','Mobile Number is required');
        isValidMobile=false;
    } 

     
    
    var createPW=document.getElementById("createPW").value;
    if(createPW == "")
    {
        createWarning.classList.remove("warning-hide");
        createWarning.setAttribute('title','Password cannot be empty');
        isValidCreatePW=false;
    }
    else if(createPW.length < 8)
    {
        createWarning.classList.remove("warning-hide");
        createWarning.setAttribute('title','Length of the password must be greater than 7 characters');
        isValidCreatePW=false;
    }
    else
    {
        createWarning.classList.add("warning-hide");
        isValidCreatePW=true;
    }  

    
    if(isValidFirstName && isValidLastName && isValidEmail &&
          isValidMobile && isValidCreatePW)
       {
         alert("Success");
         document.getElementById("signup-form").reset();
       }
} 

function onCancelClick()
{  
    firstNameWarning.classList.add("warning-hide");
    lastNameWarning.classList.add("warning-hide");
    emailWarning.classList.add("warning-hide");
    mobileWarning.classList.add("warning-hide");
    createWarning.classList.add("warning-hide"); 
}   

  
      
    
  
