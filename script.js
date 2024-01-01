




document.querySelectorAll('.story-btn').forEach((btn)=>{
    btn.addEventListener('click', function () {
        btn.nextElementSibling.classList.toggle('change');
        btn.classList.toggle('change');
    });
})