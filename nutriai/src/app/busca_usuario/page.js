import SideBar from "@/components/SideBar";
import DataRow from "./DataRow";
import { cookies } from "next/headers";
import React, { useEffect, useState } from "react";

async function getUsers() {
    const url = "http://localhost:8080/nutriai/api/usuario"
    const token = cookies().get("nutriai_token");
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token.value}` } });
    return response.json();
}

export default function UserSearch() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getUsers().then((result) => {
            setData(result.content);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="flex">
            <div className="w-64 mr-4">
                <SideBar active={"user_search"} />
            </div>
            <main>
                <h2 className="text-2xl font-bold">Buscar Usuário</h2>
                <div className="mb-4">
                    {isLoading ? (
                        <p>Carregando usuários...</p>
                    ) : (
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-6 py-2">ID</th>
                                    <th className="px-6 py-2">Nome</th>
                                    <th className="px-6 py-2">CPF</th>
                                    <th className="px-6 py-2">CEP</th>
                                    <th className="px-6 py-2">Data de Nascimento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((usuario) => (
                                    <DataRow key={usuario.id} usuario={usuario} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </div>
    );
}
