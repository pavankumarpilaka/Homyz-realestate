import { Container, Modal, Stepper } from '@mantine/core'
import React, { useState } from 'react'
import '@mantine/core/styles.css'; // Adjust the path if necessary


import "./addpropert.css"
import Addadress from '../addadress/addadress';
import { useAuth0 } from '@auth0/auth0-react';
import Uploadimage from '../uploadimage/uploadimage';
import Basicdetails from '../basicdetails/basicdetails';
import BasicDetails from '../basicdetails/basicdetails';
import Facilities from '../facilities/facilities';


const Addpropert = ({opened,setOpened}) => {
    const [active,setActive]=useState(0);
    const {user}=useAuth0()
    const [propertyDetails,setPropertyDetails]=useState({
        title:"",
        description:"",
        price:0,
        country:"",
        city:"",
        address:"",
        image:"",
        facilities:{
            bedrooms:0,
            parkings:0,
            bathrooms:0
        },
        useremail:"pavankumarpilaka96@gmail.com",
    });
    const nextStep = () => {
      setActive((current) => (current < 4 ? current + 1 : current));
    };
  
    const prevStep = () => {
      setActive((current) => (current > 0 ? current - 1 : current));
    };
  return (
    <Modal
    opened={opened}
    onClose={()=>setOpened(false)}
    closeOnClickOutside
    size={"90rem"}><Container h={"40rem"} w={"40rem"}>
            <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="Location" description="Adress">
          <Addadress
           nextStep={nextStep}
           propertyDetails={propertyDetails}
           setpropertyDetails={setPropertyDetails}
           />
        </Stepper.Step>
        <Stepper.Step label="Images" description="Uploadimage">
          <Uploadimage
          prevStep={prevStep}
          nextStep={nextStep}
          propertyDetails={propertyDetails}
          setpropertyDetails={setPropertyDetails}/>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          <BasicDetails
          prevStep={prevStep}
          nextStep={nextStep}
          propertyDetails={propertyDetails}
          setPropertyDetails={setPropertyDetails}/>
        </Stepper.Step>
        <Stepper.Step>
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>
      </Container>
    </Modal>
  )
}

export default Addpropert