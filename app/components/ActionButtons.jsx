'use client'
import { TrashIcon, PencilSquareIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { deleteEstablecimiento } from '../dashboard/establecimientos/actions'
import ViewEstablecimientoModal from './ViewEstablecimientoModal'

const ActionButtons = ({ establecimiento, id }) => {
    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [viewModalOpen, setViewModalOpen] = useState(false)
    const router = useRouter()

    const handleDelete = () => {
        deleteEstablecimiento(id)
        router.push('/dashboard/establecimientos')
    }

    return (
        <>
            <div className='flex justify-around'>
                <EyeIcon onClick={() => setViewModalOpen(true)} className="size-6 text-green-400" />
                <PencilSquareIcon onClick={() => router.push(`/dashboard/establecimientos/${id}/editar`)} className="size-6 text-orange-300" />
                <TrashIcon onClick={() => setDeleteModalOpen(true)} className="size-6 text-red-300" />
            </div>

            <dialog open={deleteModalOpen} className="modal scroll-px-0">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">¿Eliminar el establecimiento {establecimiento.nombre}?</h3>
                    <p className="py-4">Esta acción no se puede deshacer</p>
                    <div className='flex gap-3 justify-center'>

                        <button onClick={() => setDeleteModalOpen(false)} className="btn bg-slate-200">Cancelar</button>
                        <button onClick={handleDelete} className="btn bg-red-500 text-white">SI, ELIMINAR</button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={() => setDeleteModalOpen(false)}></button>
                </form>
            </dialog>

            <ViewEstablecimientoModal open={viewModalOpen} setViewModalOpen={setViewModalOpen} establecimiento={establecimiento}/>

        </>
    )
}

export default ActionButtons