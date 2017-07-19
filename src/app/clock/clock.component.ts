import {Attribute, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  private date;

  constructor() {
    this.date = new Date();

    setInterval(() => {
      this.date = new Date();
    }, 100);
  }
  ngOnInit() {
  }

}
