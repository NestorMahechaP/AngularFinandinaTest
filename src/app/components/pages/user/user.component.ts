import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UserService]
})
export class UserComponent {
  
  constructor(private userService : UserService){}
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    nationality: new FormControl('', [Validators.required])
  });
  onSubmit() {
    this.userService.createUser(this.userForm.value).subscribe((response: any) => {
      console.log(response);
    });;
    console.warn(this.userForm.value);
  }
}
