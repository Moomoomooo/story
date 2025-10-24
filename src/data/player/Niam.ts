import { DivinityLevel } from '#enums/DivinityLevel.ts';

export const niam = {
  level: 1,
  hp: 0,
  sp: 0,
  presence: 5, // governs hp and resistance to curses
  acuity: 5, // governs setup window time, critical chance, and
  fitness: 5,
  agility: 5,
  grace: 5, // governs mp and 
  divinity: 0,


  initialize: function(): void {
    this.hp = ;
    this.mp = ;
    
  },
  
}

export interface Player {
  level: number;
  acuity: number;
  grace: number;
  divinity: DivinityLevel;
  
}
