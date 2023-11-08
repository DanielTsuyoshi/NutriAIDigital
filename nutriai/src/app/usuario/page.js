import SideBar from "@/components/SideBar";
import { useState } from "react";
import { createUser } from "@/actions/usuario";
import { useRouter } from 'next/router';

export default function UserProfile() {
    const [error, setError] = useState("");
    const router = useRouter();

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [birthDate, setBirthDate] = useState("");

    async function createUser() {
        const formData = {
            name: name,
            cpf: cpf,
            zipcode: zipcode,
            birthDate: birthDate.split('-').map(parseFloat)
        }
        const response = await createUser(formData);
        if (response.message === "ok") {
            router.push("/user_search");
            return;
        }
        setError(response.message);
    }

    return (
        <div className="flex">
            <div className="w-64 mr-4">
                <SideBar active={"user"} />
            </div>
            <main className="p-10">
                <h2 className="text-2xl font-bold">Perfil de Usuário</h2>
                <div className="p-4">
                    <div className="mb-4">
                        <input
                            placeholder="Nome"
                            className="border p-2 mb-2 block w-64"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                        <input
                            placeholder="Digite seu CPF"
                            className="border p-2 mb-2 block w-64"
                            type="text"
                            name="cpf"
                            id="cpf"
                            value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                        <input
                            placeholder="Digite seu CEP"
                            className="border p-2 mb-2 block w-64"
                            type="text"
                            name="zipcode"
                            id="zipcode"
                            value={zipcode}
                            onChange={(e) => { setZipcode(e.target.value) }} />
                        <input
                            className="border p-2 mb-2 block w-64"
                            type="date"
                            name="birthDate"
                            id="birthDate"
                            value={birthDate} onChange={(e) => { setBirthDate(e.target.value) }} />
                        <button
                            onClick={createUser}
                            className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-600"
                        >Submit</button>
                        <p className="text-red-500">{error}</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
