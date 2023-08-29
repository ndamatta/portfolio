//BURGER BUTTON
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
   navbarMenu.classList.toggle('is-active');
})

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
                <div class="column is-one-third">
                    <div class="card my-2 mx-1 has-background-white-ther" id="card">
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


