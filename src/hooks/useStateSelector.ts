import { TypedUseSelectorHook, useSelector } from "react-redux";
import { InitialState } from "type";

const useStateSelector: TypedUseSelectorHook<InitialState> = useSelector;

export default useStateSelector;
