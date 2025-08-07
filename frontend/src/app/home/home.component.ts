import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

   users!: User[] | null; 

 constructor(private userSerice : UserService , private router: Router){}

 ngOnInit(): void {
     this.userSerice.getData().subscribe((data)=>{
      console.log(data)
      this.users = data;
     })
 }

 navigateToUpdate(id : string) {
  console.log(id);
  this.router.navigate([`/update/${id}`])
 }


 navigateToAdd() {
 
  this.router.navigate([`/add`])
 }
 onDelete(id:string){
  this.userSerice.deleteData(id).subscribe(()=>{
    console.log("deleted the item")
    this.ngOnInit()
  })
 }


}
