import axios from 'axios';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getallproperties = async () => {
  try {
    const response = await api.get("/residency/allres", {
      timeout: 10 * 1000,
    });

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    if (axios.isCancel(error)) {
      // Handle timeout error
      toast.error("Request timed out. Please try again.");
    } else {
      // Handle other errors
      toast.error("Something went wrong");
    }

    throw error;
  }
};
export const getproperty=async(id)=>{
  try{
    const response=await api.get(`/residency/${id}`,{
      timeout:10*1000,
    });
    if(response.status===400 || response.status===500){
      throw response.data;
    }
    return response.data;
  }
  catch(error){
     toast.error("something went wrong..");
     throw error;
  }
  
}

export const createuser=async(email,token)=>{
  try{
    await api.post(`/user/register`,{email});

  }
  catch(error){
    toast.error("something went wrong..try again later..")
    throw error;
  }
}

export const bookvisit=async(date,propertyid,email)=>{
  try{
   await api.post(
    `/user/bookvisit/${propertyid}`,
    {
      email,
      id:propertyid,
      date:dayjs(date).format('DD/MM/YYYY')
    }
    

   )
  }catch(error){
    toast.error("something gone wrong in booking...");
    throw error;
  }
}

export const removebooking=async(id,email)=>{
  try{
    await api.post(
      `/user/cancelbooking/${id}`,{
        email,
      }
    )

  }catch{
    toast.error("something went wrong while cancelling the booking...")
    throw error
  }
}

export const tofav=async(id,email)=>{
  try{
    await api.post(
      `/user/favorites/${id}`,{
        email,
      }
    );

  }catch{
    toast.error("something wrong while adding to favorites...")
  }
}

export const createResidency = async (data) => {
  console.log(data)
  try{
    const res = await api.post(
      `/residency/create`,
      {
        data
      }
    )
  }catch(error)
  {
    throw error
  }
}
