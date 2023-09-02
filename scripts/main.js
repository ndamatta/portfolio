//BURGER BUTTON
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
   navbarMenu.classList.toggle('is-active');
})

//ABOUT ME TABS
const tabsData = [
   {
         id: 'whoami',
         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.`,
         image: `images/portrait640.png`
   },
   {
         id: 'hobbies',
         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.`,
         
   },
   {
         id: 'education',
         text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.`,
         image: ``
   },
   {
         id: 'job',
         text: '<p>asd</p>',
         image: ``
   },
];

function createTabs() {
   const tabContent = document.getElementById('tab-content');
   tabsData.forEach(tab => {
         const tabHTML = `
            <div id="${tab.id}">
               <div class="columns mt-3 mb-6 is-vcentered">
                     <div class="column is-half">
                        <article class="message mx-6">
                           <div class="message-body">
                                 ${tab.text}
                           </div>
                        </article>
                     </div>
                     <div class="column has-text-centered">
                        <img src="${tab.image}" class="image is-2by1">
                     </div>
               </div>
            </div>
         `;
         tabContent.innerHTML += tabHTML;
   });
}

createTabs();

//TABS
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
   tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('is-active'))
      tab.classList.add('is-active');

      const target = tab.dataset.target;
      tabContentBoxes.forEach(box => {
         if (box.getAttribute('id') === target) {
            box.classList.remove('is-hidden');
         } else {
            box.classList.add('is-hidden');
         }
      })
   })
})

window.addEventListener('load', () => {
   const activeTab = document.querySelector('.tabs li.is-active');
   const activeTarget = activeTab.dataset.target;

   tabContentBoxes.forEach(box => {
      if (box.getAttribute('id') === activeTarget) {
         box.classList.remove('is-hidden');
      } else {
         box.classList.add('is-hidden');
      }
   })
});

//PROJECTS
const check = document.getElementById('c-sharp-column');
if (check) {
   fetch('./json/projects.json')
   .then(response => response.json())
   .then(jsonData => {
       const columnContainers = {
           "c-sharp": document.getElementById('c-sharp-column-container'),
           "python": document.getElementById('python-column-container'),
           "web": document.getElementById('web-column-container')
       };

       jsonData.forEach(cardData => {
           const cardTemplate = `
               <div class="column is-one-quarter">
                   <div class="card my-3 mx-3 has-background-white-ther" id="card">
                       <div class="card-image has-text-centered">
                           <figure class="image is-3by1"><img src="${cardData.image}" alt=""></figure>
                       </div>
                       <div class="card-footer">  
                           <p class="card-footer-item"><a href="${cardData.url}" target="_blank" id="view-github">View in Github</a></p>
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



