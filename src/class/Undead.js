import Personality from '../index';

export default class Undead extends Personality {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}
