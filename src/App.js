import "./styles.css";
import data from "./data/countries.json";
import Country from "./components/Country";
import { useState } from "react";

/**
 * Common array methods
 * Array.sort();
 * Array.map();
 * Array.filter();
 
 * Array.reduce();
 * Array.forEach();
 */

function sortAlpha() {
  const countries = data.countries;
  return countries.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function sortAsc() {
  const countries = data.countries;
  return countries.sort(function (a, b) {
    return a.population - b.population;
  });
}

function sortDes() {
  const countries = data.countries;
  return countries.sort(function (a, b) {
    return b.population - a.population;
  });
}

function random(n) {
  return Math.floor(Math.random() * 10 + 1);
}
function sortShuffle() {
  const countries = data.countries;
  return countries.sort(function (a, b) {
    return random(a.index) - random(b.index);
  });
}

function filter(list, option) {
  return list.filter(function (country) {
    if (option === "all") {
      return data.countries;
    } else if (isNaN(option)) {
      return country.continent.toLowerCase() === option;
    } else if (option === "5") {
      return country.population >= 1000000000;
    } else if (option === "4") {
      return country.population >= 500000000;
    } else if (option === "3") {
      return country.population >= 200000000;
    } else if (option === "2") {
      return country.population >= 100000000;
    } else {
      return country.population < 100000000;
    }
  });
}

export default function App() {
  const [filterOption, setFilterOption] = useState("all");
  const [sortOption, setSortOption] = useState("des");

  function handleSort(e) {
    setSortOption(e.target.value);
  }
  function handleFilter(e) {
    setFilterOption(e.target.value);
  }

  function sort(option) {
    if (option === "alpha") {
      return sortAlpha();
    } else if (option === "asc") {
      return sortAsc();
    } else if (option === "des") {
      return sortDes();
    } else {
      return sortShuffle();
    }
  }

  const sortedCountries = sort(sortOption);
  const filteredCountries = filter(sortedCountries, filterOption);

  return (
    <div className="App">
      <h1>World's Population</h1>
      <div className="filters">
        <div>
          <label htmlFor="filter">Filter:</label>
          <select name="filter" value={filterOption} onChange={handleFilter}>
            <optgroup label="by Continent">
              <option value="all">All</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="north america">North America</option>
              <option value="south america">South America</option>
            </optgroup>
            <optgroup label="by Population">
              <option value="1">less than 100M</option>
              <option value="2">100M or more</option>
              <option value="3">200M or more</option>
              <option value="4">500M or more</option>
              <option value="5">1B or more</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label htmlFor="sort">Sort By:</label>
          <select name="sort" value={sortOption} onChange={handleSort}>
            <option value="des">Population Des</option>
            <option value="asc">Population Asc</option>
            <option value="alpha">Alphabetically</option>
            <option value="shuffle">Shuffle</option>
          </select>
        </div>
      </div>

      <div className="countries">
        {filteredCountries.map((country) => (
          <Country key={country.id} details={country} />
        ))}
      </div>
    </div>
  );
}
