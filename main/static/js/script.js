

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const progress = entry.target.querySelector(".progress");

            if (entry.isIntersecting) {

                progress.style.transition = "none";
                progress.classList.remove("animate");

                // Force browser reflow
                void progress.offsetWidth;

                progress.style.transition = "width 2s ease-in-out";

                setTimeout(() => {
                    progress.classList.add("animate");
                }, 50);

            }

        });

    }, {
        threshold: 0.3
    });

    cards.forEach(card => observer.observe(card));

});

function openModal(title, description, image, github, demo){

    console.log("TITLE:", title);
    console.log("DESCRIPTION:", description);
console.log("IMAGE:", image);
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;

    document.getElementById("modalImage").src = image;
    document.getElementById("modalGithub").href = github;
    document.getElementById("modalDemo").href = demo;

    document.getElementById("projectModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("projectModal").style.display = "none";
}

/* Close when clicking outside */

window.onclick = function(event){

    let modal = document.getElementById("projectModal");

    if(event.target == modal){
        modal.style.display = "none";
    }
}



function openCertificate(image){
    document.getElementById("certificateImage").src = image;
    document.getElementById("certificateModal").style.display = "flex";
}

function closeCertificate(){
    document.getElementById("certificateModal").style.display = "none";
}

// function openCertificate(image) {
//     window.open(image, "_blank");
// }

// Custom Cursor

const cursor = document.querySelector(".cursor");
const blur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";

});

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card, .certificate-card"
);

hoverElements.forEach(item => {

    item.addEventListener("mouseenter", () => {
        cursor.classList.add("cursor-hover");
    });

    item.addEventListener("mouseleave", () => {
        cursor.classList.remove("cursor-hover");
    });

});

function toggleMenu(){

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}

const links = document.querySelectorAll("#navLinks a");

links.forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks")
                .classList.remove("active");

    });

});


window.addEventListener("load", () => {

    setTimeout(() => {

        document
        .getElementById("loader")
        .classList.add("loader-hidden");

    }, 2000);

}); 