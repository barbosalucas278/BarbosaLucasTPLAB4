import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { JuegosHomeComponent } from './pages/juegos-home/juegos-home.component';
import { ChatModule } from '../chat/chat.module';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';

@NgModule({
  declarations: [JuegosHomeComponent, ListJuegosComponent],
  imports: [CommonModule, JuegosRoutingModule, ChatModule],
})
export class JuegosModule {}
