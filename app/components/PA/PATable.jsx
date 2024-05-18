'use client'
import { useContext, useEffect, useState, useTransition } from "react"
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { DashboardContext } from "@/context/dashboardContext"
import PAItem from "./PAItem"
import { getPlanAnualData } from "@/app/dashboard/planes/anual/pagp/data"
import PAModal from "./PAModal"
import { useRouter } from "next/navigation"

const PATable = ({ planAnualId, update }) => {
    const { yearSelected, establecimientoSelected } = useContext(DashboardContext)
    const [openModal, setOpenModal] = useState(false);
    const [isPending, startTransition] = useTransition()
    const [PA, setPA] = useState()
    const [changed, setChanged] = useState(false)
    
    /* useEffect(() => {
        console.log("PAGP Table", yearSelected, establecimientoSelected)
    }, [yearSelected, establecimientoSelected])  */
    const router = useRouter()

    useEffect(() => {
        startTransition(async () => {
            const PA = await getPlanAnualData(establecimientoSelected, 1,yearSelected)
            console.log(PA)
            setPA(PA)
        })
    }, [yearSelected, establecimientoSelected,openModal, changed])
    
    return (
        <>
        <PlusCircleIcon onClick={()=>setOpenModal(true)} className="size-12 text-green-300 m-4 cursor-pointer" />
        <p className=" text-xs text-slate-400 pb-1">A: Abierto | C: Cumplido | MC: Mayormente cumplido | PC: Parcialmente cumplido | IN: Incumplido</p>
        <PAModal 
            openModal={openModal} 
            setOpenModal={setOpenModal} 
            planAnualId={planAnualId} 
            establecimientoSelectedId={establecimientoSelected} 
            yearSelected={yearSelected}
        />
        <table className=" table bg-slate-50 border-collapse border border-slate-400 table-fixed" >
            <thead>
                <tr>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs w-1/4">Actividad planificada</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">En</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Feb</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Mar</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Abr</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">May</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Jun</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Jul</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Agto</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Sept</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Oct</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Nov</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs">Dic</th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs w-8"></th>
                    <th className="border border-slate-300 bg-slate-100 py-4 p-1 text-center text-xs w-8"></th>
                </tr>
            </thead>
            <tbody>
                {
                    PA?.map(pa => {
                        return(
                        <PAItem
                            key={pa.id}
                            actividad={pa.actividad}
                            meses={[pa.enero,pa.febrero,pa.marzo,pa.abril,pa.mayo,pa.junio,pa.julio,pa.agosto,pa.septiembre,pa.octubre,pa.noviembre,pa.diciembre]}
                            cumplimiento={pa.cumplimiento}
                            actividadId={pa.id}
                            changed={changed}
                            setChanged={setChanged}
                        />
                    )})
                }

            </tbody>
        </table>
        </>
    )
}

export default PATable