import { Component } from '@angular/core';

interface Player {
  number: number;
  name: string;
  position: string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {}
