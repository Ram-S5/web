const thumbnails = document.querySelectorAll('.images img'); // Все миниатюры
const largeImage = document.getElementById('view-img'); // Большое изображение


thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Обновляем источник большого изображения
        largeImage.src = thumbnail.src;

        // Дополнительно: выделяем активную миниатюру
        thumbnails.forEach(img => img.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});