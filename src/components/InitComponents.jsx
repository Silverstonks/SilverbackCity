import { useDispatch } from "react-redux";
import actions from "../store/actions";


const InitComponents = () => {
  const dispatch = useDispatch();
  dispatch(actions.blockChainActions.getUserDetails())
  return (
    <></>
  )
}

export default InitComponents;
