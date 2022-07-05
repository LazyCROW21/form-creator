import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css'],
})
export class AppDialog {
    constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: string) { }
}
