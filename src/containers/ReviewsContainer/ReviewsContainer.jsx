import { useEffect } from "react";
import { selectReviewsIds } from "../../store/entities/reviews/selectors";
import { useDispatch } from "react-redux";
import { selectReviewsEntities } from "../../store/entities/reviews/selectors";
import { loadReviewsIfNotExist } from "../../store/entities/reviews/thunk/loadReviewsIfNotExist";
import { useSelector } from "react-redux";
import { loadUsersIfNotExist } from "../../store/entities/users/thunk/loadUsersIfNotExist";
import { Reviews } from "../../components/Reviews/Reviews";
export const ReviewsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadReviews = loadReviewsIfNotExist();
    const loadUsers = loadUsersIfNotExist();
    dispatch(loadReviews, loadUsers);
  }, []);
  const ids = useSelector((state) => selectReviewsIds(state));
  return <Reviews ids={ids} />;
};
