import { Component, OnInit } from '@angular/core';
import { HeroDTO } from '../HeroDTO';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new HeroDTO(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

  newHero() {
    this.model = new HeroDTO(42, '', '');
  }



}
