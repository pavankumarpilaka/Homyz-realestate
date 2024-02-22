export const sliderSettings={
    slidesPerView:1,
    spaceBetween:50,
    breakpoints:{
        480:{
            slidesPerView:2
        },
        600:{
            slidesPerView:3
        },
        750:{
            slidesPerView:4
        },
        110:{
            slidesPerView:5
        }
    }
}
export  const favorites=(id,favourites)=>{
    if(favourites.includes(id)){
        return favourites.filter((resid)=>resid!==id)
    }else{
        return [...favourites,id]
    }
}

export const checkfavorite=(id,favourites)=>{
   return favourites.includes(id)?"red":"white";
}

export const validateString = (value) => {
    return value?.length < 3 || value === null
      ? "Must have atleast 3 characters"
      : null;
  };