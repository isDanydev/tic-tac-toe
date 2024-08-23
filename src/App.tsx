import Board from './components/Board';
import Status from './components/Status';
import useGameLogic from './hook/useGameLogic';



const App = () => {
  const { squares, status, handleClick, restartGame } = useGameLogic();

  return (
    <div className="game">
      <Status status={status} />
      <Board squares={squares} onClick={handleClick} />
      <button className="restart" onClick={restartGame}>Restart</button>
    </div>
  );
};

export default App;