//  responsive navigation bar
let menuList = document.getElementById("menuList");
 
menuList.style.maxHeight = "0px";
function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
    } else {
        menuList.style.maxHeight = "0px";
    }
}
    

// Automatic testimonial slider with animation
document.addEventListener('DOMContentLoaded', function () {
    const testimonialContent = document.querySelector('.testimonial-content');
    const testimonials = document.querySelectorAll('.testimonial');
    let current = 0;
    const total = testimonials.length;

    // Initial state
    testimonials.forEach((el, idx) => {
        el.style.display = idx === 0 ? 'flex' : 'none';
        el.style.opacity = idx === 0 ? '1' : '0';
        el.style.transition = 'opacity 0.7s';
    });

    setInterval(() => {
        // Hide current
        testimonials[current].style.opacity = '0';
        setTimeout(() => {
            testimonials[current].style.display = 'none';
            // Next index
            current = (current + 1) % total;
            // Show next
            testimonials[current].style.display = 'flex';
            setTimeout(() => {
                testimonials[current].style.opacity = '1';
            }, 50);
        }, 700);
    }, 5000);
});
let countDownDate = new Date("Aug 23, 2025 23:59:59").getTime();
 
let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    dateDeff = countDownDate - dateNow;

    let days = Math.floor(dateDeff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDeff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDeff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDeff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? "0" + days : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    if (dateDeff < 0) {
        clearInterval(counter);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
    
},1000);