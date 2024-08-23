
interface StatusProps {
  status: string;
}


//Para mostrar el estado del juego " Winner: X" o "Next player: O"
const Status = ({status} : StatusProps) => {
  return (
    <div className="status">
        {status}
    </div>
  )
}
export default Status