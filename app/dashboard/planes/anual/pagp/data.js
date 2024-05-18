'use server'
import db from '@/app/lib/db'

export async function getPlanAnualById(id) {
    try {
        const PA = await db.planesAnuales.findUnique({
            where: {
                id: id
            }
        })
        //console.log("PA:", PA)
        return PA
    } catch (error) {
        return error.message
    }
}
                             

export async function getPlanAnualData(establecimientoId, planAnualId, year) {
    try {
        const PAData = await db.planAnualData.findMany({
            where:{
                establecimientoId,
                planAnualId,
                year
            }
        })
        return PAData
    } catch (error) {
        return error.message
    }

}

export async function getActividadPaById(id) {
    try {
        const actividad = await db.planAnualData.findUnique({
            where: {
                id: id
            }
        })
        console.log(actividad)
        return actividad
    } catch (error) {
        return error.message
    }
}