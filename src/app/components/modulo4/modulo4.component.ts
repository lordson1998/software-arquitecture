import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { routes } from '../../app-routing.module';

@Component({
  selector: 'app-modulo4',
  templateUrl: './modulo4.component.html',
  styleUrls: []
})
export class Modulo4Component implements OnInit {

  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

}
