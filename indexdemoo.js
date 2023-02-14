/*   All the page name in navbar must be active when you click it*/

const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}





function load() {
  setTimeout(myURL, 4000);
  var result = document.getElementById("result");
  result.innerHTML = `The page will load after delay of 4 seconds`;
}

function myURL() {
  window.open('file:///home/ukistudent/Documents/ASSIGNMENT%20NEW/index2.html', name = self);
}




// gallery item filter
  
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;
  
for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
  
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }
  
    })
}