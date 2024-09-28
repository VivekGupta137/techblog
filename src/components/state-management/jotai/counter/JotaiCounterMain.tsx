"use client"
import { atom, useAtom } from 'jotai'
import Counter from '../../Counter';

const countAtom = atom<number>(0);

const JotaiCounterMain = () => {
    const [value, setValue] = useAtom(countAtom)
    
    const increment = () => setValue((c) => c + 1)
    const decrement = () => setValue((c) => c - 1)

    return ( <Counter count={value} increment={increment} decrement={decrement} /> );
}
 
export default JotaiCounterMain;