const menuItems = document.querySelectorAll('.header__nav .nav__link');

menuItems.forEach(item => {
  item.addEventListener('click', event => {
     
    const currentActive = document.querySelector('.header__nav .activ__header_nav');
    currentActive.classList.remove('activ__header_nav');
    item.classList.add('activ__header_nav');
  });
});

window.addEventListener('load', function() {
    var skills = document.querySelectorAll('.skill__item span');
    skills.forEach(function(skill) {
      var percent = parseInt(skill.getAttribute('data-percent'));
      var width = 0;
      var progress = skill.parentElement.nextElementSibling.firstElementChild;
      progress.style.width = width + '%';
      setTimeout(function() {
        progress.style.width = percent + '%';
      }, 50);
    });
  });

 
// Получаем ссылки на все элементы навигации
var filterLinks = document.querySelectorAll('.projects__nav li');
// Получаем ссылки на все проекты
var projects = document.querySelectorAll('.projects__items li');

// Добавляем обработчик события для всех ссылок в навигации
filterLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Получаем фильтр для выборки
    var filter = link.getAttribute('data-filter');

    // Проходимся по всем проектам и скрываем те, которые не соответствуют фильтру
    projects.forEach(function(project) {
      if (filter === 'all') {
        project.style.display = 'block';
      } else {
        if (project.classList.contains(filter)) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      }
    });

    // Добавляем класс активности к текущей кнопке
    filterLinks.forEach(function(link) {
      link.classList.remove('project_nav_active');
    });
    link.classList.add('project_nav_active');
  });
});

  
  