
let currentLang = 'da'; 

const langBtn = document.getElementById('lang-toggle');

function updateLanguage() {
    const elements = document.querySelectorAll('[data-en][data-da]');

    elements.forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });

   
    langBtn.textContent = currentLang === 'da' ? 'English' : 'Dansk';
}

updateLanguage();


langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'da' ? 'en' : 'da';
    updateLanguage();
});



  function toggleProjects() {
    const extraProjects = document.querySelectorAll('.extra-project');
    const toggleBtn = document.getElementById('toggle-projects-btn');

    let isHidden = false;

    extraProjects.forEach((project) => {
      if (project.style.display === 'none') {
        project.style.display = 'block';
        isHidden = true;
      } else {
        project.style.display = 'none';
      }
    });

    toggleBtn.textContent = isHidden ? 'Show Less Projects' : 'View All Projects';
  }
