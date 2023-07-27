import Personality from '../index';

export default class Zombie extends Personality {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 25;
    this.defence = 25;
  }
}
