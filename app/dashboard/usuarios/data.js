'use server'
import db from '@/app/lib/db'

export async function getUsuarios() {
    try {
        const usuarios = await db.usuarios.findMany()
        return usuarios
    } catch (error) {
        return error.message
    }
}


export async function getUsuarioById(id) {
    try {
        const usuario = await db.usuarios.findUnique({
            where:{
                id:id
            }
        })
        return usuario
    } catch (error) {
        return error.message
    }
}