import PropTypes from 'prop-types';
import StyledReview from '../Assets/StyledReview';

const Review = ({ review }) => {
  const date = review.created_at;
  const tIndex = date.indexOf('T');
  const dateToWords = new Date(date.slice(0, tIndex)).toDateString();

  return (
    <StyledReview className="card text-center col-12 col-md-5 col-lg-3 mb-4 justify-content-center">
      <div className="card-body m-0">
        <p className="card-text">{review.title}</p>
        <p className="card-text">{review.body}</p>
        <p className="card-text text-secondary">{dateToWords}</p>
      </div>
    </StyledReview>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Review;
