import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessagesControlService } from '../messages-control.service'
import { IMessages } from '../interfaces/IMessages';

@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  messages: IMessages[] = [];
  public messagesControlService = inject(MessagesControlService);

  ngOnInit(): void {
    this.messagesControlService.registrOnChanges(() => {
      this.messages = this.messagesControlService.getMessages()
    });
  };

  onCloseMessage(msgid: number){
    this.messagesControlService.closeMessage(msgid);
  };
};
