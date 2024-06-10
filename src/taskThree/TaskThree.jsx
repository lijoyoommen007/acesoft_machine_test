import React from 'react'
import useFetch from './useFetch'
import Table from './Table'

function TaskThree() {
    const apiUrl = "https://jsonplaceholder.typicode.com/postssdfasdf"

    const {loading,error,data,onRefresh} = useFetch(apiUrl)

    if(loading){
       return <p>Loading ...</p>
    }

    if(error){
        return <p>Error : {error.message} </p>
    }
  return (
    <div>
        <button onClick={onRefresh}>Refresh</button>
        <Table data={data}/>
    </div>
  )
}

export default TaskThree