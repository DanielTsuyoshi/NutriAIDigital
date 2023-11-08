"use server"

import { revalidatePath } from "next/cache";
import { cookies as nextCookies } from "next/headers";

export async function createUser(formData) {
    const url = "http://localhost:8080/nutriai/api/usuario";
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
        revalidatePath("/user_search");
        return { message: "ok" }
    } catch (error) {
        console.log({error})
        return { message: "Erro ao cadastrar usuário" }
    }
}