"use client";

import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useTransition } from "react";
import { deleteActividadPA } from "@/app/dashboard/planes/anual/pagp/actions";
import { useRouter } from "next/navigation";

const PADeleteModal=({openDeleteModal,setOpenDeleteModal,actividadId, changed, setChanged})=> {
    const router = useRouter()
    const [isLoading, startTransition] = useTransition()
    const handleDeleteActividadPA = ()=>{
        setOpenDeleteModal(false)
        deleteActividadPA(actividadId)
        setChanged(!changed)
    }

  return (
    <>
      <Modal show={openDeleteModal} size="md" onClose={() => setOpenDeleteModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              ¿Eliminar actividad?<br />
              Esta acción no se puede deshacer
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeleteActividadPA}>
                {"Si, eliminar"}
              </Button>
              <Button color="gray" onClick={() => setOpenDeleteModal(false)}>
                No, cancelar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PADeleteModal