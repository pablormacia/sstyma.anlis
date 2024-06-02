'use client'
import { useContext, useEffect, useState, useTransition } from "react"
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { DashboardContext } from "@/context/dashboardContext"
import PAItem from "./PAItem"
import { getPlanAnualData } from "@/app/dashboard/planes/anual/pagp/data"
import PAModal from "./PAModal"
import PieChart from "../charts/PieChart"
import BarChart from "../charts/BarChart"
import { calcularCumplimientos } from "@/app/lib/utils"

const PATable = ({ planAnualId, update }) => {
  const { yearSelected, establecimientoSelected } = useContext(DashboardContext)
  const [openModal, setOpenModal] = useState(false);
  const [isPending, startTransition] = useTransition()
  const [PA, setPA] = useState()
  const [changed, setChanged] = useState(false)
  const [cumplimiento, setCumplimiento] = useState([])

  /* useEffect(() => {
      console.log("PAGP Table", yearSelected, establecimientoSelected)
  }, [yearSelected, establecimientoSelected])  */

  useEffect(() => {
    startTransition(async () => {
      const PAData = await getPlanAnualData(establecimientoSelected, 1, yearSelected)
      //console.log("PAData:", PAData)
      const cumplimientoData = PAData.map(item=>item.cumplimiento)
      //console.log("CumplimientosData" , cumplimientoData)
      const cumplimientos =await calcularCumplimientos(cumplimientoData)
      console.log("Cumplimientos:", cumplimientos)
      setCumplimiento(cumplimientos)
      setPA(PAData)
    })
  }, [yearSelected, establecimientoSelected, openModal, changed])

  const pieData = {
    labels: ['Cumplido', 'Mayormente cumplido', 'Parcialmente cumplido', 'Incumplido', 'Abierto'],
    datasets: [
      {
        data: cumplimiento,
        backgroundColor: [
          'rgba(74, 222, 128, 0.2)',
          'rgba(163, 230, 53, 0.2)',
          'rgba(251, 191, 36, 0.2)',
          'rgba(248, 113, 113, 0.2)',
          'rgba(148, 163, 184, 0.2)'
        ],
        borderColor: [
          'rgba(74, 222, 128, 1)',
          'rgba(163, 230, 53, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(248, 113, 113, 1)',
          'rgba(148, 163, 184, 1)'
        ],
        borderWidth: 1.5
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const barData = {
    labels: ['Cumplido', 'Mayormente cumplido', 'Parcialmente cumplido', 'Incumplido', 'Abierto'],
    datasets: [
      {
        label: 'Cumplimiento',
        data: cumplimiento,
        backgroundColor: [
          'rgba(74, 222, 128, 0.2)',
          'rgba(163, 230, 53, 0.2)',
          'rgba(251, 191, 36, 0.2)',
          'rgba(248, 113, 113, 0.2)',
          'rgba(148, 163, 184, 0.2)'
        ],
        borderColor: [
          'rgba(74, 222, 128, 1)',
          'rgba(163, 230, 53, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(248, 113, 113, 1)',
          'rgba(148, 163, 184, 1)'
        ],
        borderWidth: 1.5
      },
    ],
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <PlusCircleIcon onClick={() => setOpenModal(true)} className="size-12 text-green-300 m-4 cursor-pointer" />
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
              return (
                <PAItem
                  key={pa.id}
                  actividad={pa.actividad}
                  meses={[pa.enero, pa.febrero, pa.marzo, pa.abril, pa.mayo, pa.junio, pa.julio, pa.agosto, pa.septiembre, pa.octubre, pa.noviembre, pa.diciembre]}
                  cumplimiento={pa.cumplimiento}
                  actividadId={pa.id}
                  changed={changed}
                  setChanged={setChanged}
                />
              )
            })
          }

        </tbody>
      </table>
      <h2 className="my-3 text-center font-bold">Gráficos comparativos</h2>
      <div className="flex justify-between">
        <div className="w-1/3 h-96" >
          <PieChart data={pieData} options={pieOptions} />
        </div>
        <div className="w-2/3 h-96">
          <BarChart data={barData} options={barOptions} />
        </div>

      </div>

    </>
  )
}

export default PATable