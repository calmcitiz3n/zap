// import { sneakerSlice } from "../../sneakers";

// export const loadReviewsIfNotExist = () => (dispatch, getState) => {
//   const state = getState();
//   // if () {
//   //     return
//   // } //В проверку мы достаём из стора с помощью селекторов сущности. если он пустой, то работаем дальше. Иначе return
//   dispatch(sneakerSlice.startLoading());
//   fetch("http://localhost:3001/api/reviews/")
//     .then((res) => res.json())
//     .then((reviews) => sneakerSlice.finishLoading({ reviews }))
//     .catch((err) => {
//       console.log(error);
//       sneakerSlice.failedLoading();
//     });
// };
