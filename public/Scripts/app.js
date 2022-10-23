// IIFE -- Immediately Invoked Function Expression
/*
File Name - app.js
Student Name - Bhavitha Penaka
Student ID - 301211147
Date - 21-10-2022
*/


(function(){

    function Start()
    {
        console.log("App Started...");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        
            for(button of deleteButtons)
            {
                button.addEventListener('click', (event)=>{
                    if(!confirm("Are you sure?")) 
                    {
                        event.preventDefault();
                        window.location.assign('/contactslist');
                    }
                });
            }
    }

    window.addEventListener("load", Start);

})();