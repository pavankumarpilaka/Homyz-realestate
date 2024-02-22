import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai";
import "./imageupload.css"
import { Button, Group } from "@mantine/core";
const Uploadimage = ({propertyDetails,setpropertyDetails,nextStep,prevStep}) => {
  const [imageurl,setimageurl]=useState(propertyDetails.image)
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleNext = () => {
    setpropertyDetails((prev) => ({ ...prev, image: imageurl }));
    nextStep();
    console.log(propertyDetails)
  };
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dvfwvmbsv",
        uploadPreset: "wkvautrd",
        maxFiles: 1,
      },
      (err, result) => {
        if (result.event === "success") {
          setimageurl(result.info.secure_url);
        }
      }
    );
  },[]);

    return (
     <div className="flexColCenter uploadwraapper">
        {
            !imageurl?(
                <div className="flexColCenter uploadZone"
                onClick={() => widgetRef.current?.open()}>
                    <AiOutlineCloudUpload size={50} color="grey" />
                    <span>please Upload the image..</span>
                </div>
            ):
            (
                <div className="uploadedimage"
                onClick={() => widgetRef.current?.open()}>
                    <img src={imageurl} alt=''/>
                </div>
            )
        }
        <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageurl}>
          Next
        </Button>
      </Group>
     </div>
  )
}

export default Uploadimage