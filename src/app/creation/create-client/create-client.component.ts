import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  constructor() {
  }
  // tslint:disable-next-line:typedef
  onSubmit(event: any) {
    return event.target.player.value;
  }

  ngOnInit(): void {
  }

}
