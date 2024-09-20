import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone:true,
  imports:[CommonModule],
  selector: 'app-struct-directive',
  templateUrl: './struct-directive.component.html',
  styleUrls: ['./struct-directive.component.scss']
})
export class StructDirectiveComponent {
  topicName:string = "Structural Directive";

  isDivVisible:boolean = true;
  div3:string = "DIV-3";
  div2:string = "DIV-2";
  div1:string = "DIV-1";

}
