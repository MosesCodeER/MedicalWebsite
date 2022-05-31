function setFormMessage(formElement, type,message){
    const messageElement =formElement.querySelector(".form__message");
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success","form__message--error" )
    messageElement.classList.add("form__message--${type}")}
document.addEventListener("DOMContentLoaded",()=>{
    const loginform=document.querySelector("#login");
    const CreateaccountForm=document.querySelector("#Createaccount");
    document.querySelector("#linkcreateaccount").addEventListener("click", e=>{
loginform.classList.add("form--hidden");
CreateaccountForm.classList.remove("form--hidden")
e.preventDefault();

    })
    document.querySelector("#linkLogin").addEventListener("click", e=>{
        e.preventDefault();
        loginform.classList.remove("form--hidden");
        CreateaccountForm.classList.add("form--hidden")
        
        
            });
            loginform.addEventListener("submit", e =>{
                e.preventDefault();
                setFormMessage(loginform, "error", "invaid username/password")})

})
