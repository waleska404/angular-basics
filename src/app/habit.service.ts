import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, of, Observable } from 'rxjs';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private

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

  constructor(private http: HttpClient) {}

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/habits')
  }

  addHabit(newHabit) {
    const id = this.habits.length + 1;
    newHabit.id = id;
    this.habits.push(newHabit);
  }

  
}
