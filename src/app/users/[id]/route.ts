import { users } from "../route"

export async function GET(
    _request: Request,
    { params }: { params: {id: string}}
) {
    const { id } = await params
    const user = users.find((user) => user.id === parseInt(id))
    console.log(user);
    
    return Response.json(user)
}

export async function DELETE(
    _request: Request,
    { params }: { params: {id: string}}
) {
    const { id } = await params
    const index = users.findIndex((user) => user.id === parseInt(id))
    users.splice(index, 1)
    
    return new Response(null,{
        headers: {
            "content-type": "application/json"
        },
        status: 204
    });
}

