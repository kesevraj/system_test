import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductList } from 'src/app/shared/profile-interface';
import { ProfileDetailsService } from 'src/app/shared/services/profile-details/profile-details.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit , AfterViewInit{
  profileList: ProductList[];
  id:Number
  profileDetails: any;
  
  constructor(private profileService:ProfileDetailsService , private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.profileService.getProfileList().subscribe((data)=>{
      this.profileList = data
      this.profileDetails = this.getProfileDetails()
      console.log(this.profileDetails)
      })
  }

  getProfileDetails(){
    return this.profileList.find((item:any)=>{
      if(item.id == this.id){
        return item
      }
    })
  }

  ngAfterViewInit(): void {
    
  }
}
