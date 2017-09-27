import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food App';
  show: boolean = false;
  showFoods: boolean = true;

  showForm(show: boolean) {
    if (this.show === false) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  showFoodsList(showFoods: boolean) {
    if (this.showFoods === false) {
      this.showFoods = true;
    } else {
      this.showFoods = false;
    }
  }
}
