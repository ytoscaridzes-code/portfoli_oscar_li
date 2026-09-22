// Автоматически подставляем текущий год в подвал сайта
document.getElementById('year').textContent = new Date().getFullYear();

// Плавный переход по клику на стрелку проекта (пока ссылки "#" — замените на реальные позже)
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.getAttribute('href') === '#') {
      e.preventDefault();
      console.log('Добавьте сюда ссылку на проект в атрибуте href в index.html');
    }
  });
});
