/* Add your JavaScript to this file */

// window.onload(){
    const input = document.getElementsById("email");
    input.preventDefault();
    const message = documentByClassName("message");
	input.addEventListerner('submit',(e)=>{
	e.preventDefault();
	if (input.value==""){
            message.innerHTML="Please enter a Valid email address"
        }
        else if(input.value!=""){
            message.innerHTML={`Thank you! Your email address ${input.value}  has been added to our mailing list`}


	}};
    const btn = documentByClassName("btn");
    btn.addEventListener("click",(e)=>{
        e.preventDefault();


        if (input.value==""){
            message.innerHTML="Please enter a Valid email address"
        }
        else if(input.value!=""){
            message.innerHTML={`Thank you! Your email address ${input.value}  has been added to our mailing list`}


        }
    });

    

// }
