import Item from './Iten'
function Lista(){
return (
<>
<h2> Jogadores: </h2>
<table>
        <tr>
            <th> <Item jogador="Maurício" /></th>
            <th><Item jogador="Nicolas" /></th>
            <th><Item jogador="Victor" /></th>
            <th><Item jogador="Felipe" /></th>
        </tr>
    <tr>
        <td><Item wins="08"/></td>
        <td><Item wins="04"/> </td>
        <td><Item wins="03"/></td>
        <td><Item wins="03"/></td>
    </tr>
</table>
</>
)
}
export default Lista;
