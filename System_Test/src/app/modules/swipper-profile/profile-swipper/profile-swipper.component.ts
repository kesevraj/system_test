import {
  Component,
  ViewChildren,
  QueryList,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';
import { ProductList } from 'src/app/shared/profile-interface';
import { ProfileDetailsService } from 'src/app/shared/services/profile-details/profile-details.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';


@Component({
  selector: 'app-profile-swipper',
  templateUrl: './profile-swipper.component.html',
  styleUrls: ['./profile-swipper.component.scss']
})
export class ProfileSwipperComponent {
  profileList: ProductList[];
  
  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
  heartVisible: boolean;
  crossVisible: boolean;
  

  constructor(private renderer: Renderer2, private profileService: ProfileDetailsService, private toast:ToastService) {}

  userClickedButton(event:any, heart:boolean,shortlist?:boolean) {
    event.preventDefault();
    if (!this.profileList.length) return false;
    if (heart) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement, 
        'transform',
        'translate(' + this.moveOutWidth + 'px, -100px) rotate(-180deg)'
      );
      this.toggleChoiceIndicator(false, true);
      this.emitChoice(heart, this.profileList[0],shortlist);
    } else {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(-' + this.moveOutWidth + 'px, -100px) rotate(180deg)'
      );
      this.toggleChoiceIndicator(true, false);
      this.emitChoice(heart, this.profileList[0],shortlist);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
  }

  handlePan(event:any) {
    if (
      event.deltaX === 0 ||
      (event.center.x === 0 && event.center.y === 0) ||
      !this.profileList.length
    )
      return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) {
      this.toggleChoiceIndicator(false, true);
      
    }
    if (event.deltaX < 0) {
      this.toggleChoiceIndicator(true, false);
      
    }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(
      this.tinderCardsArray[0].nativeElement,
      'transform',
      'translate(' +
        event.deltaX +
        'px, ' +
        event.deltaY +
        'px) rotate(' +
        rotate +
        'deg)'
    );

    this.shiftRequired = true;
  }

  handlePanEnd(event:any) {
    this.toggleChoiceIndicator(false, false);

    if (!this.profileList.length) return;

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        ''
      );
      this.shiftRequired = false;
    } else {
      let endX = Math.max(
        Math.abs(event.velocityX) * this.moveOutWidth,
        this.moveOutWidth
      );
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(' +
          toX +
          'px, ' +
          (toY + event.deltaY) +
          'px) rotate(' +
          rotate +
          'deg)'
      );

      this.shiftRequired = true;

      this.emitChoice(!!(event.deltaX > 0), this.profileList[0]);
    }
    this.transitionInProgress = true;
  }

  toggleChoiceIndicator(cross:any, heart:any) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  }

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    if (this.shiftRequired) {
      this.shiftRequired = false;
      this.profileList.shift();
    }
  }

  emitChoice(heart:boolean, card:any,shortlist?:boolean) {
    if(shortlist){
      this.toast.showInfo('','Shortlisted')
    }
    else{
      heart ? this.toast.showSuccess('','Interested') : this.toast.showWarning('','Not Interested');
      this.choiceMade.emit({
        choice: heart,
        payload: card,
      });
    }
    
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
    });
  }

  ngOnInit(): void {
    this.profileService.getProfileList().subscribe((data) => {
      this.profileList = data
      console.log(this.profileList)
    })
  }

}
