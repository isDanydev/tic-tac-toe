import { useState } from "react"

const useGameLogic = () => {
    const [squares, setSquares] = useState(Array(9).fill(""))
    const [isXNext, setIsXNext] = useState(true)

    const handleClick = (index : number) => {
        const newSquares = squares.slice()
        if(calculateWinner(squares) || newSquares[index]) return
        newSquares[index] = isXNext ? "X" : "O"
        setSquares(newSquares)
        setIsXNext(!isXNext)
    }

    const calculateWinner = (squares : string[]) => {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

    return {
        squares,
        status,
        handleClick,
        restartGame: () => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }
      };
    };
export default useGameLogic