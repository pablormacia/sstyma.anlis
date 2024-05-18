'use client'
import { createContext, useState } from "react";

export const DashboardContext = createContext()

export function DashboardProvider({children}){
    let [yearSelected, setYearSelected] = useState(2025)
    let [establecimientoSelected, setEstablecimientoSelected] = useState()
    return(
        <DashboardContext.Provider value={({yearSelected, setYearSelected, establecimientoSelected,setEstablecimientoSelected})}>
            {children}
        </DashboardContext.Provider>
    )
}

