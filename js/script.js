let toggleBtn = document.querySelector('.nav-toggle');
let navList = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', function() {
    navList.classList.toggle('visible');
})
