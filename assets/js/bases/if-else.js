
let a = 5;

if ( a >= 10) { /* undefined, null, una asignación */
  console.log('A es mayor a 10');
} else {
  console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes...

console.log({ dia });

if ( dia === 0 ) {
  console.log('Domingo');
} else if ( dia === 1 ) {
  console.log('Lunes');
  
  // if ( dia === 1 ) {
  //     console.log('Lunes');
  // } else {
  //     console.log('No es lunes ni Domingo');
  // }
} else if ( dia === 2 ) {
  console.log('Martes');
} else {
  console.log('No es Lunes, Martes o Domingo...');
}

// Sin usar If Else, o Switch, únicamente objetos
dia = 6; // 0: Domingo, 1: Lunes...

const diasLetras = {
  0:'Domingo', 
  1:'Lunes', 
  2:'Martes', 
  3:'Miércoles', 
  4:'Jueves', 
  5:'Viernes', 
  6:'Sábado', 
} 

const diasLetras2 = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado',];

// Día de la semana
console.log( diasLetras2[dia] );