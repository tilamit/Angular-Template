import { Component, OnInit } from '@angular/core';
import { CompleterService, CompleterData } from 'ng2-completer';
import { TabsComponent } from '../../tabs/tabs.component';
import { UserService } from 'src/app/service/UserService';
import { ViewChild } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.scss']
})

export class BasicTableComponent implements OnInit {

  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('about') aboutTemplate;
  @ViewChild(TabsComponent) tabsComponent;

  userData: any[] = [];
  userList1: any;
  userList2: any;

  lastkeydown1: number = 0;
  lastkeydown2: number = 0;
  subscription: any;

  constructor(private userService: UserService) {
    //Get the user data from users.json
    this.userService.getUserList().subscribe(
      data => {
        Object.assign(this.userData, data);
      },
      error => {
        console.log("Something wrong here");
      });    
  }

  ngOnInit(){
    //Using Jquery --- $ is declared at the top
   
  }

  people = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr',
    },

    {
      id: 2,
      name: 'John',
      surname: 'Abraham',
      twitter: '@john',
    },

    {
      id: 3,
      name: 'James',
      surname: 'Brown',
      twitter: '@james',
    },

    {
      id: 4,
      name: 'Steve',
      surname: 'Carter',
      twitter: '@steve',
    }
  ];

  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`,
      this.editPersonTemplate,
      person,
      true
    );
  }

  onAddPerson() {
    this.tabsComponent.openTab('New Person', this.editPersonTemplate, {}, true);
  }

  onPersonFormSubmit(dataModel) {
    if (dataModel.id > 0) {
      this.people = this.people.map(person => {
        if (person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random() * 100);
      this.people.push(dataModel);
    }

    // close the tab
    this.tabsComponent.closeActiveTab();
  }

  onOpenAbout() {
    this.tabsComponent.openTab('About', this.aboutTemplate, {}, true);
  }
}