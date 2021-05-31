import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { passwordRegex } from '../../../config';
import { IUser, User } from '../../../modules/user/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnDestroy, OnInit {
  @Input() formObjectInput: IUser = new User();
  @Output() formIsValid: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() user: EventEmitter<IUser> = new EventEmitter<IUser>();

  loginForm: FormGroup;

  #subscriptions: Subscription = new Subscription();

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(this.formObjectInput.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.formObjectInput.password, [
        Validators.required,
        Validators.pattern(passwordRegex),
      ]),
    });

    this.#subscriptions.add(
      this.loginForm.statusChanges
        .pipe(
          tap(item => {
            this.formIsValid.emit(this.loginForm.valid);
            return item;
          })
        )
        .pipe(filter(() => this.loginForm.valid))
        .subscribe(() => this.onFormValid())
    );
  }

  onFormValid(): void {
    this.formObjectInput.email = this.loginForm.value.username;
    this.formObjectInput.password = this.loginForm.value.password;
    this.user.emit(this.formObjectInput);
  }

  ngOnDestroy(): void {
    this.#subscriptions.unsubscribe();
  }
}
