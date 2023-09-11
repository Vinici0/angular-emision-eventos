import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  /*
    Valor por defecto de la propiedad characterList
    Input() indica que la propiedad characterList puede ser modificada desde fuera del componente
  */
  @Input()
  public characterList: Character[] = [
    {
      id : '1',
      name: 'Trunks',
      power: 10,
    },
  ];

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
