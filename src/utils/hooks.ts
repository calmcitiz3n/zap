import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"
import type {RootState, AppDispatch} from "../store/index"

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//Эти хуки имеют доступ ко всем данным из store
//те же самые useDispatch и useSelector, только с отличием в том, что они будут типизированы
//Базовая рекомендация от redux-toolkit