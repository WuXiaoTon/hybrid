import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { HelloPage } from '../hello/hello';
import { LoginPage } from '../login/login';
import { PersonPage } from '../person/person';
import { NewsPage } from '../news/news';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = NewsPage;
  tab5Root = PersonPage;

  constructor() {

  }
}
