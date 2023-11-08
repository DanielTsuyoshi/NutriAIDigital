import SideBar from "@/components/SideBar";
import { useState } from "react";
import { createRecommendation } from "@/actions/recomendacao";
import { useRouter } from 'next/router';

export default function Recommendation() {
    const [error, setError] = useState("");
    const router = useRouter();

    const [productList, setProductList] = useState("");

    async function createRecommendation() {
        const formData = {
            productList: productList,
        }
        const response = await createRecommendation(formData);
        if (response.message === "ok") {
            router.push("/recommendation_list");
            return;
        }
        setError(response.message);
    }

    return (
        <div className="flex">
            <div className="w-64 mr-4">
                <SideBar active={"recommendation"} />
            </div>
            <main>
                <h2 className="text-2xl font-bold">Recomendação</h2>
                <div className="p-4">
                    <div className="mb-4">
                        <textarea
                            placeholder="Lista de Produtos"
                            className="border p-2 block w-64"
                            rows="4"
                            value={productList}
                            onChange={(e) => setProductList(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={createRecommendation}
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
