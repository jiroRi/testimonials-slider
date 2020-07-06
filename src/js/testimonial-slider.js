let testimonial = document.querySelector('.component-testimonial');

let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let prevButtonArrow = document.querySelector('.prev-button__arrow');
let nextButtonArrow = document.querySelector('.next-button__arrow');

let sliderImage = document.querySelector('.component-slider__image');
let sliderTestimonial = document.querySelector('.component-testimonial__statement');
let sliderPersonName = document.querySelector('.component-testimonial__person-name');
let sliderPersonJob = document.querySelector('.component-testimonial__person-job');

console.dir(sliderImage);

let i = 0;

let person = [
    {
        image: 'url(src/assets/images/image-tanya.jpg)',
        testimonial: '<i>"</i> I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future. <i>"</i>',
        name: 'Tanya Sinclair',
        job: 'UX Engineer'
    },
    {
        image: 'url(src/assets/images/image-john.jpg)',
        testimonial: '<i>"</i> If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. <i>"</i>',
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer'
    },
    {
        image: '(src/assets/images/crossplay-nohomo.jpg)',
        testimonial: '<i>"</i> This platform has hugely helped me in honing my frontend skillset. The challenges are really fun to do! Worth trying and will definitely recommend to my friends.<i>"</i>',
        name: 'Nakiri Erina',
        job: 'Web Developer | UI/UX Designer'
    }
];

setTestimonial = () => {
    sliderImage.style.backgroundImage = person[i].image;
    sliderTestimonial.innerHTML = person[i].testimonial;
    sliderPersonName.innerHTML = person[i].name;
    sliderPersonJob.innerHTML = person[i].job;
}

contentTransition = () => {
    testimonial.style.transform = 'scale(1.05)';
    testimonial.style.transition = 'transform 200ms';

    setTimeout(function(){
        testimonial.style.transform = 'scale(1)';
    }, 200);
}

window.onload = setTestimonial;

prevButton.addEventListener('click', function() {
    prevButton.style.transform = 'translateX(-3px)';
    prevButton.style.transition = 'transform 200ms';

    setTimeout(function(){
        prevButton.style.transform = 'translateX(0px)';
    }, 200);
    if(i == (person.length - person.length)) {
        i = person.length - 1;
        setTestimonial();
        contentTransition();
    }
    else {
        i--;
        setTestimonial();
        contentTransition();
    }
    
});

nextButton.addEventListener('click', function() {
    nextButton.style.transform = 'translateX(3px)';
    nextButton.style.transition = 'transform 200ms';

    setTimeout(function(){
        nextButton.style.transform = 'translateX(0px)';
    }, 200);
    if(i < person.length - 1) {
        i++;
        setTestimonial();
        contentTransition();
    }
    else {
        i = 0;
        setTestimonial();
        contentTransition();
    }
}) 

prevButton.addEventListener('mouseover', function() {
    prevButtonArrow.style.stroke = '#202046';
});

prevButton.addEventListener('mouseout', function() {
    prevButtonArrow.style.stroke = '#8585AC';
})

nextButton.addEventListener('mouseover', function() {
    nextButtonArrow.style.stroke = '#202046';
});

nextButton.addEventListener('mouseout', function() {
    nextButtonArrow.style.stroke = '#8585AC';
});