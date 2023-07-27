import Personality from '../index';

export default class Bowerman extends Personality {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}
