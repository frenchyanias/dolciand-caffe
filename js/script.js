// Toggle class active      //yang tadinya ada jadi tidak ada dan sebaliknya
const navbarNav = document.querySelector('.navbar-nav');

//ketika toast menu di klik
document.querySelector('#toast-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

//klik di luar slidebar untuk menghilangkan nav
const toast = document.querySelector('#toast-menu');

document.addEventListener('click', function (e) {
  if (!toast.contains(e.target) && !navbarNav.contains(e.target)) navbarNav.classList.remove('active');
});
