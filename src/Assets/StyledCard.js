import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 15px;
  box-shadow: 7px 10px 17px -6px #7d7c7c;
  .card-img {
    border-radius: 15px;
    object-fit: cover;
    height: 100%;
  }

  .card-img-overlay {
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.356);
    transition: background 200ms ease-in;
    &:hover {
      background: rgba(0, 0, 0, 0);
    }
  }
  .fav-heart {
    font-size: 1.5rem;
  }

  .card-details {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    height: 30%;
  }

  .per-nigth {
    font-size: 13px;
  }

  .price-details {
    width: 30%;
  }

  .details {
    background-color: #ec5200;
    font-weight: 900;
    color: #fff;
    padding: 3px;
    border: none;
    border-radius: 2rem;
    transition: box-shadow 200ms ease-in;
    &:hover {
      box-shadow: 3px 1px 10px 3px #ec5200;
    }
  }

  .rating {
    border: 1px solid #ec5200;
    border-radius: 15px;
    padding: 3px;
    font-weight: bold;
    width: max-content;
  }

  .remove-fav {
    position: absolute;
    top: -14px;
    left: -14px;
    background-color: #ed0808;
    border: none;
    font-size: 2rem;
    border-radius: 51%;
    width: 3rem;
    z-index: 3;
    color: #fff;
  }

  @media only screen and (max-width: 530px) {
    .card-details {
      height: 33%;
      font-size: 10px;
    }

    .per-nigth {
      font-size: 10px;
    }

    .card-title {
      font-size: 11px;
    }
    .details {
      padding: 3px;
    }
  }
`;

export default StyledCard;
