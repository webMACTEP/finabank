document.addEventListener('DOMContentLoaded', function () {
    const toggleElements = document.querySelectorAll('.toggle');

    toggleElements.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            toggle.classList.toggle('dark');

        });
    });

     // Выбираем все элементы с классом 'item'
     const items = document.querySelectorAll('.cards .items .item');

     items.forEach(function(item) {
         const openBtn = item.querySelector('.open');
         const closeBtn = item.querySelector('.close');
         const textBlock = item.querySelector('.text');
 
         // Обработчик для кнопки 'open'
         openBtn.addEventListener('click', function() {
             openBtn.classList.remove('active');
             closeBtn.classList.add('active');
             textBlock.classList.add('active');
         });
 
         // Обработчик для кнопки 'close'
         closeBtn.addEventListener('click', function() {
             closeBtn.classList.remove('active');
             textBlock.classList.remove('active');
             openBtn.classList.add('active');
         });
     });
});

