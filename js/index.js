let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');
let themeToggler  = document.querySelector('#theme-toggler');

let homeBtn = document.querySelector("#homeBtn");
let aboutBtn = document.querySelector("#aboutBtn");
let serviceBtn = document.querySelector("#serviceBtn");
let portfolioBtn = document.querySelector("#portfolioBtn");
let contactBtn = document.querySelector("#contactBtn");

let sideToggler = () =>{
    if(header.classList.contains('active'))
    {
        header.classList.remove('active');
        menu.classList.toggle('fa-times');
    }   
}

homeBtn.onclick=()=>{sideToggler()}
aboutBtn.onclick=()=>{sideToggler()}
serviceBtn.onclick=()=>{sideToggler()}
portfolioBtn.onclick=()=>{sideToggler()}
contactBtn.onclick=()=>{sideToggler()}

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}


let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(matched)
{
    // console.log('Currently in dark mode');
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun'))
    {
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}
// else
// {
//     console.log('Currently not in dark mode');
// }



themeToggler.onclick=()=>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun'))
    {
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}


// Show Scroll
function scrollUp() {
    const scrollUp = document.getElementById('scrollUp')
    // When the scroll is higher than 500
    if (this.scrollY >= 500) {
      scrollUp.classList.add('showScroll')
    } else {
      scrollUp.classList.remove('showScroll')
    }
  }
  
window.addEventListener('scroll', scrollUp)



var form = document.getElementById("my-form");
async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
    }).then(response => {
    status.innerHTML = "Thanks for Contacting! Your Message is Received, will revert you in few days";
    form.reset()
    }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)



// Portfolio
// Swiper
