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

  constructor(private formService: FormService) {
    this.activeForm = { title: '', description: '', sections: [] };
    this.formSubscription = this.formService.form.subscribe((newForm) => {
      this.activeForm = newForm;
    });
  }
}
