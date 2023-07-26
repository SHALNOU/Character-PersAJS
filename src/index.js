export class Personality {
  constructor(name, type) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть строкой от 2 до 10 символов');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.health = 100;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
    } else {
      throw new Error('Нельзя повысить уровень умершего');
    }
  }

  damage(points) {
    if (typeof points !== 'number' || points < 0) {
      throw new Error('is not symbol or not return up and min zero');
    }

    const damageMortal = points * (1 - this.defence / 100);
    this.health -= damageMortal;

    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export class Bowerman extends Personality {
  constructor(name) {
    super(name, 'Bowerman');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Personality {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Personality {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Daemon extends Personality {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Personality {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Personality {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 25;
    this.defence = 25;
  }
}
