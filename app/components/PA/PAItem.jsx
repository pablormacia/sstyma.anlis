'use client'
import { useEffect, useState } from "react"
import PAActionButtons from "./PAActionButtons"


const PAItem = ({actividad,meses,cumplimiento,actividadId,changed,setChanged}) => {
    //console.log("meses", meses)
    const [color, setColor] = useState()
    useEffect(()=>{
        if(cumplimiento==="C"){
            setColor("bg-green-500")
        }else if(cumplimiento==="IN"){
            setColor("bg-red-500")
        }else if(cumplimiento==="PC"){
            setColor("bg-amber-500")
        }else if(cumplimiento==="MC"){
            setColor("bg-lime-500")
        }else{
            setColor("bg-slate-400")
        }
    },[cumplimiento])
    
    return (
        <tr>
            <td className="border border-slate-300 p-1 text-md">{actividad}</td>
            {
                meses.map((mes,indice) => (
                    <td key={indice} className="border border-slate-300 p-0.5 bg "><div className="flex align-center justify-center">
                        {
                            mes.map((semana,indice) => {
                                if (semana) {
                                    return (<div key={indice} className={`w-4 h-4 rounded-full ${color}`}></div>)
                                } else {
                                    return (<div key={indice} className="w-4 h-4 rounded-full  border border-slate-400"></div>)
                                }
                            })
                        }
                    </div></td>
                ))
            }
            <td className={`border border-slate-300 text-white font-bold text-center p-1 ${color}`}>{cumplimiento}</td>
            <td className="border border-slate-300 text-center p-1"><PAActionButtons actividadId={actividadId} changed={changed} setChanged={setChanged} /></td>
        </tr>
    )
}

export default PAItem