import { niam } from "#player/Niam.ts";
import {playerPositonX, PlayerPositionY } from '#enums/PlayerPosition.ts';

export class Fight {
  currentPhase: number;
  finalPhase: number;
  
  public hasNextPhase(): boolean {
    if (currentPhase !== finalPhase) {
      return true;
    }
    return false;
  }


  
  
}
