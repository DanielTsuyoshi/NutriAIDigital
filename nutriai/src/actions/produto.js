"use server"

import { revalidatePath } from "next/cache";
import { cookies as nextCookies } from "next/headers";

export async function createProduct(formData) {
    const url = "http://localhost:8080/nutriai/api/produto";
    const token = nextCookies().get("nutriai_token");
    console.log(token);
    console.log(JSON.stringify(formData));
    const options = {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token.value}`
        }
    }
    try {
        console.log({options})
        const response = await fetch(url, options);
        console.log({response});
        revalidatePath("/product_list");
        return { message: "ok" }
    } catch (error) {
        console.log({error})
        return { message: "Erro ao cadastrar produto" }
    }
}