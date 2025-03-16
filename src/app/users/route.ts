export const users = [
    {id: 1, name: "Shakuntala"},
    {id: 2, name: "Dushyant"}
]
export async function GET() {
    return Response.json(users)
}
export async function POST(request: Request) {
    const user = await request.json()
    
    const newUser = {
        id: users.length + 1,
        name: user.name
    }
    users.push(newUser)
    return new Response(JSON.stringify(newUser),{
        headers: {
            "content-type": "application/json"
        },
        status: 201
    });

}

export async function PUT(request: Request) {
    const updateUser  = await request.json()
    console.log(updateUser);
    // let user = users.find((user) => user.id === parseInt(updateUser.id))
    
    const userIndex = users.findIndex((user) => user.id === parseInt(updateUser.id))
    users[userIndex] = {...users[userIndex], ...updateUser}
    
    return new Response(JSON.stringify(users[userIndex]),{
        headers: {
            "content-type": "application/json"
        },
        status: 200
    });
}