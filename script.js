// Когда страница загружена
window.onload = function() {
    // Через 3 секунды показать поп-ап
    setTimeout(function() {
        // Показываем поп-ап
        const popup = document.getElementById('popup');
        popup.style.display = 'flex'; 
        setTimeout(function() {
            popup.style.opacity = '1'; 
            popup.style.transform = 'translateY(0)';  
        }, 10); 
    }, 1000); 
    
    // Событие для закрытия поп-апа
    document.getElementById('popup-close').onclick = function() {
        document.getElementById('popup').style.display = 'none';
    }
}
