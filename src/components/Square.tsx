
interface SquareProps {
  value: string;
  onClick: () => void;
}


// Muestra el valor de su celda y accion del click
const Square = ({value, onClick} : SquareProps) => {
  return (
    <button className="square" onClick={onClick}>
        {value}
    </button>
  )
}
export default Square