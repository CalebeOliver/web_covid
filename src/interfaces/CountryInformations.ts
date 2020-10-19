interface CountryInformations {
  id: string;
  _id: number;
  name: string;
  initials: string;
  flag: string ;
  covidInformation: {
    id: string;
    cases: number;
    deaths: number;
    recovered: number;
    active: number;
    country_id: number;
  };
}

export default CountryInformations;
