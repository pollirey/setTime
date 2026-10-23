
const modal = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

setTimeout( () => {
    modal.classList.add("active");
} , 5000);

modalClose.addEventListener("click" , () => {
    modal.classList.remove("active");
});

modalOverlay.addEventListener("click" , (e) => {
    if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");}
    else {
    return;
}
} );


// 2) Сделать обработчик события на крестик в модальном окне чтобы оно закрывалось так же просто при клике 
// убираем клас
// 3) Сделать обработчик события на фон что если мы нажали именно на него мы закрываем модалку тоже.
//  Чтобы проверить что нажато именно на фон мы когда 
// вешаем обработчик события добавляем (e). И через e.targer делаем проверку === с самим нашим фоном 
// если это он то мы скрываем если нет то просто return для остановки