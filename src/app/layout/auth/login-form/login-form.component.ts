import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { IUser, User } from '../../../modules/user/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnDestroy, AfterViewInit {
  @ViewChild('form', { static: true }) ngForm!: NgForm;

  @ViewChild('formNative', { static: true }) formNative!: ElementRef;
  // @Output() formObjectOutput: EventEmitter<IUser> = new EventEmitter<IUser>();
  @Input() formObjectInput: IUser = new User();

  subscriptions: Subscription[] = [];

  constructor() {}

  ngAfterViewInit() {
    /*setTimeout(()=>{
      this.subscriptions.push(this.ngForm.form.valueChanges.subscribe(val => {
         this.formObjectOutput.emit(this.formObjectInput);
      }));
    }, 0);*/
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
