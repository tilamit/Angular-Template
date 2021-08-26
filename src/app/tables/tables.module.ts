import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tabs/tab.component';
import { DynamicTabsDirective } from '../tabs/dynamic-tabs.directive';
import { PersonEditComponent } from '../people/person-edit.component';
import { PeopleListComponent } from '../people/people-list.component';

const routes: Routes = [
  { path: 'basic-table', component: BasicTableComponent}
]

@NgModule({
  declarations: [BasicTableComponent, TabsComponent, TabComponent, DynamicTabsDirective, PersonEditComponent, PeopleListComponent], 
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TablesModule { }
