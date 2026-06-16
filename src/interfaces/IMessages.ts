import { MessageStatus } from '../enums/Messages';

export interface IMessages {
  id: number;
  type: MessageStatus;
  text: string;
}