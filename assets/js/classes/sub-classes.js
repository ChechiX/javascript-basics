class Persona {
  // Propiedades y métodos estáticos
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log( this.nombre ); // undefined
    console.log('Hola a todos, soy un método estático');
  }

  // Propiedades de la clase
  nombre = '';
  codigo = '';
  frase  = '';
  comida = '';

  // Constructor
  constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

    this.nombre = nombre;
    this.codigo = codigo;
    this.frase  = frase;

    Persona._conteo++;
  }
  
  // Sets y Gets
  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
  }

  // Métodos
  quienSoy() {
    console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${ this.codigo } dice: ${ this.frase }`);
  }

  // Propiedades privadas
}

class Heroe extends Persona {

  clan = 'sin clan';

  constructor(nombre, codigo, frase) {
    super(nombre, codigo, frase);

    this.clan = 'Los Avengers';
  }

  quienSoy() {
    console.log(`Soy ${ this.nombre }, ${ this.clan }`);
    super.quienSoy();
  }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();
