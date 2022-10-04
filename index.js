const submit = document.querySelector(".submit");

const thankYou = document.querySelector("#thank-you");
const feedback = document.querySelector("#feedback");

const rating = document.querySelector(".rating");
const rated = document.querySelectorAll(".num");

rated.forEach(element => {
    element.addEventListener('click', ()=> {
        rating.innerHTML = element.innerHTML;
    })
});

submit.addEventListener('click', ()=> {
    thankYou.style.display = "flex";
    feedback.style.display = "none";
})
