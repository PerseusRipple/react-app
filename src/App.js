import React, { useState, useEffect } from "react";
import axios from "axios";
const key = "959b70306a379bed9c3bc3562e702009";

// 1 : display the restaurants that were searched for
// static
// use the results
// 2 : hooked the search query to be dynamic

export default function App() {
  const [city, setCity] = useState("");
  const [restaurants, getRestaurantList] = useState([]);
  const [cityObject, setCityObject] = useState(0);
  const [citySearched, findCities] = useState("");

  const getSiteRestaurant = () => {
    findCities(city);
  };

  useEffect(() => {
    const URL1 = `https://developers.zomato.com/api/v2.1/locations?query=${city}`;
    axios
      .get(URL1, {
        headers: {
          "user-key": key
        }
      })
      .then(resp => {
        console.log(resp.data.location_suggestions[0].entity_id);
        setCityObject(
          resp.data.location_suggestions[0].entity_id
            ? resp.data.location_suggestions[0].entity_id
            : 0
        );
      });
    // console.log(cityObject.entity_id);
    const URL = `https://developers.zomato.com/api/v2.1/search?entity_id=${cityObject}&entity_type=city&q=pizza`;
    axios
      .get(URL, {
        headers: {
          "user-key": key
        }
      })
      .then(resp => {
        console.log(resp.data.restaurants);
        getRestaurantList(resp.data.restaurants);
      });
  }, [citySearched]);

  return (
    <>
      <section>
        <header>
          <h1>Let's Nosh</h1>
        </header>
        <section className="searchBar">
          <input
            type="text"
            className="search-term"
            placeholder="Enter City Name and/or Zip Code"
            value={city}
            onChange={event => setCity(event.target.value)}
          />
          <button
            type="submit"
            className="city-button"
            onClick={() => getSiteRestaurant()}
          />
        </section>
      </section>
      <section className="eatGuide">
        <h2>Where Do You Want To Eat?</h2>
        <section className="list">
          <ul className="box">
            {restaurants.map((restaurant, i) => {
              return (
                <>
                  <li key={i}>{restaurant.restaurant.name}</li>
                </>
              );
            })}
          </ul>
        </section>
      </section>
      <footer>Made with 💛from SDG </footer>
    </>
  );
}
