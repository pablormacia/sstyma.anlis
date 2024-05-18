'use server'
import db from '@/app/lib/db'

export async function getEstablecimientos() {
    try {
        const establecimientos = await db.establecimientos.findMany()
        //console.log(establecimientos)
        return establecimientos
    } catch (error) {
        return error.message
    }
}


export async function getEstablecimientoById(id) {
    try {
        const establecimiento = await db.establecimientos.findUnique({
            where: {
                id: id
            }
        })
        console.log(establecimiento)
        return establecimiento
    } catch (error) {
        return error.message
    }
}

export async function getEstablecimientosByIds(ids_array) {
    try {
        const establecimientos = await db.establecimientos.findMany({
            where: {
                id: {in: ids_array}
            }
        })
        return establecimientos
    } catch (error) {
        return error.message
    }
}