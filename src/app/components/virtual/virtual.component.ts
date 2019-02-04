import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html'
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
  personas = Array(1000).fill(0);

  constructor() {
    console.log(this.personas);
  }

  ngOnInit() {
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irMitad() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }

  irInicio() {
    this.viewport.scrollToIndex(0);
  }

}
