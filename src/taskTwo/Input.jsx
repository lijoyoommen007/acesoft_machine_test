import React, { useEffect, useRef, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from './redux/darkModeSlice'
import "./inputStyle.css"
import ToggleDarkMode from './customDarkModeHook'
function Input() {

    
    const [searchValue, setSearchValue] = useState('firstvalue')
    const [isFirstRender, setIsFirstRender] = useState(true)
    const handleinputChange = (e)=>{
        setSearchValue(e.target.value)
        setIsFirstRender(false)
    }

    useEffect(()=>{

        if(isFirstRender){
            return
        }

        if(searchValue.trim() === ""){
            console.log("no api call triggered")
            return
        }
        const handler = setTimeout(()=>{
            fetchApi(searchValue)
        },1000)

        return ()=>{
            clearTimeout(handler)
        }
    },[searchValue])

    function fetchApi(text){
        setTimeout(()=>{
            console.log("Api is calling with search value" + text)
        },1000)
    }


    const {isDarkMode,ToggleDark} = ToggleDarkMode()
    
    return (
        <>
            <button onClick={()=>ToggleDark()}>{isDarkMode?'light-mode':'dark-mode'}</button>
            <div className={isDarkMode?'dark-mode':'light-mode'}>
            <div className={isDarkMode?"text-white":"text-black"}>taskTwo</div>
            <input
                type="text"
                name="search"
                placeholder='search'
                defaultValue={searchValue ? searchValue : ""}
                onChange={handleinputChange} />
                </div>
        </>
    )
}

export default Input