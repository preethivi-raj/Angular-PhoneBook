import { Component, OnInit } from '@angular/core';
import { FormsModule}  from "@angular/forms"
import { User, UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-page',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './update-page.component.html',
  styleUrl: './update-page.component.css'
})
export class UpdatePageComponent implements OnInit {


  constructor(private userService: UserService , 
    private route:ActivatedRoute,
    private router: Router 
  ){}


  id!:string | null ;

    newUser! : User  ;

  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id");
      this.userService.get(this.id).subscribe((data)=>{
        console.log(data)
         this.newUser=data;
      })
  }

  
  onSubmit(){
    this.userService.updateData(this.newUser).subscribe((data)=>{
      console.log(data)
      this.router.navigate(["/home"])
    })
  }
}
