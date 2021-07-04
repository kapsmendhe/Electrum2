import React from "react";
import Card from "./Card";
import Colleges from "./Colleges";

function createCard(college) {
  return (
    <Card
      college_name={college.college_name}
      promoted={college.promoted}
      discount={college.discount}
      original_fees={college.original_fees}
      discounted_fees={college.discounted_fees}
      fees_cycle={college.fees_cycle}
      img={college.image}
      ranking={college.ranking}
      tags={college.tags[0]}
      tags_km={college.tags[1]}
      free_cancellation={college.amenties[0]}
      free_wifi={college.amenties[1]}
      rating={college.rating}
      rating_remarks={college.rating_remarks}
      famous_nearest_places={college.famous_nearest_places}
      nearest_place={college.nearest_place[0]}
      nearest_place_KM={college.nearest_place[1]}
      offertext={college.offertext}
    />
  );
}

function App() {
  return (
    <div>
      <h1>College Name and Details</h1>
      {Colleges.map(createCard)}
    </div>
  );
}

export default App;
