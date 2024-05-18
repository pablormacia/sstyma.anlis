import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { revalidatePath } from 'next/cache';
import { getEstablecimientos } from './data';
import ActionButtons from '@/app/components/ActionButtons';

const EstablecimientosPage =async  () => {
  const establecimientos = await getEstablecimientos()
  revalidatePath('/dashboard/establecimientos')
  console.log(establecimientos)
  
  return (
    <div className="px-10 py-5 overflow-x-auto">
      <h1>Establecimientos</h1>
      <Link href="/dashboard/establecimientos/crear" className=' inline-block'><PlusCircleIcon className="size-12 text-green-300 m-4" /></Link>
      <table className=" table bg-slate-50 border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 p-4 text-center text-xl">Nombre</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Provincia</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Localidad</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Domicilio</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Referente</th>
            <th className="border border-slate-300 p-1 text-center text-xl">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            establecimientos.map(est=>(
              <tr key={est.id}>
                <td className="border border-slate-300 p-4">{est.nombre}</td>
                <td className="border border-slate-300 p-4">{est.provincia}</td>
                <td className="border border-slate-300 p-4">{est.localidad}</td>
                <td className="border border-slate-300 p-4">{est.domicilio}</td>
                <td className="border border-slate-300 p-4"></td>
                <th className="border border-slate-300 p-4"><ActionButtons establecimiento={est} id={est.id}/></th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default EstablecimientosPage

