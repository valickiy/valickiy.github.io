var btn = document.querySelector('.contact-btn .btn');
var modal = document.querySelector('.modal-window');
var closeBtn = document.querySelector('.close');
btn.addEventListener('click', function (e)
{
    e.preventDefault();
    modal.style.display = 'block';
});
closeBtn.addEventListener('click', function (e)
{
    modal.style.display = 'none';
});