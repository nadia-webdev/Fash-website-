const contactForm = document.querySelector("#contactForm");


if(contactForm){

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();


        const name = document.querySelector("#name").value.trim();

        const email = document.querySelector("#email").value.trim();

        const message = document.querySelector("#message").value.trim();



        if(name === "" || email === "" || message === ""){

            alert("Please fill all fields.");

            return;

        }



        if(!email.includes("@")){

            alert("Please enter a valid email.");

            return;

        }



        alert("Thank you! Your message has been sent.");



        contactForm.reset();


    });

}