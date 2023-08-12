import {Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ProfileDetailsService } from 'src/app/shared/services/profile-details/profile-details.service';
import { ProductList } from 'src/app/shared/profile-interface';
@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
})
export class ProfileListComponent implements OnInit{
  

profileList: ProductList[];


public isCollapsed = false;

  isNavCollapse = false;
  @HostListener('window:scroll', []) onScroll() {
    if (this.scroll.getScrollPosition()[1] > 70) {
      this.isNavCollapse = true;
    } else {
      this.isNavCollapse = false;
    }
  }

constructor(private profileService:ProfileDetailsService , private scroll: ViewportScroller){
}

onWheel(event: WheelEvent): void {
  if (event.deltaY > 0) this.scrollToRight(); 
  else this.scrollToLeft();
}

scrollToLeft(): void {
  document.getElementById('scroll-1')!.scrollLeft -= 400;
}

scrollToRight(): void {
  document.getElementById('scroll-1')!.scrollLeft += 400;
}
ngOnInit(): void {
  this.profileService.getProfileList().subscribe((data)=>{
    this.profileList = data
    console.log(this.profileList) })
}

}
