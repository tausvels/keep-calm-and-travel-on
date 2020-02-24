import React, { useState } from 'react' 

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

const classes = useStyles();

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
              <CardContent>
                
                <ItineraryList />
                                
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