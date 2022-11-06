import { useSelector } from "react-redux";
import {
  selectInterviewerDataByInterviewerId,
  selectUserById,
} from "../../store/entities/users/selectors";
import { selectReviewerIdByReviewId } from "../../store/entities/reviews/selectors";
import { Review } from "../../components/Review/Review";
import { selectReviewsById } from "../../store/entities/reviews/selectors";
import { useEffect } from "react";
import { loadUsersIfNotExist } from "../../store/entities/users/thunk/loadUsersIfNotExist";
import { useDispatch } from "react-redux";

export const ReviewContainer = ({ id }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUsers = loadUsersIfNotExist();
    dispatch(loadUsers);
  }, []);
  const reviewData = useSelector((state) => selectReviewsById(state, { id }));
  const reviewerId = useSelector((state) =>
    selectReviewerIdByReviewId(state, { id })
  );
  const reviewerData = useSelector((state) =>
    selectUserById(state, { id: reviewerId })
  );
  console.log(reviewerData);
  return (
    <Review
      name={reviewerData || "Гость"}
      review={reviewData?.text}
      rating={reviewData?.rating}
    />
  );
};
