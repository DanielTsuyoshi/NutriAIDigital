"use server"

import { revalidatePath } from "next/cache";
import { cookies as nextCookies } from "next/headers";

export async function createRecommendation(formData) {
    const url = "http://localhost:8080/nutriai/api/recomendacao";
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
        revalidatePath("/recommendation");
        return { message: "ok" }
    } catch (error) {
        console.log({error})
        return { message: "Erro ao gerar recomendação" }
    }
}
