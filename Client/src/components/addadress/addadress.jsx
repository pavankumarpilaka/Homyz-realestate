import React from 'react'
import usecountrie from '../../hooks/usecountry';
import { useForm } from '@mantine/form';
import { Button, Group, Select, TextInput } from '@mantine/core';
import { validateString } from "../../utils/common";
import "./addadress.css";
const Addadress = ({propertyDetails,setpropertyDetails,nextStep}) => {
    const form=useForm({
        initalValues:{
            country:propertyDetails?.country,
            city:propertyDetails?.city,
            address:propertyDetails?.address
        },
        validate:{
            country:(value)=>validateString(value),
            city:(value)=>validateString(value),
            address:(value)=>validateString(value),
        }
        
    })
    const getdata=()=>{
      console.log(propertyDetails)
    }
    const {country,city,address}=form.values;
    const {getall}=usecountrie()
    const handlesubmit=()=>{
      const {hasErrors}=form.validate()
      if(!hasErrors){
        setpropertyDetails((prev)=>({...prev,city,address,country}))
        nextStep()
      }
    }
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      handlesubmit();
      getdata();
    }}>
      <div className="flexCenter" >
         <div className="flexColStart">
          <Select
          w={"100%"}
          withAsterisk
          label="country"
          clearable
          searchable
          data={getall()}
          {
            ...form.getInputProps("country",{type:"input"})
          }
          />
          <TextInput
          w={"100%"}
          withAsterisk
          label="city"
          {
            ...form.getInputProps("city",{type:"input"})
          }
         />
         <TextInput
          w={"100%"}
          withAsterisk
          label="Address"
          {
            ...form.getInputProps("address",{type:"input"})
          }
         />
         </div>
      </div>
      <Group >
      <Button type="submit" className='buttoncss'>Next Step</Button>
      </Group>
    </form>
  )
}

export default Addadress