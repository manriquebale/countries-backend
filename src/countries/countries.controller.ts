import { NextFunction, Request, Response } from "express";
import Country from "./countries.model";

export const index = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const searchTerm: string = req.query.searchTerm as string;
    if (typeof searchTerm !== "string" || searchTerm.length < 3) {
      return res.status(204).end();
    }

    const countries = await Country.find();
    const filteredCountries = countries
      .filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5);
    const totalPopulation = countries.reduce(
      (accumulator, country) => accumulator + parseInt(country.population, 10),
      0
    );
    const resultWithPercentage = filteredCountries.map((country) => {
      const population = parseInt(country.population, 10);
      const percentage = (population / totalPopulation) * 100;

      return {
        name: country.name,
        population: population,
        percentage: percentage.toFixed(2),
      };
    });

    return res.status(200).json(resultWithPercentage);
  } catch (error) {
      return next(error);
  }
};

