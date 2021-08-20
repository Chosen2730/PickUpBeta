$('.close-burger').hide();
$(".open-burger").click(function () {
    $(".nav-right").show();
    $('.close-burger').show();
    $('.open-burger').hide();
});
$(".close-burger").click(function () {
    $(".nav-right").css('display', 'none');
    $('.open-burger').show();
    $('.close-burger').hide();
});
// $(".nav-right a").click(function () {
//     $(".nav-right").css('display', 'none');
//     $('.open-burger').show();
//     $('.close-burger').hide();
// });



// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         mode: 'cors', // no-cors, *cors, same-origin
//         cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//         credentials: 'omit', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json'
//             // 'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         redirect: 'follow', // manual, *follow, error
//         referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
// }

// $('#pickupSchedule').submit(e => {
//     e.preventDefault();
//     let myForm = document.getElementById('pickupSchedule');
//     let formData = new FormData(myForm);
//     let serializedData = $('#pickupSchedule').serialize()
//     let data = Array.from(formData)


//     // postData('https://pickuplogistics.herokuapp.com', data)
//     postData('http://127.0.0.1:8000/api/', formData)
//         .then(data => {
//             console.log(data); // JSON data parsed by `data.json()` call
//         });
// })
