import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent} from './menu-item/menu-item.component';


const routes: Routes = [
  { path: '', redirectTo: '/Appetizers', pathMatch: 'full' },
  { path: 'Appetizers', component: MenuComponent},
  { path: 'Dinner', component: MenuComponent},
  { path: 'Desserts', component: MenuComponent},
  { path: 'Appetizers/:name', component: MenuItemComponent},
  { path: 'Dinner/:name', component: MenuItemComponent},
  { path: 'Dessers/:name', component: MenuItemComponent},
  { path: '**', redirectTo: '/Appetizers'}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

