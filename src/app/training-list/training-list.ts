import { Component, signal } from '@angular/core';
import { Training } from '../../application/training';
import { TrainingItem } from '../training-item/training-item';
@Component({
  imports: [TrainingItem],
  selector: 'app-training-list',
  styleUrl: './training-list.css',
  templateUrl: './training-list.html',
})
export class TrainingList {
  trainingCatalog = signal<Training[]>([
    { id:125,name: 'Introduction à Angular', nbDays: 3, isFree: false },
    { id:587,name: 'Grid & Flexbox', nbDays: 3, isFree: true },
    { id: 879,name: 'Node JS avancé', nbDays: 4, isFree: false },
    { id:859,name: 'HTML5 & CSS', nbDays: 2, isFree: true }
  ]);

  ajouterTraining(name:string, nbdays: string, isfree: boolean){
    this.trainingCatalog.update(tc => [...tc, {id: Math.floor(Math.random()*1000), name:name, nbDays: Number(nbdays), isFree:isfree}]);
  }
}
