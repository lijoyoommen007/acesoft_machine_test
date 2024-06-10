const { useState, useEffect } = require("react");

function useFetch(apiUrl){
    const[loading,setLoading] = useState(true)
    const[error,setError] = useState(null)
    const [data,setData] = useState(null)
    const fetchData = async () => {
        setLoading(true)
        setError(null)
        try{
            await delay(2000)
            const response = await fetch(apiUrl)
            if(!response){
                throw new Error("something went wrong")
            }

            const result = await response.json()
            setData(result)
        }catch(error){
            setError(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    },[apiUrl])

    const onRefresh = () =>{
        fetchData();
    }

    return{loading,error,data,onRefresh}
}

function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms))
}

export default useFetch