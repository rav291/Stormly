import React, { useState } from "react";
import { Container } from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import HomeScreen from "./HomeScreen";

const Main = () => {
  const [address, setAddress] = useState("");

  const [city, setCity] = useState();

  const handleSelect = async (value) => {
    // eslint-disable-next-line
    const results = await geocodeByAddress(value);
    setAddress(value);
    submitHandler(value);
  };

  const submitHandler = (value) => {
    setCity(value.split(",")[0].toString());
    console.log(value);
  };

  return (
    <>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <Container className="mb-5 mt-4 text-center">
            <strong>
              <h3>Get Instant Weather Report</h3>
            </strong>
            <div className="form-group">
              <label className="form-label mt-4">
                Enter a city, state or country and click on any of the dropdown
                values.
              </label>

              <input
                {...getInputProps({ placeholder: "Type address" })}
                type="text"
                className="form-control"
                placeholder="Start Typing..."
                style={{ width: "600px", marginLeft: "21rem" }}
              />
              <p className="mt-4">
                Note: If you search for a country or state, weather report of a
                prominent city is shown or the capital city of that country
              </p>
            </div>
            <div>
              {loading ? <div>...loading</div> : null}

              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#f1f1f" : "#fff",
                };

                return (
                  <div
                    {...getSuggestionItemProps(suggestion, { style })}
                    className="mt-1"
                    style={{
                      width: "500px",
                      marginLeft: "25rem",
                      background: "#f0f0f0",
                    }}
                  >
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </Container>
        )}
      </PlacesAutocomplete>
      {city && <HomeScreen city={city} />}
    </>
  );
};

export default Main;
