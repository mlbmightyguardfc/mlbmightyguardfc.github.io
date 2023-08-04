import { Component } from '@angular/core';

interface shopItem {
  img: string;
  title: string;
  price: string;
}
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent {
  public items: shopItem[] = [
    {
      img: '/assets/img/shirt1.png',
      title: 'Classic Mighty Golfer',
      price: 'R150.00',
    },
    {
      img: '/assets/img/shirt1.png',
      title: 'Plain Mighty Golfer',
      price: 'R130.00',
    },
    {
      img: '/assets/img/shirt1.png',
      title: 'Mighty Tracksuit Top',
      price: 'R150.00',
    },
    {
      img: '/assets/img/shirt1.png',
      title: 'Mighty Tracksuit Pants',
      price: 'R200.00',
    },
  ];
}
