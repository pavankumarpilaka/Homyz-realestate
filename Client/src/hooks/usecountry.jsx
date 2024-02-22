import countries from "world-countries"

const formattedcountries=countries.map((country)=>({
    value:country.name.common,
    label:`${country.name.common} ${country.flag}`,
    latlng:country.latlng,
    region:country.region,
}))

const usecountrie=()=>{
    const getall=()=>formattedcountries;
    return {getall}
}

export default usecountrie;