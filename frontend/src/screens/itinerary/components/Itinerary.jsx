import React, { useState, useEffect } from 'react' 

// @material-ui/core/components
import { makeStyles } from "@material-ui/core/styles"

// core components
import Header from '../../../components/Header/Header'
import GridContainer from '../../../components/Grid/GridContainer'
import GridItem from '../../../components/Grid/GridItem'
import Card from '../../../components/Card/Card'
import CardHeader from '../../../components/Card/CardHeader'
import CardBody from '../../../components/Card/CardBody'
import CardContent from '@material-ui/core/CardContent';
import CardFooter from '../../../components/Card/CardFooter'
import ItineraryList from './ItineraryList';

import styles from "../../../assets/jss/material-kit-react/views/itineraryPage"

import image from "../../../assets/img/temple-trees.jpg"
import './itinerary.css'

// helpers
import getItinerary from '../helpers/getItinerary'

const useStyles = makeStyles(styles);



function Itinerary() {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700)


  let itineraryId='7e15884f-01f9-4e5c-ad1d-724c11c62c37'
  const [itineraries, setItineraries] = useState({});

  console.log("itineraries: ", itineraries)

  useEffect(()=> {
    getItinerary(itineraryId)
    .then(res=> setItineraries(res))
    .catch(err=> console.error(err.data))
  },[]);

const classes = useStyles();


//  console.log(itineraries)

// const [background, setBackground ] = useState([image_url]);

  return (
    <div>
      <Header
      color="transparent"
      brand="TRIPPER"
      fixed
      />
      <div 
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center"
        }}
      >
        <div className={classes.container} style={{width: "800px"}}>
        <GridContainer>
        <GridItem>
            <Card className={classes[cardAnimaton]}>
            <CardHeader color="info" className={classes.cardHeader}>
              <h4>Bayyyy areaaa</h4>
            </CardHeader>
            <CardBody>
              <CardContent 
              //  firstName={value.first_name}
               // lastName={value.last_name}
               // city={value.city}
               // country={value.country}
               // scheduleName={value.schedule_name}
               // activityId={value.activity_id}
               // name={value.name}
               // priceCent={value.price_cents}
               // timeOperation={value.time_operation}
               // totalCost={value.total_cost}
              >
                {Object.entries(itineraries).map(([columnId,column]) => {
                  return <ItineraryList column={column} itineraries={itineraries} />
                }
                )}
                                
              </CardContent>
                  
              </CardBody>
                <CardFooter className={classes.cardFooter}>
                <h6>Enjoy your trip!</h6>
                
                </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
          

        </div>
      </div>
    
    </div>
  )
}

export default Itinerary 