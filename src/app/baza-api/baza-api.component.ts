import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-baza-api',
  templateUrl: './baza-api.component.html',
  styleUrls: ['./baza-api.component.scss']
})
export class BazaAPIComponent implements OnInit {
  rekordy: Rekord[];
  rekord: Rekord;
  mojForm: FormGroup;
  constructor(private testService: TestService, private formBuilder: FormBuilder) {
    this.showRekordy();
    this.mojForm = this.formBuilder.group({
      liczba_uz: ''
    });
  }

  showRekordy() {
    this.testService.getRekordy()
      .subscribe((data: Rekord[]) => {
        // this.rekordy = data;
        this.rekordy = data.reverse();
        console.log(this.rekordy);
      });
  }

  insertRekord(formValue: Rekord) {
    console.log('insertRekord', formValue);
    this.testService.insert(formValue.liczba_uz)
      .subscribe(() => {
        this.showRekordy();
      });
  }

  deleteItem(item: Rekord) {
    console.log('component', item);
    this.testService.deleteItem(item.id)
      .subscribe((data: any) => {
        console.log('item deleted!', item, data);
        this.showRekordy();
      });
  }
  ngOnInit() {
  }
}
