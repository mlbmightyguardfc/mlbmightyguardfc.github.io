import { Component } from '@angular/core';

interface Matches {
  date: string;
  teamOne: string;
  teamTwo: string;
  teamOneScore: string;
  teamTwoScore: string;
  location: string;
  matchType: string;
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css'],
})
export class MatchesComponent {
  public matchesApril: Matches[] = [
    {
      date: 'Sunday 2 April 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Metsana FC',
      teamOneScore: '2',
      teamTwoScore: '1',
      location: 'Keerom (Limpopo Royal Ground)',
      matchType: 'LFA U/19',
    },
  ];

  public matchesMarch: Matches[] = [
    {
      date: 'Sunday 26 March 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Juventus FC',
      teamOneScore: '1',
      teamTwoScore: '1',
      location: 'Malebitsa (Mighty Guard Stadium)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 19 March 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Juventus FC',
      teamOneScore: '4',
      teamTwoScore: '1',
      location: 'Rathoke (Juventus Stadium)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 18 March 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Metsana FC',
      teamOneScore: '2',
      teamTwoScore: '0',
      location: 'Malebitsa (Mighty Guard Stadium)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 12 March 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Ace Mates',
      teamOneScore: '1',
      teamTwoScore: '0',
      location: 'Malebitsa (Mighty Guard Stadium)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 11 March 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Flog Tigers FC',
      teamOneScore: '6',
      teamTwoScore: '0',
      location: 'Ga Matlala (Flog Tigers Stadium)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 05 March 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Heroes FC',
      teamOneScore: '3',
      teamTwoScore: '0',
      location: 'Malebitsa (Mighty Guard Stadium)',
      matchType: 'LFA U/19',
    },
  ];

  public matchesFeb: Matches[] = [
    {
      date: 'Sunday 26 February 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Limpopo Royal FC',
      teamOneScore: '1',
      teamTwoScore: '0',
      location: 'Keerom (Limpopo Royal Ground)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 19 February 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'AM Shepherds FC',
      teamOneScore: '1',
      teamTwoScore: '3',
      location: 'Malebitsa (Mighty Guard Stadium)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 11 February 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Zama Sports Academy',
      teamOneScore: '1',
      teamTwoScore: '3',
      location: 'Gabhota (Zama Sports Ground)',
      matchType: 'LFA U/19',
    },
    {
      date: 'Sunday 04 February 2023',
      teamOne: 'Mighty Guard FC',
      teamTwo: 'Strikers FC',
      teamOneScore: '2',
      teamTwoScore: '0',
      location: 'Malebitsa (Mighty Guard Stadium)',
      matchType: 'LFA U/19',
    },
  ];
}
