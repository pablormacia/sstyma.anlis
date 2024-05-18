'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

const ViewEstablecimientoModal = ({ setViewModalOpen,open,establecimiento }) => {
    const router = useRouter() 
    const {id, nombre, domicilio, localidad, provincia, cp, tel, ciiu, art } = establecimiento
    return (
        <dialog open={open} className="modal scroll-px-0">
            <div className="modal-box">
                <div className="mb-4">
                    <h1 className="text-xl">{nombre}</h1>
                    <p className="text-slate-500">{provincia}, {localidad} </p>
                    <p className="text-slate-500">{domicilio} <span>({cp})</span></p>
                    <p className="text-slate-500">Contacto: {tel}</p>
                    <p className="text-slate-500">CIIU: {ciiu}</p>
                    <p className="text-slate-500">Número ART: {art}</p>
                </div>
                <div className='flex gap-3 justify-center'>
                    <button onClick={() => setViewModalOpen(false)} className="btn bg-slate-200">Salir</button>
                    <button onClick={() => router.push(`/dashboard/establecimientos/${id}/editar`)} className="btn bg-amber-500 text-white">Editar</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setViewModalOpen(false)}></button>
            </form>
        </dialog>
    )
}

export default ViewEstablecimientoModal