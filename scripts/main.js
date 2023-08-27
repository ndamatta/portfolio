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

//PROJECTS
fetch('projects.json')
.then(response => response.json())
.then(jsonData => {
    // Calculate the number of projects per column
    const projectsPerColumn = Math.ceil(jsonData.length / 3);

    // Get the card containers for each column
    const columnContainers = [
        document.getElementById('home-column1'),
        document.getElementById('home-column2'),
        document.getElementById('home-column3')
    ];

    // Distribute projects evenly across columns
    jsonData.forEach((cardData, index) => {
        const columnIndex = Math.floor(index / projectsPerColumn);
        const cardContainer = columnContainers[columnIndex];

        const cardTemplate = `
            <div class="card my-6 mx-4">
                <div class="card-image has-text-centered">
                    <figure class="image is-3by1"><img src="${cardData.image}" alt=""></figure>
                </div>
                <div class="card-content">
                    <p class="title is-5">${cardData.title}</p>
                </div>
                <div class="card-footer">
                    <p class="card-footer-item"><a href="${cardData.url}" class="has-text-gray">View in Github</a></p>
                </div>
            </div>
        `;

        cardContainer.innerHTML += cardTemplate;
    });
})
.catch(error => console.error('Error fetching data:', error));