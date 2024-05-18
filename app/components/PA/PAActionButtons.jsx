'use client'
import { TrashIcon, PencilSquareIcon, EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import PADeleteModal from './PADeleteModal'
import PAEditModal from './PAEditModal'
import { getActividadPaById } from '@/app/dashboard/planes/anual/pagp/data'

const PAActionButtons = ({ actividadId,changed,setChanged }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [actividadToEdit, setActividadToEdit] = useState()

  const handleEdit = async ()=>{
    setOpenEditModal(true)  
    const act = await getActividadPaById(actividadId)
    setActividadToEdit(act)
  }

  return (
    <>
      <div className=' flex-col'>
        <PencilSquareIcon onClick={handleEdit} className="size-5 text-orange-300" />
        <TrashIcon onClick={()=>setOpenDeleteModal(true)} className="size-5 text-red-300" />
        <PADeleteModal changed={changed} setChanged={setChanged} openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} actividadId={actividadId}/>
        <PAEditModal changed={changed} setChanged={setChanged} openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} actividadToEdit={actividadToEdit} actividadId={actividadId} />
      </div>
      
    </>
  )
}

export default PAActionButtons