const closeMenu = document.getElementById('closeMenu')
const openMenu = document.getElementById('openMenu')
const menu = document.getElementById('mobileMenu')
const dropDownPax = document.getElementById('dropdownpax')
const paxSelect = document.getElementById('paxselect')
const dropDownClass = document.getElementById('dropdownClass')
const classSelect = document.getElementById('classSelect')

const minusAdult = document.getElementById('minusAdult')
const addAdult = document.getElementById('addAdult')
const adultNo = document.getElementById('adultNo')


const minusChild = document.getElementById('minusChild')
const addChild = document.getElementById('addChild')
const childNo = document.getElementById('childNo')


const minusInfant = document.getElementById('minusInfant')
const addInfant = document.getElementById('addInfant')
const infantNo = document.getElementById('infantNo')

const cabinSelect = document.querySelector('.classCheck').value
let checkedValue = 'Please select cabin'
function updatePassengers(){
    for(let i=0; cabinSelect[i]; ++i){
        if(cabinSelect[i].checked){
             checkedValue = cabinSelect[i].value;
             break;
        }
  }
    dropDownPax.placeholder = `${Number(adultNo.textContent)+Number(childNo.textContent)+Number(infantNo.textContent)} pass,${checkedValue} `
}
openMenu.addEventListener('click',(e)=>{
    
    menu.classList.toggle("hidden")
})


closeMenu.addEventListener('click',(e)=>{
    
    menu.classList.toggle("hidden")
})

dropDownPax.addEventListener("click",(e)=>{
    
    paxSelect.classList.toggle("hidden")
})

paxSelect.addEventListener('click',(e)=>{
    e.preventDefault()
    if(!dropDownPax.focus() && paxSelect.focus()){

        dropDownPax.focus()
    }
})
dropDownClass.addEventListener("click",(e)=>{
    
    classSelect.classList.toggle("hidden")
})

classSelect.addEventListener("click",(e)=>{
    updatePassengers()
    classSelect.classList.toggle("hidden")
})

/* handle pass numbers*/
minusAdult.addEventListener('click',(e)=>{
    e.preventDefault()
    if(Number(adultNo.textContent)!==0){
        adultNo.textContent = Number(adultNo.textContent) - 1
        updatePassengers()
    }
})

addAdult.addEventListener('click',(e)=>{
    e.preventDefault()
    adultNo.textContent = Number(adultNo.textContent) + 1
    updatePassengers()
})


minusChild.addEventListener('click',(e)=>{
    e.preventDefault()
    if(Number(childNo.textContent)!==0){
        childNo.textContent = Number(childNo.textContent) - 1
        updatePassengers()
    }
})

addChild.addEventListener('click',(e)=>{
    e.preventDefault()
    childNo.textContent = Number(childNo.textContent) + 1
    updatePassengers()
})

minusInfant.addEventListener('click',(e)=>{
    e.preventDefault()
    if(Number(infantNo.textContent)!==0){
        infantNo.textContent = Number(infantNo.textContent) - 1
        updatePassengers()
    }
})

addInfant.addEventListener('click',(e)=>{
    e.preventDefault()
    infantNo.textContent = Number(infantNo.textContent) + 1
    updatePassengers()
})
/**
 * 
 * back to top
 */
// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button

const scrollFunction = () => {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.classList.remove("hidden");
  } else {
    mybutton.classList.add("hidden");
  }
};
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

window.addEventListener("scroll", scrollFunction);

const slidesContainer = document.querySelector(".slides-container");
const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", () => {
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  slidesContainer.scrollLeft -= slideWidth;
});