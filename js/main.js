// Slider

let slideIndex = 0;
(function showSlides() {
  const refs = [...document.querySelectorAll('.slide')];
  refs.map(el => { el.style.display = "none"; })
  slideIndex++;
  slideIndex > refs.length ? slideIndex = 1 : '';
  refs[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}())

// Footer Accordion

function expander() {
  let acc = [...document.querySelectorAll(".expander__toggle")];
  acc.map(el => {
    el.addEventListener("click", function () {
      this.classList.toggle("active");
      let expandPanel = this.nextElementSibling;
      expandPanel.style.maxHeight ? expandPanel.style.maxHeight = null : expandPanel.style.maxHeight = expandPanel.scrollHeight + "px";
    })
  })
}

// Toggle-nav for mobile

function toggleNav() {
  document.getElementById("toggle-nav").classList.toggle("toggleNavNewStyle");
}
expander()
