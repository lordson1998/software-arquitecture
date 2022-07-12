import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-modulo5',
  templateUrl: './modulo5.component.html',
  styleUrls: []
})
export class Modulo5Component implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

}
