import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [
    {
      id: 1,
      title: 'Check in with parents',
      count: 4
    },
    {
      id: 2,
      title: 'Record videos',
      count: 2
    },
    {
      id: 3,
      title: 'Work on side project',
      count: 8
    },
    {
      id: 4,
      title: 'Write for 20 mins',
      count: 1
    }
  ];

  getHabits(): Observable<Habit[]> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }

  constructor() { }
}
