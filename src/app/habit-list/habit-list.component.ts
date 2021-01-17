import { Component, OnInit } from '@angular/core';
import { map, switchMap } from "rxjs/operators"
import { Observable } from 'rxjs';
import { Habit } from '../habit';
import { HabitService } from '../habit.service';

@Component({
  selector: 'app-habit-list',
  template: `
    <h1>Habits</h1>
    <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
    <ul>
      <app-habit-item 
        *ngFor="let habit of habits | async" 
        [habit]="habit">
      </app-habit-item>
    </ul>
    <a routerLinkActive="Active" routerLink="info">INFO</a>
    <router-outlet></router-outlet>
  `,
  styles: ['h1 { color: blue; }']
})
export class HabitListComponent implements OnInit {

  habits: Observable<Habit[]>;

  constructor(private habitService: HabitService) {}
  
  ngOnInit(): void {
    this.habits = this.habitService.refetch.pipe(
      switchMap(() => this.habitService.getHabits())
    );
  }

  onAddHabit(newHabit) {
    this.habitService.addHabit(newHabit).subscribe();
  }

}
