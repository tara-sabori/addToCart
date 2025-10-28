import { PiArrowLeftBold } from "react-icons/pi"
import useMoveBack from "../hooks/useMoveBack"

const MoveBack = () => {
    const clickHandler = useMoveBack();
  return (
    <button className="text-secondary-800 text-xl" onClick={clickHandler}>
        <PiArrowLeftBold />
    </button>
  )
}

export default MoveBack