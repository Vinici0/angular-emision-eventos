import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './page/page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddCharacterComponent, ListComponent, MainPageComponent],
  imports: [CommonModule,  FormsModule],
  exports: [AddCharacterComponent, ListComponent, MainPageComponent],
})
export class DbzModule {}
