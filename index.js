class Hero {
    constructor(nameHero, age, type) {
      this.nameHero = nameHero;
      this.age = age;
      this.type = type;
    }
  
    atacar() {
      let ataque;
      switch (this.type) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = '';
      }
      console.log(`O ${this.type} atacou usando ${ataque}`);
    }
  }
  
  let hero = new Hero("Gandalf", 2019, "mago");
  hero.atacar(); 