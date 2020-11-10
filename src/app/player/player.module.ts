import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PlayerComponent } from './player.component';

const routes: Routes = [
  {
    path: '',
    component: PlayerComponent,
  },
];

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, IonicModule, RouterModule.forChild(routes)],
})
export class PlayerModule {}
