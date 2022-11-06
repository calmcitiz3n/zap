//Здесь мы будем писать селекторы для вытаскивания данных из стейта
import { selectSneakersPriceById } from "../../entities/sneakers/selectors";
import { createSelector } from "@reduxjs/toolkit";
export const selectBasketModule = (state) => state.ui.basket;
export const selectBasketEntities = (state) =>
  selectBasketModule(state)?.entities;
export const selectBasketIds = (state) => selectBasketModule(state)?.ids;
export const selectSneakersForId = (state, { sneakerId }) =>
  selectBasketEntities(state)?.[sneakerId];
export const selectSneakersCountById = (state, { sneakerId }) =>
  selectBasketEntities[sneakerId]?.count || 0;
export const selectSneakersSizeForId = (state, { sneakerId }) =>
  selectSneakersForId(state, { sneakerId })?.size;
export const selectBasketTotalPrice = () =>
  createSelector(
    [selectBasketEntities, selectBasketIds, selectBasketModule],
    (price, sneakers, count) => {
      let sum = 0;
      for (let product of sneakers) {
        price[product].map((sneaker) => {
          const totalCount = sneaker?.count;
          const sumPrice = sneaker?.price;
          const totalPrice = totalCount * sumPrice;
          sum += totalPrice;
        });
      }
      return sum;
    }
  );

export const selectSneakersBasketCount = () =>
  createSelector(
    [selectSneakersPriceById, selectSneakersCountById],
    (price, count) => {
      return count * price;
    }
  );
