import NavBar from "@/components/NavBar";

export default function Usuario() {
    return (
        <div>
            <NavBar active={"usuario"} />
            <main className="container mx-auto p-4">
                Cadastrar Usuário
            </main>
        </div>
    );
}
