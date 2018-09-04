import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-personal-site';
  status: boolean;
  openNav() {
    this.status = true;
  }
  closeNav() {
    this.status = false;
  }
  setNav() {
    const style = {
      'width': this.status ? '250px' : '0px',
    };
    return style;
  }
}
