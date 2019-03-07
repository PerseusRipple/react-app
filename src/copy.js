//   getSiteRestaurant=()=>{
// setCity
//   }

// const searchForCity = () => {
//   const URL =
//     `https://developers.zomato.com/api/v2.1/locations?query=${city}`
//   axios
//     .get(URL, {
//       headers: {
//         "user-key": key
//       }
//       console.log(resp)
//       .then (resp => { getRestaurantList(resp.data)})
//     })

// .then(resp => {
//   console.log(resp);
//   console.log(resp.data.location_suggestions[0].entity_id);
//   const URL =
//     "https://developers.zomato.com/api/v2.1/search?entity_id=291&entity_type=city&q=pizza";
//   axios
//     .get(URL, {
//       headers: {
//         "user-key": key
//       }
//     })
//     .then(resp => {
//       console.log("restaurant search result ", resp.data.restaurants);
//     });
// });

// {
//   "location_suggestions": [
//       {
//           "entity_type": "city",
//           "entity_id": 291,
//           "title": "Miami, Florida",
//           "latitude": 25.774111,
//           "longitude": -80.193565,
//           "city_id": 291,
//           "city_name": "Miami",
//           "country_id": 216,
//           "country_name": "United States"
//       }
//   ],
//   "status": "success",
//   "has_more": 0,
//   "has_total": 0
// }
