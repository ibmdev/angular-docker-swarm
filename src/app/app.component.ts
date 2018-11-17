import { Component } from '@angular/core';
import { Member } from './interfaces/member';
import { CatComponent } from './classes/cat/cat.component';
import { AnimalComponent } from './classes/animal/animal.component';
import { DogComponent } from './classes/dog/dog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dockerng';
  cat: CatComponent;
  constructor() {
    this.cat = new CatComponent();
    this.returnValue(true);
    this.fallThroughCase(1);
  }

  myImplicitAny(someArg: string, member: Member) {
    console.log('Test Implicit Any', someArg);
    console.log('Display age', member.age.toString);
  }
  createAnimal(animal: AnimalComponent) {
    console.log('Name of Animal', animal.name);
  }
  createCat(cat: CatComponent) {
    console.log('Name of Cat', cat.name);
  }
  createDog(dog: DogComponent) {
    console.log('Name of Dog', dog.name);
  }
  /**noImplicitReturns */
  returnValue(cond: boolean): boolean {
    if (cond) {
      return cond;
    } else {
      return true;
    }
  }
  /**noFallthroughCasesInSwitch */
  fallThroughCase(cond: number): void {
    switch (cond) {
      case 0:
      case 1:
        cond = cond * 2;
        console.log('Condition :', cond);
        break;
      case 2:
      cond = cond * 3;
    }

  }
}
