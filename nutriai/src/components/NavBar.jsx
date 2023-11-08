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
                        <Link href="/usuario">
                            <a className="text-white hover:text-gray-300" title="Cadastrar Usuário">
                                <UserAddIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/produto">
                            <a className="text-white hover:text-gray-300" title="Cadastrar Produtos">
                                <FoodIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/busca_usuario">
                            <a className="text-white hover:text-gray-300" title="Buscar Usuário">
                                <SearchIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lista_produtos">
                            <a className="text-white hover:text-gray-300" title="Listar Produtos">
                                <ClipboardCheckIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/recomendacao">
                            <a className="text-white hover:text-gray-300" title="Gerar Recomendação">
                                <DocumentTextIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/lista_recomendacao">
                            <a className="text-white hover:text-gray-300" title="Listar Recomendações">
                                <DocumentSearchIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
