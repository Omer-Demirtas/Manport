import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Asd from "./asd";
import Application from "./Application";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

let a =0;
let plants = [];

const getCountryName = (id) => 
{
  return (plants.find(plant => plant.id === id)).countryName;
}

const getAppStatus = (errorType) => 
  {
    switch (errorType) {
      case "NONE":
        return {bgColor: "white", isExpanded: false};
      case "LOW":
        return {bgColor: "green", isExpanded: false};
      case "MEDIUM":
        return {bgColor: "yellow", isExpanded: false};
      case "HIGH":
        return {bgColor: "red", isExpanded: true};
      default:
        return {bgColor: "white", isExpanded: false};
    }
  }

export default function ApplicationList() {
  const state = useSelector((state) => {
    return { ...state.AppReducer };
  });

  console.log(`state`, state)
  plants = state.plants;
  
  const classes = useStyles();

  
  return (
    <>
      <h1>{++a}</h1>

      <div style={{minHeight: "100rem"}} className={classes.root}>
        {state.apps.map((app) => (
          <Application 
          key={app.id}
          getCountryName={getCountryName}
          app={app}/>
          /*<Asd 
          key={app.id}
          status={getAppStatus(app.errorType)}
          classes={classes}
          app={app}
          />*/
        ))}
      </div>
    </>
  );
}

/*

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="row  justify-content-around">

              <div style={{marginRight: "5rem", width: "2rem", height: "2rem", backgroundColor: "black"}}>
                
              </div>
              <div style={{width: "2rem", height: "2rem", backgroundColor: "black"}}>
                
                </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
*/
