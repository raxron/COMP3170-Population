function Country(props) {
  const info = props.details;
  return (
    <div className="country" key={info.id}>
      <div className="country-image">
        <img src={info.image} alt="" />
      </div>
      <div className="country-details">
        <h2>{info.name}</h2>
        <p>
          <span>Capital:</span>
          {info.capital}
        </p>
        <p>
          <span>Population:</span>
          {info.population.toLocaleString()}
        </p>
        <p>
          <span>Continent:</span>
          {info.continent}
        </p>
      </div>
    </div>
  );
}
export default Country;
