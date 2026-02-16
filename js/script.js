const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout( () => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout( () => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout( () => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout( () => {
                sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});


// test code
// const buttons = document.querySelectorAll("[data-carousel-button]");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "arrow.right" ? 1 : -1;
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]");

//         const activeSlides = slides.querySelector("[data-active]");
//         let newIndex = [...slides.children].indexOf(activeSlides) + offset;
//         if (newIndex < 0) newIndex = slides.children.length - 1;
//         if (newIndex >= slides.children.length) newIndex = 0;

//         slides.children[newIndex].dataset.active = true;
//         delete activeSlides.dataset.active;

//     });
    
// });




const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else{
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});




const arrowR = document.querySelector('.award-box .navigation .arrow-right');
const arrowL= document.querySelector('.award-box .navigation .arrow-left');

let ind = 0;


const activeResume = () => {
    const imgSlide = document.querySelector('.resume-carousel .img-slide');
    const resumeDetails = document.querySelectorAll('.img-slide');

    imgSlide.style.transform = `translateX(calc(${ind * -100}% - ${ind * 2}rem))`;

    resumeDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    resumeDetails[ind].classList.add('active');
}

arrowR.addEventListener('click', () => {
    if (ind < 5) {
        ind++;
        arrowL.classList.remove('disabled');
    }
    else{
        ind = 6;
        arrowR.classList.add('disabled');
    }

    activeResume();
});

arrowL.addEventListener('click', () => {
    if (ind > 1) {
        ind--;
        arrowR.classList.remove('disabled');
    }
    else{
        ind = 0;
        arrowL.classList.add('disabled');
    }

    activeResume();
});





// theme toggle

// var darkBtn = document.getElementById("dark-btn");


// darkBtn.onclick = function(){
//     darkBtn.classList.toggle("dark-btn-on");
//     document.body.classList.toggle("white-theme");

//     if(localStorage.setItem("theme") == "dark"){
//         localStorage.setItem("theme", "light");
//     }
//     else{
//         localStorage.setItem("theme", "dark");
//     }
// }


// if(localStorage.getItem("theme") == "dark"){
//     darkBtn.classList.remove("dark-btn-on");
//     document.body.classList.remove("dark-theme");
// }
// else if(localStorage.getItem("theme") == "light"){
//     darkBtn.classList.add("dark-btn-on");
//     document.body.classList.add("dark-theme");
// }
// else{
//     localStorage.setItem("theme", "dark");
// }

	const scriptURL = 'https://script.google.com/macros/s/AKfycbyEUmVH9Dfh5K0sNhsnmnp-F0UVHuN2amXSxvOgr4ov4qbXv4ZIaY4db0OSWoJPHZvapw/exec'
	const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                },3000)
                form.reset()
            })
			.catch(error => console.error('Error!', error.message))
	})