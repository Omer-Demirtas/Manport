import React, {useState, useEffect} from 'react'
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


export default function Asd(props) {

    const {status, classes, app} = props;

    //const width = (app.prods.length * 12) + 8; 

    const [expanded, setExpanded] = useState(status.isExpanded)

    useEffect(() => {
      setExpanded(props.status.isExpanded)
    }, [props.status.isExpanded])

    const handleChange = () => 
    {
        setExpanded(!expanded);
    };

    return (
        <Accordion
        style={{backgroundColor: status.bgColor}}
        expanded={expanded}
        onChange={ () => handleChange()}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            <h3x>
                {app.name}
            </h3x>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="container">
            <div style={{minHeight: "8rem"}} className="d-flex justify-content-around">
              {
                app.prods.map(prod => 
                  <div className="col bg-dark text-white" style={{minWidth: "12rem", marginRight: "2rem"}}> 
                    <h4>{prod.name}</h4>
                    <div className="row">
                      {
                        prod.jobs.map(job => (
                          <div className="col">
                            {job.name}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                )
              }    
            </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    )
}
