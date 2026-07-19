import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MessagesControlService } from '../messages-control.service'
import { IMessages } from '../interfaces/IMessages';

@Component({
  selector: 'app-message',
  imports: [NgTemplateOutlet, AsyncPipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {

  public messagesControlService = inject(MessagesControlService);
  messages$ = this.messagesControlService.messages$;

  onCloseMessage(msgid: number){
    this.messagesControlService.closeMessage(msgid);
  };
};
