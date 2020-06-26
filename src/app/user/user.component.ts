import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { User } from "../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  users: any[]=[];
  public user:User;
  public status:string;
  public title= "APP"

  constructor( private userService: UserService) {
    this.user = new User(
      "",
      "",
      null
    );
   }

  ngOnInit(): void {
    this.userService.getAllList()
    .subscribe(
      (data) => { // Success
        
        this.users = data['users'];
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onSubmit(form){
    console.log("AQUI IDIOTA",form);
    this.userService.saveUser(this.user).subscribe(
      
      response=>{
          if(response){
        
            this.status = "success";
            form.reset();
          }else{
            this.status = "error";
          }
      },error =>{
        console.log(<any>error);
        form.reset();
        
      }
    );
  }

  
  
}
