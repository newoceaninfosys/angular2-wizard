import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wizard-step',
  template:
  `
    <div [hidden]="!isActive">
      <ng-content></ng-content>
    </div>
  `
})
export class WizardStepComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public hidden: boolean = false;
  @Input()
  public isValid: boolean = true;
  @Input()
  public showNext: boolean = true;
  @Input()
  public showPrev: boolean = true;

  @Output()
  public onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  public isDisabled: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  @Input('isActive')
  public set isActive(isActive: boolean) {
    this._isActive = isActive;
    this.isDisabled = false;
  }

  public get isActive(): boolean {
    return this._isActive;
  }

}
