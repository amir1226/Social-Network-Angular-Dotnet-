export interface Message {
  id: number;
  senderId: number;
  senderUsername: string;
  senderPhotoUrl: string;
  recipientId: number;
  recipientPhotoUrl: string;
  content: string;
  dateread?: Date;
  messageSent: Date;
}
