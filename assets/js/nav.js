navi = document.querySelectorAll(".navitem");

navi.forEach(navitem =>{
    navitem.addEventListener('click', () =>{
        navi.forEach(innerItem => innerItem.classList.remove('active'));

        navitem.classList.add('active');
    })
});