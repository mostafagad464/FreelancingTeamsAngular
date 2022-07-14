import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../_pipes/pipes.module';
import { TeamChatComponent } from './team-chat/team-chat.component';



@NgModule({
  declarations: [
    ChatComponent,
    TeamChatComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    ChatComponent
  ]
})
export class MessagesModule { }
