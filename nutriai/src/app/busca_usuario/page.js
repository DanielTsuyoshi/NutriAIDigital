import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import { useEffect, useState } from "react";

async function getUsuarios() {
    try {
        const response = await fetch("http://localhost:8080/nutriai/api/usuario", {
            headers: {
                Authorization: 'Bearer AIzaSyADQ3Xh8SpuYDKPSvmYoYZsEYLb4eV4EZk', 
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.content;
        } else {
            console.error("Erro ao buscar usuários");
            return [];
        }
    } catch (error) {
        console.error("Erro ao buscar usuários", error);
        return [];
    }
}

export default function BuscaUsuario() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function fetchUsuarios() {
            const usuariosData = await getUsuarios();
            setUsuarios(usuariosData);
        }

        fetchUsuarios();
    }, []);

    return (
        <div>
            <NavBar active={"busca_usuario"} />
            <main className="container mx-auto p-4">
                <div className="mb-4">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="px-3 py-2">ID</th> 
                                <th className="px-3 py-2">Nome</th>
                                <th className="px-3 py-2">CPF</th>
                                <th className="px-3 py-2">Data de Nascimento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => (
                                <DataRow key={usuario.id} usuario={usuario} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
