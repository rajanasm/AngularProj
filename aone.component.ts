import { Component } from '@angular/core';

@Component({
selector:"app-one",
template:`<div class="container">
<div class="row">
<div class="col-md-8">
{{mystring}} <i class="fa fa-heart" [style.color]="isSpecial ? 'red' : 'green'" 
 (click)="onChange()"></i>{{counter}}
<div style="margin-top:20px">
<ul>
<li *ngFor ="let hero of heros">
  {{hero}}
</li>
</ul>
</div>
</div>
</div>
</div>
`
})

export class aoneComponent {
public mystring:string="Rajan Mistry";
public isSpecial:boolean=false;
public counter : number = 10;
public heros :string [] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

onChange(){
this.isSpecial = !this.isSpecial;
this.counter += this.isSpecial? +1 :-1;
}


}