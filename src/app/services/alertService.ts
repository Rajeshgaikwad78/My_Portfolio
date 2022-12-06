import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private snackBar: MatSnackBar) {
  }

  // tslint:disable-next-line:typedef
  success(message: string, duration= 3500) {
    this.snackBar.open(message, '', {duration, panelClass: ['alert', 'alert-success']});
  }

  // tslint:disable-next-line:typedef
  error(message: string, duration= 3500) {
    this.snackBar.open(message, '', {duration, panelClass: ['alert', 'alert-error']});
  }

  // tslint:disable-next-line:typedef
  message(message: string, duration= 3500) {
    this.snackBar.open(message, '', {duration, panelClass: ['alert']});
  }
}
