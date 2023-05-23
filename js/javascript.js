function emailFunction() {
  document.getElementById("contactMe").click();
}

function githubFunction() {
  document.getElementById("githubClick").click();
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".slide-in-hidden");
hiddenElements.forEach((el) => observer.observe(el));

let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    header.classList.remove('hidden');
  } else {
    // Scrolling down
    header.classList.add('hidden');
  }

  prevScrollPos = currentScrollPos;
});