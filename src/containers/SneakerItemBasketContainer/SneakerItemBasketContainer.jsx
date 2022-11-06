import { useDispatch, useSelector } from "react-redux";
import {
  selectSneakersForId,
  selectSneakersSizeForId,
} from "../../store/ui/basket/selectors";

import { SneakerItemBasket } from "../../components/SneakerItemBasket/SneakerItemBasket";
import { selectSneakersById } from "../../store/entities/sneakers/selectors";
import { useCallback } from "react";
import { uiReducer } from "../../store/ui/basket/reducer";
import React, { Component } from "react";
export const SneakerItemBasketContainer = ({ sneakerId }) => {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) =>
    selectSneakersForId(state, { sneakerId })
  );

  const sneakersInfo = useSelector((state) =>
    selectSneakersById(state, { id: sneakerId })
  );
  return (
    <>
      {sneakers?.map((info) => (
        <SneakerItemBasket
          size={info?.size}
          brand={info?.brand}
          count={info?.count}
          name={sneakersInfo?.name}
          image={sneakersInfo?.image}
          sneakerPairId={sneakersInfo?.id}
          sneakersInfo={sneakersInfo}
          price={sneakersInfo?.price}
        />
      ))}
    </>
  );
};
