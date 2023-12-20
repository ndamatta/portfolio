//BURGER BUTTON
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
   navbarMenu.classList.toggle('is-active');
})

//EMAIL
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", function () {
   const isValidEmail = validateEmail(emailInput.value);
   if (isValidEmail) {
         emailError.style.display = "none";
         emailInput.classList.remove("is-danger");
   } else {
         emailError.style.display = "block";
         emailInput.classList.add("is-danger");
   }
});
function validateEmail(email) {
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailRegex.test(email);
}

//MODAL
const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });


const contactmeBtns = document.querySelectorAll('.contact-me'); 
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-background');
const modalBtn = document.querySelector('.modal-close');

contactmeBtns.forEach((contactmeBtn) => {
  contactmeBtn.addEventListener('click', async () => {
    modal.classList.add('is-active');
    await animateCSS('.modal', 'fadeIn');
  });
});

modal.addEventListener('click', async (e) => {
  if (e.target === modalBg || e.target === modalBtn) {
    await animateCSS('.modal', 'fadeOut'); 
    modal.classList.remove('is-active', 'animate__animated', 'animate__fadeOut');
  }
});

modalBtn.addEventListener('click', () => {
  modal.classList.remove('is-active');
});

//TABS
function getContentBoxes(){return document.querySelectorAll('#tab-content > div');}
function getTabs(){return document.querySelectorAll('.tabs li');}
function hide(content){
   content.classList.remove('is-active');
   content.classList.add('is-hidden');
}
function show(content){
   content.classList.remove('is-hidden');
   content.classList.add('is-active');
}

document.addEventListener('DOMContentLoaded', () => {
   const firstTab = document.querySelector('#web')
   getContentBoxes().forEach((hide));
   show(firstTab);
 });

function createTabs() {
   const tabContent = document.querySelector('#tab-content');
   fetch('./json/aboutme.json')
   .then(response => response.json())
   .then(jsonAboutme => {
      jsonAboutme.forEach(tab => {
         if (tab.div === '') {
            tab.div = ''
         }
         const tabHTML = `
         <div id="${tab.id}" class="is-hidden animate__animated animate__fadeIn">
            <div class="columns mt-3 mb-6 is-vcentered">
                  <div class="column is-half-desktop">
                     <article class="message is-dark mx-4">
                        <div class="message-body has-text-black">
                              <p class="my-2">${tab.text}</p>
                        </div>
                     </article>
                  </div>
                  <div class="column is-half-desktop">
                     <div class="has-text-centered mx-3 is-flex is-justify-content-center">
                        <img src="${tab.image}" alt="Picture about me" class="image is-5by3">
                        ${tab.div}
                     </div>                     
                  </div>
            </div>
         </div>
         `;
      tabContent.innerHTML += tabHTML;
      })
   })
}
createTabs();

function showActiveList() {
   getTabs().forEach((tab) => {
      tab.addEventListener('click', () => {
      getTabs().forEach(item => item.classList.remove('is-active'))
      tab.classList.add('is-active');
      tab.scrollIntoView({ behavior: "smooth", block: "start"})

      showActiveContentBoxes(tab);
   })
});
}

function showActiveContentBoxes(tab) {
   const target = tab.dataset.target;

   getContentBoxes().forEach(box => {
   if (box.getAttribute('id') === target) {
      show(box)
    } else {
      hide(box);
    }
})
}
showActiveList();



//PROJECTS
const check = document.querySelector('#c-sharp-column-container');
if (check) {
   fetch('./json/projects.json')
   .then(response => response.json())
   .then(jsonData => {
       const columnContainers = {
           "c-sharp": document.querySelector('#c-sharp-column-container'),
           "python": document.querySelector('#python-column-container'),
           "web": document.querySelector('#web-column-container')
       };

       jsonData.forEach(cardData => {
           const cardTemplate = `
               <div class="column is-one-quarter animate__animated animate__fadeIn animate__faster">
                   <div class="card my-3 mx-3 has-background-white-ther" id="card">
                       <div class="card-image has-text-centered">
                           <figure class="image is-3by1"><img src="${cardData.image}" alt=""></figure>
                       </div>
                       <div class="card-footer">  
                           <p class="card-footer-item"><a href="${cardData.url}" target="_blank" id="project-status" rel="noopener noreferrer">${parseStatus(cardData.status)}</a></p>
                       </div>
                   </div>
               </div>
           `;

           const cardContainer = columnContainers[cardData.language];
           
               cardContainer.innerHTML += cardTemplate;
           
       });
   })
   .catch(error => console.error('Error fetching data:', error));
}
function parseStatus(status) {
   switch(status) {
      case 'active':
         return "view in Github"
      
      case 'construction':
         return "under construction"
   }
}