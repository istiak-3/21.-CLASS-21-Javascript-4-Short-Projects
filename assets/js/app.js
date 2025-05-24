let shiftButton = document.querySelector(".mode_button");

function shiftColor() {

    let body = document.body;
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        shiftButton.innerHTML = 'Dark Mode ON';
    } else {
        shiftButton.innerHTML = 'Dark Mode OFF';
    }
}

shiftButton.addEventListener('click',  shiftColor);


//----   COLOR SHIFTING END








let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let count = document.querySelector(".count h5");

let fixedPrice = document.querySelector(".price_row h4 span");
let countedPrice = document.querySelector(".t_price_row h4 span");

increment.addEventListener('click', function () {

    if (Number(count.innerHTML) + 1 < 7) {

        count.innerHTML = Number(count.innerHTML) + 1;

        increment.style.background = "rgb(240, 237, 239)";
        decrement.style.background = "rgba(245, 241, 243, 0.95)";
        decrement.style.cursor = "pointer";


        countedPrice.innerHTML = (Number(fixedPrice.innerHTML) * Number(count.innerHTML));


    } else {

        increment.style.background = "rgba(245, 241, 243, 0.49)";
        increment.style.color = "rgba(0, 0, 0, 0.57)";
        increment.style.cursor = "not-allowed";
    }
})



decrement.addEventListener('click', function () {
    if (Number(count.innerHTML) - 1 > 0) {

        count.innerHTML = Number(count.innerHTML) - 1;

        decrement.style.background = "rgb(240, 237, 239)";
        increment.style.background = "rgba(245, 241, 243, 0.95)";
        increment.style.cursor = "pointer";

        countedPrice.innerHTML = Number(countedPrice.innerHTML) - Number(fixedPrice.innerHTML);

    } else {
        decrement.style.background = "rgba(245, 241, 243, 0.49)";
        decrement.style.color = "rgba(0, 0, 0, 0.57)";
        decrement.style.cursor = "not-allowed";
    }

})

//---COUNTING PART END








let qrInput = document.querySelector(".qr_input");
let qrButton = document.querySelector(".qr_button");
let qrImage = document.querySelector(".image img");
let objectBody = document.innerHTML;




qrInput.addEventListener('click', function () {

    qrInput.style.boxShadow = "0 3px 3px 2px #009DB6";


})




document.addEventListener('click', function (event) {
    if (event.target !== qrInput) {
        qrInput.style.boxShadow = "none";
    }
})




qrButton.addEventListener('click', function (e) {
    e.preventDefault();

    let qrInputFinal = qrInput.value;

    if (qrInputFinal !== '') {

        let mainURL = "https://quickchart.io/qr?text=";

        qrImage.src = `https://quickchart.io/qr?text=${qrInputFinal}`;


        qrButton.style.background = "rgba(25, 206, 130, 0.83)";

        qrInput.value = '';

    } else {

        qrInput.placeholder = "*** Please write something first.....";

        qrImage = qrImage.src;

    }


});



//------  QR GENERATOR END


