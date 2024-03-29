import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
}
from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import "./value.css"
import data from "../../utils/accordion"
const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src='./value.png' alt=''/>
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To you</span>
                <span className='SecondaryText'>We always realdy to help by providing the best services for you.<br/>
                    We believe a good place to live can your life better.</span>
                <Accordion allowMultipleExpanded={false} preExpanded={[0]} className='accordion'>
                    {
                        data.map((item,i)=>{
                            return(
                                <AccordionItem className='accordionitem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                       <AccordionItemButton className='flexCenter accordionbutton'>
                                         <div className="flexCenter icon">
                                            {item.icon}
                                         </div>
                                         <span className='primaryTexts'>{item.heading}</span>
                                         <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                         </div>
                                       </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                     <p className="secondaryText">
                                        {item.detail}
                                     </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            
            
            </div>
        </div>
    </section>
  )
}

export default Value