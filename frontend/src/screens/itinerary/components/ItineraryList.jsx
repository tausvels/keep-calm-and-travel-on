import React from 'react';
import ItineraryListItem from './ItineraryListItem'


// const dayColumns = [
//   {
//     "trip_name" : "Bay areaaaaaa",
//     "first_name" : "Porson",
//     "last_name" : "Lee",
//     "city": "San Francisco",
//     "country": "USA",
//     "schedule_name": "Day 1",
//     "activity_id": "3",
//     "name": "Sunset Tour",
//     "price_cents": "$60",
//     "time_operation": "5am-5pm",
//     "image_url": "https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg",
//     "total_cost": "180",
//   },
// ]


const ItineraryList = (props) => {

  
    return (
      <div>
        {props.column.name}

        {props.column.items.map((activity)=>{
          return(
            <ItineraryListItem
              name={activity.name}
              price={activity.price_cents}
              time={activity.time_operations}
              />
          )
        })}
          
      </div>
    )
  }

export default ItineraryList;