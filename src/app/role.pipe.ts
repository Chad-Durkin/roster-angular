import {Pipe, PipeTransform} from '@angular/core';
import { Roster } from './roster.model';

@Pipe({
  name: "role",
  pure: false

})

export class RolePipe implements PipeTransform {

  transform (input: Roster[], playerRole){
    if(playerRole != "All Roles") {
      var output: Roster[] = [];
      for(var i = 0; i < input.length; i++) {
        if(input[i].role === playerRole) {
          output.push(input[i]);
        }
      }
      return output;
    }
    return input;
  }
}
