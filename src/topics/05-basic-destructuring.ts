export {};

interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    autor: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumen: 90,
    songDuration: 26,
    song: 'La chona',
    details: {
        autor: 'Los tucanes de Tijuana',
        year: 1995
    }
}

/*
La desestructuracion basicamente se puede aplicar en varios lugares, se puede aplicar en objetos, a la hora de hacer importaciones y exportaciones en los modulos,
se puede aplicar en los argumentos de las funciones, se puede usar en diferentes archivos, arreglos, lugares, etc.

En general consiste en que nosotros podemos tomar en este caso de ese objeto llamado audioPlayer, podemos tomar ciertar piezas especificas.
Por ejemplo, imaginemos que a mi me interesa sacar cual es el nombre de la cancion, porque despues yo la voy a poner en pantalla o equis cosa.

conmunmente se hace de la siguiente manera:
*/

//console.log('Song: ', audioPlayer.song);
//console.log('Autor: ', audioPlayer.details.autor);

/* La destructuracion es de la siguiente manera: */

const song = 'Espejeando';

const { song: songName, songDuration:duration, details} = audioPlayer;
// destails > autor
const { autor } = details; // Esta linea de codigo es cuando hacemos la destructuracion de una interface que tiene un objeto dentro de ella.


/*console.log('Song1: ', song);
console.log('Song2: ', songName);
console.log('Duration: ', duration);
console.log('Autor: ', autor);*/


// Destructuracion de arreglos

const [,vegeta,trunks = 'not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 2: ', vegeta);
console.log('Personaje 3: ', trunks);

