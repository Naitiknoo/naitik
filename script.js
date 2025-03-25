'use strict';
    
   const navbar = document.querySelector("{data-navbar}");
   const navbarLink = document.querySelectorAll("{data-nav-link}");
   const navbarToggler = document.querySelector("{data-nav-toggler}");
     

     navbarToggler.addEventListener("click",function(){ 
        navbar.classList.toggle("active");
        this.classList.toggle("active")
     })

     
          for(let i = 0 ; i < navbarLink.length; itt ) {
             navbarLink[i].addEventListener("click" , function(){
                navbar.classList.remove("remove");
                navbarToggler.classList.remove("active");
             }) ;
                      
            }    
    
    
    
    
    