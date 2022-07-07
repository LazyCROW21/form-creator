import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MyForm } from './common/form-type';
import { FormService } from './form-service/form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeForm: MyForm;
  formSubscription: Subscription;

  titleTypingTimer: any;
  descriptionTypingTimer: any;
  doneTypingInterval = 3000;  

  constructor(private formService: FormService) {
    this.activeForm = { title: '', description: '', sections: [] };
    this.formSubscription = this.formService.form.subscribe((newForm) => {
      this.activeForm = newForm;
    });
  }
  
  stopTypingTitle() {
    clearTimeout(this.titleTypingTimer);
    this.titleTypingTimer = setTimeout(this.doneTyping, this.doneTypingInterval);
  }

  startTypingTitle() {
    if(this.titleTypingTimer) {
      clearTimeout(this.titleTypingTimer);
    }
  }

  stopTypingDescription() {
    clearTimeout(this.descriptionTypingTimer);
    this.descriptionTypingTimer = setTimeout(this.doneTyping, this.doneTypingInterval);
  }
  
  startTypingDescription() {
    if(this.descriptionTypingTimer) {
      clearTimeout(this.descriptionTypingTimer);
    }
  }

  doneTyping() {
    this.formService.form.next({ ...this.activeForm });
  }
}
