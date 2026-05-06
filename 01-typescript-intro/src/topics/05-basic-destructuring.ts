
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}


const song = 'New Song';

const { song: currentSong, songDuration: duration, details } = audioPlayer;
const { author } = details;

// console.log({ song });
// console.log('Song: ', currentSong);
// console.log('Duration: ', duration);
// console.log('Author: ', audioPlayer.details.author);
// console.log('Author: ', author);

// Desestructuración en arreglos, obtener Puma
const brands = ['Adidas', 'Nike', 'Puma', 'Reebok'];
console.log('Puma con indice: ', brands[2]);

const [,,puma,]:string[] = ['Adidas', 'Nike', 'Puma', 'Reebok'];
console.log('Puma con desestructuración: ', puma);

const [,,pumaBrand = 'Not found']:string[] = ['Mercedez', 'Fiat', ];
console.log('Puma con valor por default: ', pumaBrand);


// const [ , , trunks = 'Not found' ]: string[] = ['Goku','Vegeta'];


// console.error('Personaje 3:', trunks );
