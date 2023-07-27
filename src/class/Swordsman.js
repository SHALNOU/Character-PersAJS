import Personality from '../index';

export default class Swordsman extends Personality {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}
