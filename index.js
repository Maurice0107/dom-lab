
// ====== Creating menu bar =========================
document.title = 'Dom manipulation';
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = 'var(--main-bg)';

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height="100";
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.setAttribute('class', 'flex-around');
//====== Adding Menu Buttons ======
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},

];




const h1 = document.createElement('h1');

h1.textContent = "Dom Manipulation"

mainEl.appendChild(h1);

mainEl.classList.add('flex-ctr');

topMenuEl.classList.add('flex-around');

menuLinks.forEach(anchor =>{
    const menuLink = document.createElement('a');
    menuLink.textContent = anchor.text ; 
    menuLink.href = anchor.href; 
    topMenuEl.appendChild(menuLink);

});