import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  ngOnInit() {
  }

  constructor(private router: Router) {}
  go_to_main(): void {
    this.router.navigate(["/home"]);
  }

}
