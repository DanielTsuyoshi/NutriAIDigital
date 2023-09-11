import NavBar from "@/components/NavBar";

export default function Produtos() {
    return (
        <div>
            <NavBar active={"produtos"} />
            <main className="container mx-auto p-4">
                Cadastrar Produtos
            </main>
        </div>
    );
}
