import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-modulo2',
  templateUrl: './modulo2.component.html',
  styleUrls: []
})
export class Modulo2Component implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

}
