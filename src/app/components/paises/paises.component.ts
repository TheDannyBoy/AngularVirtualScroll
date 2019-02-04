import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html'
})
export class PaisesComponent implements OnInit {

  paises: any;

  constructor(private _httpClient: HttpClient) {
    this._httpClient.get('https://restcountries.eu/rest/v2/lang/es').subscribe((paises: any) => {
      this.paises = paises;
      console.log(paises);
    });
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
    console.log(event);
  }

}
