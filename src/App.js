import React, { useState, useEffect } from "react";
import axios from "axios";
const key = "959b70306a379bed9c3bc3562e702009";

// 1 : display the restaurants that were searched for
// static
// use the results
// 2 : hooked the search query to be dynamic

export default function App() {
  const searchForCity = () => {
    const URL = "https://developers.zomato.com/api/v2.1/locations?query=Miami";
    axios
      .get(URL, {
        headers: {
          "user-key": key
        }
      })
      .then(resp => {
        console.log(resp);
        console.log(resp.data.location_suggestions[0].entity_id);
        const URL =
          "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city&q=pizza";
        axios
          .get(URL, {
            headers: {
              "user-key": key
            }
          })
          .then(resp => {
            console.log("restaurant search result ", resp.data.restaurants);
          });
      });
  };

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
          />
          <button
            type="submit"
            className="city-button"
            onClick={() => searchForCity()}
          />
        </section>
      </section>
      <section className="eatGuide">
        <h2>Where Do You Want To Eat?</h2>
        <ul className="box">
          <li>Hi Silvana</li>
          <li />
          <li />
        </ul>
      </section>
    </>
  );
}
