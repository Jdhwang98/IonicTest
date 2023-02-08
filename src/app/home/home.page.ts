import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  private userInput : string = "";

 getUserInput() : string {
  let userInput = (<HTMLInputElement> document.getElementById("myTextInput")).value;
    this.setExpression(userInput);
    return userInput;
  }

  setExpression (word: string): void {
    this.userInput = word;
  }

  changePicture(): void {
    if (isPalindrome(this.userInput)) {
      (<HTMLInputElement> document.getElementById("image")).src="https://static.tvtropes.org/pmwiki/pub/images/spongebob_chicken.png";
    }
    else {
      (<HTMLInputElement> document.getElementById("image")).src="https://i.ytimg.com/vi/wAbnNZDhYrA/maxresdefault.jpg";
    }
  }
}

const isPalindrome = (userInput: string): boolean => {
  let i = 0;
  let j = userInput.length - 1;
  let counter = 0; 
  for (i < j; ++i ; --j) {
    if (userInput[i] == userInput[j]) {
      counter++;
    }

  }
  if (counter = userInput.length) {
    return true
  }
  else {
    return false;
  }
  
}


const setboolExpression = (isPalindrome: boolean) => {
  
  if (isPalindrome == false) {
    return 
  }
  else {
    return
  }
}
