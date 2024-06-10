import {  useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from './redux/darkModeSlice'


export default function ToggleDarkMode(){
    
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state)=>state.darkMode.isDarkMode)

    function ToggleDark(){
        dispatch(toggleDarkMode())
    }

    return{isDarkMode,ToggleDark}

} 