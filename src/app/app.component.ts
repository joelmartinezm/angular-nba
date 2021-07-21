import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-nba';

  campeones  = [
    {
      'year':'2016',
      'name': 'Cleveland Cavaliers',
      'img':'./../assets/images/cleveland-cavaliers-kepsar.png',
      'url': 'https://en.wikipedia.org/wiki/2015%E2%80%9316_Cleveland_Cavaliers_season',
      'players':  ['Lebron James',  'Dahntay Jones', 'Kevin Love', 'Kyrie Irving',  'Shannon Brown']
    },
    {
      'year':'2015',
      'name': 'Golden State Warriors',
      'img':'./../assets/images/GSW_logo.png',
      'url': 'https://en.wikipedia.org/wiki/2014%E2%80%9315_Golden_State_Warriors_season',
      'players':  ['Stephen Curry',  'Klay Thompson', 'Draymond Green', 'Harrison Barnes', 'Andre Iguodala']
    },
    {
      'year':'2014',
      'name': 'San Antonio Spurs',
      'img':'./../assets/images/san-antonio-spurs-kepsar.png',
      'url': 'https://en.wikipedia.org/wiki/2013%E2%80%9314_San_Antonio_Spurs_season',
      'players':  ['Jeff Ayres',  'Aron Baynes', 'Marco Belinelli', 'Matt Bonner', 'Shannon Brown']
    }
  ]


}
