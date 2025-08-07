import { Component } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { FormsModule } from '@angular/forms';
import { ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-add-new-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-page.component.html',
  styleUrl: './add-new-page.component.css'
})
export class AddNewPageComponent {



    newUser = {
      name : "",
      email : "",
      phoneNumber : ""
    }


  constructor(private userService :UserService , private router : Router){}

  onAdd(){
    console.log(this.newUser)
      this.userService.addData(this.newUser).subscribe((data)=>{
        console.log("New Data Added" , data);
        this.router.navigate(['/home'])
      })
  }

}
