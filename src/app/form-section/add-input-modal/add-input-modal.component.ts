import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-input-modal',
  templateUrl: './add-input-modal.component.html',
  styleUrls: ['./add-input-modal.component.css']
})
export class AddInputModalComponent implements OnInit {
  @Input('show')
  isOpen: boolean = false;

  @Input('modalSize')
  modalSize: string = 'md';

  @Output('onBackDropClicked')
  backDropEvent: EventEmitter<null> = new EventEmitter<null>();

  constructor() { }

  ngOnInit(): void { }

  onBackDropClicked() {
    this.backDropEvent.emit();
  }
}
