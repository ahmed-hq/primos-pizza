import createHomePage from './home'
import createTabs from './tabs';
import createMenus from './menus';
import createContact from './contact';

function loadPage(){

  createTabs();
  createHomePage();
  createMenus();
  createContact();

}

export default loadPage;