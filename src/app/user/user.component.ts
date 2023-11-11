import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  user: User | undefined;

  constructor(private activeRoute:ActivatedRoute, private userService:UserService) { 
  }

  ngOnInit(): void {
    const id = Number(this.activeRoute.snapshot.paramMap.get('userID'));
    if (id) {
      this.getUser(id);
    }
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe({
      next: user => this.user = user
    });
  }
}
