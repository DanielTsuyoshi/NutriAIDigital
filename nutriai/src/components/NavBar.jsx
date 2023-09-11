import React from "react";
import Link from "next/link";
import { HomeIcon, UserAddIcon, FoodIcon, SearchIcon, ClipboardCheckIcon, DocumentTextIcon, DocumentSearchIcon, ClipboardListIcon, LightBulbIcon } from "@heroicons/react/solid"; // Importe os ícones que desejar

export default function NavBar() { // Renomeie a função para NavBar
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <a className="text-white text-2xl font-bold">
                        Seu Logo
                    </a>
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/">
                            <a className="text-white hover:text-gray-300" title="Home">
                                <HomeIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cadastrar_usuario">
                            <a className="text-white hover:text-gray-300" title="Cadastrar Usuário">
                                <UserAddIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cadastrar_produtos">
                            <a className="text-white hover:text-gray-300" title="Cadastrar Alimentos">
                                <FoodIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/buscar_usuario">
                            <a className="text-white hover:text-gray-300" title="Buscar Usuário">
                                <SearchIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/listar_produtos">
                            <a className="text-white hover:text-gray-300" title="Listar Alimentos">
                                <ClipboardCheckIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/gerar_recomendacao">
                            <a className="text-white hover:text-gray-300" title="Gerar Recomendação">
                                <DocumentTextIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ver_recomendacoes">
                            <a className="text-white hover:text-gray-300" title="Ver Recomendações">
                                <DocumentSearchIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/recomendacoes_por_usuario">
                            <a className="text-white hover:text-gray-300" title="Recomendações por Usuário">
                                <LightBulbIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
