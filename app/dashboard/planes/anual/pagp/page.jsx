import PATable from "@/app/components/PA/PATable"
import { getPlanAnualById } from "./data"


const PAGPPage = async () => {
  const PA = await getPlanAnualById(1)
  
  return (
    <div className="px-10 py-5 overflow-x-auto">
      <h1 className=" text-2xl">{PA.nombre}</h1>
      <p className="py-4 text-slate-400">{PA.descripcion}</p>
      <PATable planAnualId={1} />
    </div>
  )
}

export default PAGPPage