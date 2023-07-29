import Personality from './personality';

export default class Swordsman extends Personality {
  constructor(name, type = 'Swordsman') {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
  }
}
