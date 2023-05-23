import createHomePage from './home'
import createMenus from './menus';
import createContact from './contact';

const createTabs = () => {
  const tabsWrapper = document.createElement('div');
  tabsWrapper.setAttribute('class', 'tabs-wrapper');
  content.appendChild(tabsWrapper);

  const homeTab = document.createElement('div')
  const menuTab = document.createElement('div')
  const contactTab = document.createElement('div')
  
  homeTab.setAttribute('class', 'tab');
  menuTab.setAttribute('class', 'tab');
  contactTab.setAttribute('class', 'tab');

  homeTab.textContent = 'Home';
  menuTab.textContent = 'Menu';
  contactTab.textContent = 'Contact';

  tabsWrapper.appendChild(homeTab);
  tabsWrapper.appendChild(menuTab);
  tabsWrapper.appendChild(contactTab);

  homeTab.addEventListener('click', () => {
    clearPage();
    createHomePage();
  });

  menuTab.addEventListener('click', () => {
    clearPage();
    createMenus();
  });

  contactTab.addEventListener('click', () => {
    clearPage();
    createContact();
  });

}

const clearPage = () => {
  while (content.firstChild){
    content.removeChild(content.lastChild);
  }  
  createTabs()
}



export default createTabs;