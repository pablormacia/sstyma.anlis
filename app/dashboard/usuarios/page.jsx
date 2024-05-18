import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { revalidatePath } from 'next/cache';
import { getUsuarios } from './data';
//import ActionButtons from '@/app/components/ActionButtons';

const UsuariosPage =async  () => {
  const usuarios = await getUsuarios()
  revalidatePath('/dashboard/usuarios')
  //console.log(usuarios)
  
  return (
    <div className="px-10 py-5 overflow-x-auto">
      <h1>Usuarios</h1>
      <Link href="/dashboard/usuarios/crear"><PlusCircleIcon className="size-12 text-green-300 m-4" /></Link>
      <table className=" table bg-slate-50 border-collapse border border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 p-4 text-center text-xl">Usuario</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Rol</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Estado</th>
            <th className="border border-slate-300 p-4 text-center text-xl">Último Acceso</th>
            <th className="border border-slate-300 p-1 text-center text-xl">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(usu=>(
              <tr key={usu.id}>
                <td className="border border-slate-300 p-4">{usu.username}</td>
                <td className="border border-slate-300 p-4">{usu.rol}</td>
                <td className="border border-slate-300 p-4">Activo</td>
                <td className="border border-slate-300 p-4"></td>
                <th className="border border-slate-300 p-4">{/* <ActionButtons establecimiento={est} id={est.id}/> */}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default UsuariosPage