import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() data: any = {
    title: 'Sample Title',
    desc: 'Sample Description',
    image: 'https://via.placeholder.com/400x250',
    link: '#'
  };
}
