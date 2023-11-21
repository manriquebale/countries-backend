import { Document, Schema, model } from 'mongoose';

interface Country extends Document {
  name: string;
  population: string;
  area: string;
}

const countrySchema = new Schema<Country>({
  name: String,
  population: String,
  area: String,
});

const CountryModel = model<Country>('Country', countrySchema);

export default CountryModel;