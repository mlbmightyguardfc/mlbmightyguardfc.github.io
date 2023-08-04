import { Component } from '@angular/core';

interface Clothing {
  title: string;
  image: string;
}

@Component({
  selector: 'app-become-a-fan',
  templateUrl: './become-a-fan.component.html',
  styleUrls: ['./become-a-fan.component.css'],
})
export class BecomeAFanComponent {
  public clothing: Clothing[] = [
    {
      title: 'Classic Mighty Golfer',
      image: '/assets/img/shirt1.png',
    },
    {
      title: 'Plain Mighty Golfer',
      image: '/assets/img/shirt1.png',
    },
    {
      title: 'Mighty Tracksuit Top',
      image: '/assets/img/shirt1.png',
    },
    {
      title: 'Mighty Tracksuit Pants',
      image: '/assets/img/shirt1.png',
    },
  ];
}
