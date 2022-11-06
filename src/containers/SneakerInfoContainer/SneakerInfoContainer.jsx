import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectSneakersNameById,
  selectSneakersSizesById,
  selectSneakersImageById,
  selectSneakersById,
} from "../../store/entities/sneakers/selectors";
import { useDispatch } from "react-redux/es/exports";
import { SneakerInfo } from "../../components/SneakerInfo/SneakerInfo";
import { useEffect } from "react";
import { loadSneakersByIdIfNotExist } from "../../store/entities/sneakers/thunk/loadSneakersByIdIfNotExist";
export const SneakerInfoContainer = () => {
  const { sneakerPairId } = useParams();

  const sneakerInfo = useSelector((state) =>
    selectSneakersById(state, { id: sneakerPairId })
  );
  const dispatch = useDispatch();
  useEffect(() => {
    const loadFunction = loadSneakersByIdIfNotExist({
      id: sneakerPairId,
    });
    dispatch(loadFunction);
  }, []);

  return (
    <SneakerInfo
      sizes={sneakerInfo?.sizes}
      name={sneakerInfo?.name}
      price={sneakerInfo?.price}
      image={sneakerInfo?.image}
      brand={sneakerInfo?.brand}
    />
  );
};
