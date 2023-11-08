import SideBar from "@/components/SideBar";

export default function RecommendationList() {
    return (
        <div className="flex">
            <div className="w-64 mr-4">
                <SideBar active={"recommendation_list"} />
            </div>
            <main>
                <h2 className="text-2xl font-bold">Lista de Recomendação</h2>
                {/* Conteúdo da lista de recomendações */}
            </main>
        </div>
    );
}
