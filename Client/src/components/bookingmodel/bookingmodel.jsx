import React, { useContext, useState } from 'react';
import { Modal,Button } from '@mantine/core';
import {DatePicker} from '@mantine/dates'
import {useMutation} from "react-query"
import './bookingmodel.css' // Import your CSS file here
import { bookvisit } from '../../utils/api';
import { toast } from 'react-toastify';
import UserDetailsContext from '../../context/userdetailscontext';
import dayjs from 'dayjs';
import '@mantine/core/styles.css'; // Adjust the path if necessary

const BookingModel = ({ opened, setOpened,propertyid,email }) => {
  console.log("Modal is rendering..")
  const {userDetails:{},setUserDetails}=useContext(UserDetailsContext)
  const handlebookingsucess=()=>{
    toast.success("you have sucessfully booked your visit",{
      position:"bottom-right"
    })
    setUserDetails((prev) => {
      const updatedBookings = [
        ...prev.bookings,
        {
          id: propertyid,
          date: dayjs(value).format('DD/MM/YYYY')
        }
      ];
    
      console.log("Updated bookings:", updatedBookings); // Log updated bookings
    
      return {
        ...prev,
        bookings: updatedBookings
      };
    });
    
  }
  const [value,setvalue]=useState(null);
  const {mutate,isLoading}=useMutation({
    mutationFn:()=>bookvisit(value,propertyid,email),
    onSuccess:()=>handlebookingsucess(),
    onSettled:()=>setOpened(false)
  });
  return (
    <>
    {opened && (
      <Modal opened={opened} onClose={() => setOpened(false)} title="Select your date of visit" centered>
        <div>
          <DatePicker value={value} onChange={setvalue} minDate={new Date} />
          <Button disabled={!value || isLoading} onClick={()=>mutate()}>
            Book visit
          </Button>
          
        </div>
      </Modal>
      
      
    )}
    </>
  );
};

export default BookingModel;
