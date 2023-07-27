import Personality from '../index';

export default class Daemon extends Personality {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}
