import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-modulo1',
  templateUrl: './modulo1.component.html',
  styleUrls: []
})
export class Modulo1Component implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

}
