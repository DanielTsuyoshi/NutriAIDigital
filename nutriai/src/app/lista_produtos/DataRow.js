import DropMenu from "@/components/DropMenu";

export default function DataRow({ produto }) {
    return (
        <tr>
            <td className="px-4 py-2">{produto.id}</td>
            <td className="px-4 py-2">{produto.nome}</td>
            <td className="px-4 py-2">{produto.tipo}</td>
            <td className="px-4 py-2">{produto.valor}</td>
            <td className="px-4 py-2">{produto.descricao}</td>
            <td className="px-4 py-2">
                <DropMenu />
            </td>
        </tr>
    );
}
