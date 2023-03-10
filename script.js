const body = document.querySelector('body'),
      sidebar = body.querySelector('.sidebar'),
      toggle = body.querySelector('.toggle'),
      searchBtn = body.querySelector('.search-box'),
      modeSwitch = body.querySelector('.toggle-switch'),
      modeText = body.querySelector('.mode-text'),
      // moonSun = body.querySelector('.moon-sun'),
      moon = body.querySelector('.moon'),
      sun = body.querySelector('.sun');

toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
      moonSun.style.display = 'none';
});

modeSwitch.addEventListener('click', () => {
      body.classList.toggle('dark');

      if (body.classList.contains('dark')) {
            modeText.textContent = 'Light Mode';
            moon.style.opacity = 0;
            sun.style.opacity = 1;
      } else {
            modeText.textContent = 'Dark Mode';
            moon.style.opacity = 1;
            sun.style.opacity = 0;
      }
});
