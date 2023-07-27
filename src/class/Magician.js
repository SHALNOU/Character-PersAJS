import Personality from '../index';

export default class Magician extends Personality {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}
