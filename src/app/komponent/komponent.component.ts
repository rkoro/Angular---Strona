import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-komponent',
  templateUrl: './komponent.component.html',
  styleUrls: ['./komponent.component.scss']
})
export class KomponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goToMyRepo() {
    window.location.href = 'https://github.com/rkoro/repositories';
  }

}
