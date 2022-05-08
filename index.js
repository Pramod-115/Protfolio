// window.onscroll() = () => {
//     if (document.body.scrollTop > 10) {
//         console.log('scooled')
//     }
// }
const scrollbtn = document.getElementById('scrollbtn');

window.onscroll = function (e) {
     // Value of scroll Y in px
    if (window.scrollY > 180) {
        scrollbtn.classList.add('hide');
    }
    else {
        scrollbtn.classList.remove('hide');
    }
};