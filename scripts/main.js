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
const contactmeBtn = document.querySelectorAll('.contact-me');
const modal = document.querySelector('.modal');
const modalBg = document.querySelector('.modal-background');
const modalBtn = document.querySelector('.modal-close');

contactmeBtn.forEach(function (element) {
   element.addEventListener('click', function () {
       modal.classList.add('is-active');
   });
});
modalBg.addEventListener('click', () => {
   modal.classList.remove('is-active');
})
modalBtn.addEventListener('click', () => {
   modal.classList.remove('is-active');
})

//ABOUT ME TABS
const tabsData = [
   {
         id: 'whoami',
         text: `Hey there! I'm Natanael, but you can call me Nate, it's easier in English. :)<br><br>Here you will find just a brief explanation about myself, if you want to know more about me in detail, you should visit my <a href="https://www.linkedin.com/in/natanael-damatta/" target="_blank" class="has-background-dark has-text-warning px-1 py-0" rel="noopener noreferrer">Linkedin</a> profile.<br><br>I'm 22 years old and I'm from Rosario, Argentina.<br><br>Currently, I'm working remotely for a US-based company but it's not a developer-related job, and I'm also pursuing a Bachelors Degree in Applied Technology at a US university.`,
         image: `images/aboutme1.webp`,
         div: ``
   },
   {
         id: 'hobbies',
         text: `Since my childhood, I've held a deep passion for <strong>computers and technology</strong>, thanks to my dad who is an IT Engineer. Computers have always been a significant part of my life.<br><br>One of my enduring hobbies from my growing years is playing <strong>video games</strong>. These days, I primarily enjoy playing FIFA with friends.<br><br>Speaking of FIFA, it's evident that I love <strong>football</strong>. I'm actively playing as a goalkeeper in a local league!<br><strong>Exercise</strong> is another daily routine for me. I go to the gym regularly and alternate with running every other day.<br><br>I'm also an aspiring <strong>cook</strong>! Though I've had my fair share of culinary mishaps (some burnt dishes along the way), I'm steadily improving my skills. By the way, my absolute favorite dish are Empanadas.`,
         image: `images/aboutme2.webp`,
         div: ``
         
   },
   {
         id: 'education',
         text: `Education plays a <strong>vital role</strong> in shaping my life, guiding my path toward the future. I have always had a deep passion for learning and strive to apply the knowledge I gain in my daily life.<br><br>I have already successfully completed my first certificate in <strong>Web and Computer Programming</strong> with top grades.<br>Right now, I am working toward my <strong>Associate Degree in Databases</strong>.<br><br>In addition to my university studies, I actively engage in short-term courses offered through online platforms such as <strong>LinkedIn Learning</strong> and <strong>Coursera</strong>.<br><br>If you would like to explore my certificates and my educational journey, please feel free to visit my <a href="https://www.linkedin.com/in/natanael-damatta/" target="_blank" class="has-background-dark has-text-warning px-1 py-0" rel="noopener noreferrer">Linkedin</a> profile.`,
         image: `images/aboutme3.webp`,
         div: ``
   },
   {
         id: 'job',
         text: 'Like my education, my jobs have <strong>significantly</strong> influenced my life.<br>Starting from a young age, I built my work ethic while helping my father with his IT family business. I even remember assembling my first computer from scratch at the age of 10<br><br>My formal <strong>entry into the workforce</strong> began at 16, collaborating with in my fathers company to troubleshoot and assemble computers. This early exposure ignited my <strong>passion</strong> for all things computer-related.<br><br>As I grew up, at 18, embarked on a </strong>trainee developer</strong> role in a startup. Although my coding skills were basic, this opportunity marked my first steps into the programming world.<br><br>Soon after, I started to be interested into the world of <strong>freelancing</strong>, securing my first freelance formal job, which I continue to work on to this day.<br>While it is not a programming job, it has enriched my understanding of <strong>remote work</strong> dynamics and provided invaluable insights into the workings of a large corporation.<br><br>These experiences have not only molded my character but also opened doors to numerous other opportunities.<br><br>If you would like to explore my job experiences please feel free to visit my <a href="https://www.linkedin.com/in/natanael-damatta/" target="_blank" class="has-background-dark has-text-warning px-1 py-0" rel="noopener noreferrer">Linkedin</a> profile.',
         image: `images/aboutme4.webp`,
         div: ``
   },
   {
      id: `whatiamlookingfor`,
      text: `First of all, thank you for your interest in getting to know me better. :)<br><br>I am actively seeking to join a <strong>programming team</strong>. I am well-versed in the dynamics of both startups and large corporations, and I am committed to maximizing my efficiency.<br><br>
      Certainly, I know that there is room for ongoing growth and improvement, but given my age and foundational knowledge in programming and databases, I feel confident in my ability to contribute as a developer.<br><br>If you feel I meet the requirments, feel free to contact me, <strong>I will be happy to work together</strong>!`,
      image: ``,
      div: `<div class="badge-base LI-profile-badge is-flex is-justify-content-center my-2" data-locale="es_ES" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="natanael-damatta" data-version="v1"></div>
      `
   }
];

function createTabs() {
   const tabContent = document.querySelector('#tab-content');
   tabsData.forEach(tab => {
         if (tab.div === ``) {
            tab.div = ``
         } 
         const tabHTML = `
            <div id="${tab.id}" >
               <div class="columns mt-3 mb-6 is-vcentered">
                     <div class="column is-half-desktop">
                        <article class="message is-dark mx-4">
                           <div class="message-body has-text-black">
                                 <p class="my-2">${tab.text}</p>
                           </div>
                        </article>
                     </div>
                     <div class="column is-half-desktop">
                        <div class="has-text-centered mx-3">
                           <img src="${tab.image}" alt="Picture about me" class="image is-5by3">
                           ${tab.div}
                        </div>                     
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
               <div class="column is-one-quarter">
                   <div class="card my-3 mx-3 has-background-white-ther" id="card">
                       <div class="card-image has-text-centered">
                           <figure class="image is-3by1"><img src="${cardData.image}" alt=""></figure>
                       </div>
                       <div class="card-footer">  
                           <p class="card-footer-item"><a href="${cardData.url}" target="_blank" id="view-github" rel="noopener noreferrer">View in Github</a></p>
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



