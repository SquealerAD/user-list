import {Injectable} from '@angular/core';

@Injectable()
export class MessageService {
  constructor() {}

  public message = {
    text: '',
    type: ''
  };

  showMessage(text, messageType) {
    this.message.text = text;
    this.message.type = messageType;
    setTimeout(() => {
      this.message.text = '';
      this.message.type = '';
    }, 5000);
  }
}
