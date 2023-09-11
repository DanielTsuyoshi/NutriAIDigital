import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import { useEffect, useState } from "react";

async function getProdutos() {
    try {
        const response = await fetch("http://localhost:8080/nutriai/api/produto", {
            headers: {
                Authorization: 'Bearer AIzaSyADQ3Xh8SpuYDKPSvmYoYZsEYLb4eV4EZk', 
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.content;
        } else {
            console.error("Erro ao buscar produtos");
            return [];
        }
    } catch (error) {
        console.error("Erro ao buscar produtos", error);
        return [];
    }
}

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            const produtosData = await getProdutos();
            setProdutos(produtosData);
        }

        fetchProdutos();
    }, []);

    return (
        <div>
            <NavBar active={"lista_produtos"} />
            <main className="container mx-auto p-4">
                <div className="mb-4">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-gray-200">
                                <th className="px-3 py-2">ID</th>
                                <th className="px-3 py-2">Nome</th>
                                <th className="px-3 py-2">Valor</th>
                                <th className="px-3 py-2">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produtos.map((produto) => (
                                <DataRow key={produto.id} produto={produto} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
