
import mongoose from 'mongoose';
import countryModel from './countries.model'; 



const dataToLoad = [
  { name: 'India', population: '1409902000' },
  { name: 'China', population: '1403426000' },
  { name: 'Estados Unidos', population: '331800000' },
  { name: 'Indonesia', population: '271629000' },
  { name: 'Pakistán', population: '224654000' },
  { name: 'Nigeria', population: '219743000' },
  { name: 'Brasil', population: '211420000' },
  { name: 'Bangladés', population: '181781000' },
  { name: 'Rusia', population: '146712000' },
  { name: 'México', population: '127792000' },
  { name: 'Japón', population: '126045000' },
  { name: 'Filipinas', population: '108772000' },
  { name: 'Egipto', population: '101000000' },
  { name: 'Etiopía', population: '100882000' },
  { name: 'Vietnam', population: '97591000' },
  { name: 'República del Congo', population: '89561000' },
  { name: 'Irán', population: '83914000' },
  { name: 'Turquía', population: '83752000' },
  { name: 'Alemania', population: '83421000' },
  { name: 'Tailandia', population: '68232000' },
];

async function loadData() {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/countries');
    await countryModel.deleteMany();
    await countryModel.insertMany(dataToLoad).catch((error) => {
      console.error('Error al insertar datos:', error);
    });;

    console.log('Data loaded successfully.');
  } catch (error) {
    console.error('Error when loading data:', error);
  } finally {
    mongoose.disconnect();
  }
}

loadData();