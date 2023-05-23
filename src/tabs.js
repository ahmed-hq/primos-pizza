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

  });

  homeTab.addEventListener('click', () => {

  });

  homeTab.addEventListener('click', () => {

  });

}

export default createTabs;