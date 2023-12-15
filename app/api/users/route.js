import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()

    return  NextResponse.json(data)
}

export async function POST(request){
    const data = await request.json()  // es lo mismo que req.body

    return  NextResponse.json(data)
}

export function PUT(){
    return  NextResponse.json({
        message: "cambiando datos con PUT"
    })
}

export function DELETE(){
    return  NextResponse.json({
        message: "borrando datos con DELETE"
    })
}