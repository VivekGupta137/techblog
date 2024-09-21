import { useRecoilState } from "recoil";
import { countState } from "./RecoilMain";
import Counter from "../Counter";

const RecoilCounter = () => {
    const [count, setCount] = useRecoilState(countState);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return ( <Counter count={count} increment={increment} decrement={decrement} /> );
}
 
export default RecoilCounter;