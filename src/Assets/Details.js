import styled from 'styled-components';

const Details = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      rgba(253, 253, 253, 0.84),
      rgba(253, 253, 253, 0.84)
    ),
    url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .btns-cont {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
  }

  .fav-btn {
    background-color: #ec5200;
    border: none;
  }

  .card-body {
    margin-bottom: 110px;
    .arrow-down{
      font-size: 1.5rem;
    }
  }
  /* .rating {
    position: absolute;
    bottom: 10px;
  }

  .price {
    position: absolute;
    bottom: 10px;
    right: 0;
  } */
`;

export default Details;
