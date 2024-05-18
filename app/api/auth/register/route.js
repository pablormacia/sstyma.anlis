import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'
import db from '@/app/lib/db'

export async function POST(request) {
    try {
        const data = await request.json()

        const userFound = await db.usuarios.findUnique({
            where: {
                username: data.username
            }
        })

        if (userFound) {
            return NextResponse.json({
                message: "El usuario ya existe"
            }, {
                status: 400
            })
        } 

        console.log(data)
        data.password = await bcrypt.hash(data.password, 10)
        const newUser = await db.usuarios.create({ data })

        const { password: _, ...user } = newUser

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({
            message: error.message
        },{
            status:500
        })
    }
}