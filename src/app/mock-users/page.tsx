import { revalidatePath } from "next/cache"
import { auth, currentUser } from "@clerk/nextjs/server"

type MockUser = {
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string
}

export default async function MockUser() {

    const authObj = await auth()
    const userObj = await currentUser()

    console.log(authObj, userObj);
    

    // await new Promise(resolve => setTimeout(resolve,2000))
    const response = await fetch("https://67d6b608286fdac89bc2bf93.mockapi.io/users")
    const users = await response.json()

    async function addUser(formData: FormData){
        "use server"
        const name = formData.get("name")
        const res = await fetch("https://67d6b608286fdac89bc2bf93.mockapi.io/users",{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ name })
        })
        const newUser = await res.json()
        console.log(newUser);
        revalidatePath("/mock-users")
    }
    
    return (
        <div className="py-10">
            <form action={addUser} className="mb-4">
                <input 
                type="text"
                name="name"
                required
                className="p-2 mr-2 border border-gray-300 rounded text-gray-700"
                 />
                  <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
            </form>

            <div className="grid grid-cols-4 gap-4 ">
                {users.map((user: MockUser)=> (
                    <div key={user.id}
                    className="p-4 bg-white shadow-md rounded-lg text-gray-700">
                        {user.name}
                    </div>
                ))}
            </div> 
        </div>
    )
}