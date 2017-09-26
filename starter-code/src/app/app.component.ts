import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food App';
  show: boolean = false;
  showFoods: boolean = false;

  showForm(show: boolean) {
    this.show = true;
  }

  showFoodsList(showFoods: boolean) {
    this.showFoods = true;
  }
}
