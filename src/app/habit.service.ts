import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits = [
    {
      id: 1,
      title: 'Check in with parents'
    },
    {
      id: 2,
      title: 'Record videos'
    },
    {
      id: 3,
      title: 'Work on side project'
    },
    {
      id: 4,
      title: 'Write for 20 mins'
    }
  ];

  getHabits(): Observable<any> {
    return of(this.habits);
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }

  constructor() { }
}
