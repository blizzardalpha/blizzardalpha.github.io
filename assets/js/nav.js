navi = document.querySelectorAll(".navitem");
sect = document.querySelectorAll(".childSection");


navi.forEach(navitem =>{
    navitem.addEventListener('click', () =>{
        navi.forEach(innerItem => innerItem.classList.remove('active'));
        sect.forEach(innerItem => innerItem.classList.remove('active'));
        navitem.classList.add('active');
    })
    
});
