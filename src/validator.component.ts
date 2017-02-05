import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
    selector: 'validator',
    template:
`
<div class="error"
     *ngIf="!control.valid && !control.pristine">
  <div *ngIf="control.errors.required">{{'This field is required!' | translate}}</div>
  <div *ngIf="control.errors.unique">{{'This value is already taken!' | translate}}</div>
</div>
`,
    styles: [
`
.error {
    color: red;
    font-size: smaller;
    margin-bottom: 10px;
}
`
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValidatorComponent implements OnInit {
    @Input() control: AbstractControl;

    constructor(private cd: ChangeDetectorRef) { }

    ngOnInit() {
        this.control.statusChanges.subscribe(() => this.cd.markForCheck());
    }
}
