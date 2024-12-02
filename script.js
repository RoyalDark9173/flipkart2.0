// Create the glowing circle element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', e => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

// Interactive scaling and color change on hover
const interactiveElements = document.querySelectorAll('a, button, .category');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = 'rgba(40, 116, 240, 0.8)';
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'rgba(40, 116, 240, 0.5)';
    });
});

// Scroll Animation for Categories
const categoryCards = document.querySelectorAll('.category-card');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.5s ease-out';
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    },
    { threshold: 0.1 }
);

categoryCards.forEach(card => observer.observe(card));


let index = 0;
const images = document.querySelectorAll('.carousel img');

function showSlide() {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
    index = (index + 1) % images.length;
}
setInterval(showSlide, 3000);
showSlide();

const slide = document.querySelector('.carousel-slide');
const images = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
const size = images[0].clientWidth;

nextBtn.addEventListener('click', () => {
    if (counter >= images.length - 1) return;
    counter++;
    slide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    slide.style.transform = `translateX(${-size * counter}px)`;
});

