//reseting the browser storage value
let proceedFromHomeButtonOnly = false;
sessionStorage.setItem('proceedFromHomeButtonOnly', proceedFromHomeButtonOnly);

let payFromFacePageOnly = sessionStorage.getItem('payFromFacePageOnly');
if (payFromFacePageOnly == "false") window.location.href = "./bank.html"

//getting values from browser storage
let faceVerified = sessionStorage.getItem('faceVerified');

if (faceVerified == "false") {
    document.querySelector(".success").classList.add('hide')
    document.querySelector(".failed").classList.replace('hide', 'unhide')
    document.getElementById("success-message").innerText = "Failed!"
    document.getElementById("success-message").style.color = "red"
    document.getElementById("request-message").innerText = "Your payment has not been processed."
    document.getElementById("request-message").style.padding = "0"
    document.getElementById("failure-reason").classList.replace('hide', 'unhide')
}

setTimeout(() => window.location.replace('./bank.html'), 10000);