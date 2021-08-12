import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm } from '../Assets/StyledSignFrom';

const ReviewForm = ({ addReview }) => {
  const [Review, setReview] = useState({
    reviewTitle: '',
    reviewBody: '',
    reviewScore: 0,
  });

  const handleChange = (e) => {
    setReview({
      ...Review,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addReview(Review);
    setReview({
      ...Review, reviewTitle: '', reviewBody: '', reviewScore: 0,
    });
  };

  return (
    <div>
      <button
        style={{ backgroundColor: '#1eac1e', border: 'none' }}
        type="button"
        className=" w-100 p-3 text-white fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add a review
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content p-4">
            <div className="modal-header">
              <h5 className="modal-title text-center" id="exampleModalLabel">
                Thanks for your time, your opinion is very important for us!
              </h5>
            </div>
            <div className="modal-body ">
              <StyledForm
                id="reviewForm"
                className="d-flex flex-column align-items-center"
                onSubmit={handleSubmit}
              >
                <input
                  className="my-3 title userName"
                  placeholder="Title"
                  type="text"
                  value={Review.reviewTitle}
                  onChange={handleChange}
                  name="reviewTitle"
                  id="reviewTitle"
                />
                <textarea
                  className="my-3 body userName"
                  placeholder="Tell us what you think..."
                  value={Review.reviewBody}
                  onChange={handleChange}
                  name="reviewBody"
                  id="reviewBody"
                  minLength="4"
                  maxLength="240"
                />
                <input
                  className="my-3 score userName"
                  type="number"
                  value={Review.reviewScore}
                  onChange={handleChange}
                  placeholder="score"
                  name="reviewScore"
                  id="reviewScore"
                  min="1"
                  max="5"
                />
                <button type="submit" className="btn btn-primary sign-btn">
                  Add review
                </button>
              </StyledForm>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-secondary rounded-pill"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReviewForm.propTypes = {
  addReview: PropTypes.func.isRequired,
};

export default ReviewForm;
