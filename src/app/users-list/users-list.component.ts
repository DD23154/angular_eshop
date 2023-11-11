import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service'; 
import { User } from '../user';
import { Observable } from 'rxjs';
import { Subscription } from "rxjs";
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  sub!: Subscription;
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.sub = this.userService.getUsers().subscribe({
      next: users => {
        this.users = users;
      }
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
