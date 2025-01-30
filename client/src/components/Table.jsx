import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

const TableComponent = ({ items, onRemove }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Preço Unitário</TableCell>
            <TableCell>Preço Total</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.nome}</TableCell>
              <TableCell>
                <div
                  style={{ width: "50px", height: "50px", overflow: "hidden" }}
                >
                  <img
                    src={item.link}
                    alt={item.nome}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </TableCell>
              <TableCell>{item.quantidade}</TableCell>
              <TableCell>R$ {item.price}</TableCell>
              <TableCell>
                R${" "}
                {(Number(item.price) * Number(item.quantidade || 1)).toFixed(2)}
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => onRemove(item.id)}
                  variant="contained"
                  color="secondary"
                >
                  Remover
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
