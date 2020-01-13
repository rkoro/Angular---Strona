import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kolko-i-krzyzyk',
  templateUrl: './kolko-i-krzyzyk.component.html',
  styleUrls: ['./kolko-i-krzyzyk.component.scss']
})
export class KolkoIKrzyzykComponent implements OnInit {
  static readonly emptyString = ' ';
  static readonly winConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  public pola: string[][];
  public playersTurn: string;
  public winInfo: string;
  public win: boolean;

  constructor() {
    this.set();
  }

  ngOnInit() {
  }

  set() {
    this.win = false;
    this.playersTurn = 'O';
    this.pola = [];
    this.winInfo = 'Tura: ';
    for (let i = 0; i < 3; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(KolkoIKrzyzykComponent.emptyString);
      }
      this.pola.push(row);
    }
  }

  onMove(x: number, y: number) {
    if (this.win === false && this.pola[x][y] === KolkoIKrzyzykComponent.emptyString) {
      this.pola[x][y] = this.playersTurn;
      if (this.isWin()) {
        this.win = true;
        this.winInfo = 'Wygrana: ';
      } else
        if (this.playersTurn === 'X') { this.playersTurn = 'O'; } else
          if (this.playersTurn === 'O') { this.playersTurn = 'X'; }
    }
    if (this.isDraw() && !this.win) {
      this.winInfo = 'Remis';
      this.win = true;
      this.playersTurn = '';
    }
  }
  isDraw() {
    return this.pola.every(row =>
      row.every(pole =>
        pole !== KolkoIKrzyzykComponent.emptyString
      ));
  }

  isWin() {
    return KolkoIKrzyzykComponent.winConditions.some(winCondition =>
      winCondition.every(point =>
        this.pola[point[0]][point[1]] === this.playersTurn
      ));
  }
}
