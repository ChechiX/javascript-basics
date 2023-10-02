

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

const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman   = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');

// console.log( ironman );

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );
// Persona._conteo = 2;
console.log('Conteo estático', Persona._conteo);
console.log( Persona.conteo );
Persona.mensaje();

// No hacer
Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );