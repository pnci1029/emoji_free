import {AppDispatch} from "../slice";
import {useDispatch} from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();