import SideBar from "@/components/SideBar";
import { useState } from "react";
import { createProduct } from "@/actions/produto";
import { useRouter } from 'next/router';

export default function FoodRegistration() {
    const [error, setError] = useState("");
    const router = useRouter();

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    async function createProduct() {
        const formData = {
            name: name,
            type: type,
            price: price,
            description: description
        }
        const response = await createProduct(formData);
        if (response.message === "ok") {
            router.push("/product_list");
            return;
        }
        setError(response.message);
    }

    return (
        <div className="flex">
            <div className="w-64 mr-4">
                <SideBar active="product_list" />
            </div>
            <main className="p-10">
                <h2 className="text-2xl font-bold">Produtos</h2>
                <div className="p-4">
                    <div className="mb-4">
                        <input
                            placeholder="Nome"
                            className="border p-2 mb-2 block w-64"
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            placeholder="Tipo"
                            className="border p-2 mb-2 block w-64"
                            type="text"
                            name="type"
                            id="type"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                        <input
                            placeholder="Valor"
                            className="border p-2 mb-2 block w-64"
                            type="number"
                            name="price"
                            id="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        <input
                            placeholder="Descrição"
                            className="border p-2 block w-64"
                            type="text"
                            name="description"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={createProduct}
                        className="bg-purple-800 text-white py-2 px-4 rounded hover:bg-purple-600"
                    >
                        Submit
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </div>
            </main>
        </div>
    );
}
