import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitItemComponent } from './habit-item/habit-item.component';
import { HabitFormComponent } from './habit-form/habit-form.component';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'habitlist', 
    component: HabitListComponent,
    children: [
      {
        path: 'info',
        component: InfoComponent
      }
    ]
  },
  {path: 'account', component: AccountComponent},
  {path: 'account/:id', component: AccountDetailComponent},
  {path: '', redirectTo: '/habitlist', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitItemComponent,
    HabitFormComponent,
    AccountComponent,
    AccountDetailComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
