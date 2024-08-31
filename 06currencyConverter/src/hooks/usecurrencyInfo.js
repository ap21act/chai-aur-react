// import { useEffect,useState } from "react";

import { useEffect,useState } from "react";

// function useCurrencyInfo(currency){

//     const [data, setData]=useState({})
//     useEffect(()=>{
//         url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/${currency}.json`
//         fetch(url)
//         .then((res)=>res.json()).
//         then((res)=>{
//             setData =res.currency
//             console.log(data)
//         })
//     },[currency])

//     return data
// }
// export default useCurrencyInfo;

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        const url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/${currency}.json`
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((res)=>setData(res[currency]))
        

    },[currency]);
    return data;
}
export default useCurrencyInfo;