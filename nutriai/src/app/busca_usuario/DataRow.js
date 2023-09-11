import DropMenu from "@/components/DropMenu";

export default function DataRow({ usuario }) {
    return (
        <tr>
            <td className="px-3">{usuario.id}</td>
            <td className="px-3">{usuario.nome}</td>
            <td className="px-3">{usuario.cpf}</td>
            <td className="px-3">{usuario.dataNascimento}</td>
            <DropMenu />
        </tr>
    )
}