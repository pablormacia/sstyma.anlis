"use client";
import { updateActividadPA } from "@/app/dashboard/planes/anual/pagp/actions";

import { Button, Modal } from "flowbite-react";
import { useEffect, useState, useTransition } from "react";

const PAEditModal = ({ openEditModal, setOpenEditModal, actividadToEdit,actividadId, changed, setChanged }) => {
    /* const [meses, setMeses] = useState([actividadToEdit?.enero, actividadToEdit?.febrero, actividadToEdit?.marzo, actividadToEdit?.abril, actividadToEdit?.mayo, actividadToEdit?.junio, actividadToEdit?.julio, actividadToEdit?.agosto, actividadToEdit?.septiembre, actividadToEdit?.octubre, actividadToEdit?.noviembre, actividadToEdit?.diciembre]) */
    const [meses, setMeses] = useState([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]])
    const [actividad, setActividad] = useState('')
    const [cumplimiento, setCumplimiento] = useState('A')
    const [isPending, startTransition] = useTransition()

    const toggleMes = (rowIndex, columnIndex) => {
        const newMeses = [...meses];
        newMeses[rowIndex][columnIndex] = newMeses[rowIndex][columnIndex] === 0 ? 1 : 0;
        setMeses(newMeses);
    };

    useEffect(() => {
        if (actividadToEdit) {
            const newMeses = [actividadToEdit?.enero, actividadToEdit?.febrero, actividadToEdit?.marzo, actividadToEdit?.abril, actividadToEdit?.mayo, actividadToEdit?.junio, actividadToEdit?.julio, actividadToEdit?.agosto, actividadToEdit?.septiembre, actividadToEdit?.octubre, actividadToEdit?.noviembre, actividadToEdit?.diciembre]
            setMeses(newMeses)
            setActividad(actividadToEdit.actividad)
        }

    }, [openEditModal, actividadToEdit])

    const handleSubmit = () => {
        startTransition(() => {
            setOpenEditModal(false)
            const enero = meses[0]
            const febrero = meses[1]
            const marzo = meses[2]
            const abril = meses[3]
            const mayo = meses[4]
            const junio = meses[5]
            const julio = meses[6]
            const agosto = meses[7]
            const septiembre = meses[8]
            const octubre = meses[9]
            const noviembre = meses[10]
            const diciembre = meses[11]
            const PA = updateActividadPA({
                actividad: actividad,
                enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre,
                cumplimiento: cumplimiento,
            },actividadId)
            //console.log(PA)
            setChanged(!changed)
        })
    }


    return (
        <>
            <Modal dismissible show={openEditModal} onClose={() => setOpenEditModal(false)} size="4xl">
                <Modal.Header>Editar Actividad</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 ">

                        <textarea defaultValue={actividadToEdit?.actividad} onChange={e => setActividad(e.target.value)} className="textarea textarea-bordered w-full" placeholder="Descripción de la actividad" ></textarea>
                        <h3 className="pt-4 pl-0.5 text-sm">Planificación:</h3>
                        <table className=" table bg-slate-50 border-collapse border border-slate-400 table-fixed mb-8" >
                            <thead>
                                <tr>
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {meses.map((mes, rowIndex) => (
                                        <td key={rowIndex} className="border border-slate-300 p-0.5 "><div className="flex align-center justify-center">
                                            {mes.map((semana, columnIndex) => (
                                                <div
                                                    key={columnIndex}
                                                    onClick={() => toggleMes(rowIndex, columnIndex)}
                                                    className={`w-4 h-4 rounded-full ${semana === 1 ? "bg-slate-400" : "border border-slate-400"
                                                        }`}>
                                                </div>
                                            ))}
                                        </div></td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                        <select defaultValue={actividadToEdit?.cumplimiento} onChange={(e) => setCumplimiento(e.target.value)} className="select select-bordered w-full max-w-xs">

                            <option disabled>Cumplimiento</option>
                            <option value="A">A (Abierto)</option>
                            <option value="C">C (Cumplido)</option>
                            <option value="MC">MC (Mayormente cumplido)</option>
                            <option value="PC">PC (Parcialmente cumplido)</option>
                            <option value="IN">IN (Incumplido)</option>
                        </select>

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Guardar</Button>
                    <Button color="gray" onClick={() => setOpenEditModal(false)}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PAEditModal