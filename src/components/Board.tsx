import Square from "./Square"

interface BoardProps {
    squares: string[];
    onClick: (index: number) => void;
  }

//Contiene el tablero de tic tac toe
const Board = ({ squares, onClick } : BoardProps) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square
        key={index}
        value={square}
        onClick={() => onClick(index)}
      />
    ))}
  </div>
);

export default Board;