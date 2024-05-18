'use client'
//import { setCurrent } from "../api/current/route"
import { useContext, useEffect } from "react"
import { DashboardContext } from "@/context/dashboardContext"


const DataPicker = ({establecimientos,years, user}) => {
    /* await setCurrent() */
    const {yearSelected, setYearSelected, establecimientoSelected, setEstablecimientoSelected} = useContext(DashboardContext)
 
   useEffect(()=>{
    if(user.rol==="Administrador"){
        //console.log("Admin")
        setEstablecimientoSelected(2)
     } //Predio central
   },[])
    //console.log(year, establecimiento)
    return (
        <>
            <select onChange={(e)=>setEstablecimientoSelected(parseInt(e.target.value))}  id="establecimientos" name="establecimientos" className=" text-slate-800 rounded-md p-2">
                {
                    establecimientos.map(est => (
                        <option key={est.id} value={est.id} defaultValue={establecimientoSelected}>{est.nombre}</option>
                    ))
                }
            </select>
            <select onChange={(e)=>setYearSelected(parseInt(e.target.value))} id="year" name="year" className=" text-slate-800 rounded-md p-2">
            {
                    years.map(year => (
                        <option key={year.year} value={year.year} defaultValue={yearSelected}>{year.year}</option>
                    ))
                }
            </select>
        </>
    )
}

export default DataPicker