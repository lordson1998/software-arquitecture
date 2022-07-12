import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-modulo3',
  templateUrl: './modulo3.component.html',
  styleUrls: []
})
export class Modulo3Component implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

}
