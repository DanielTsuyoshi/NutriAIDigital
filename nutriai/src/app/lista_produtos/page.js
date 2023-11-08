import SideBar from "@/components/SideBar";
import DataRow from "./DataRow";
import React, { useEffect, useState } from "react";
import { cookies } from "next/headers";

async function getProducts() {
    const url = "http://localhost:8080/nutriai/api/produto"
    const token = cookies().get("nutriai_token");
    const response = await fetch(url, { headers: { Authorization: `Bearer ${token.value}` } });
    return response.json();
}

export default function ProductList() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getProducts().then((result) => {
            setData(result.content);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="flex">
            <div className="w-64 mr-4">
                <SideBar active={"product_list"} />
            </div>
            <main>
                <h2 className="text-2xl font-bold">Lista de Produtos</h2>
                <div className="mb-4">
                    {isLoading ? (
                        <p>Carregando produtos...</p>
                    ) : (
                        <table className="min-w-full">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="px-2">ID</th>
                                    <th className="px-2">Nome</th>
                                    <th className="px-2">Tipo</th>
                                    <th className="px-2">Valor</th>
                                    <th className="px-2">Descrição</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((produto) => (
                                    <DataRow key={produto.id} produto={produto} />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </main>
        </div>
    );
}
