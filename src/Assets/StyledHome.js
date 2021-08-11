/* eslint-disable object-curly-newline */
import styled from 'styled-components';

const BrandName = styled.span`
  padding: 3px;
  border: 4px #c34e3c solid;
  border-radius: 5px;
  font-weight: bold;
  font-size: 25px;
  &:hover {
    box-shadow: 0px 0px 10px 3px #ec5200;
  }
`;

const FindBtn = styled.button`
  background-color: #ec5200;
  font-weight: 900;
  color: #fff;
  padding: 15px 40px;
  border: none;
  border-radius: 2rem;
  transition: box-shadow 200ms ease-in;
  &:hover {
    box-shadow: 3px 1px 10px 3px #ec5200;
  }
`;

const StyledSection1 = styled.section`
  padding-left: 100px;
  min-height: 100vh;
  background: linear-gradient(rgba(17, 18, 18, 0.41), rgba(0, 0, 1, 0.41)),
    url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1);
  background-size: cover;
  background-position: center;

  .find {
    top: 35%;
  }

  .find-intro {
    font-weight: 900;
  }

  .sign a {
    text-decoration: none;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
    &.sign-up {
      border-radius: 2rem;
      background-color: #808080ad;
      padding: 10px 15px;
      transition: background-color 200ms ease-in;
      &:hover {
        background-color: #464343ad;
      }
    }
  }

  .arrow-down {
    font-size: 2rem;
    bottom: 25px;
    right: 50%;
    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      transform: translateY(5px);
    }
  }

  @media only screen and (max-width: 500px) {
    padding-left: 10px;
  }
`;

const StyledSection2 = styled.section`
  min-height: 100vh;
  .comf {
    margin-bottom: 100px;
    font-weight: 400;
  }

  .hotel-img {
    border-radius: 1rem;
    box-shadow: 5px 5px 8px gray;
  }
`;

const StyledSection3 = styled.section`
  min-height: 100vh;
  background-color: #e7f0ff;

  .hotel-img {
    border-radius: 1rem;
    box-shadow: -5px 5px 8px gray;
    max-width: 75%;
    height: auto;
  }
  .htl-1 {
    z-index: 2;
  }
  .htl-2 {
    left: 20px;
    top: 40px;
  }
  .htl-3 {
    right: 20px;
    top: 90px;
  }

  @media only screen and (max-width: 770px) {
    .img-cont {
      height: 470px;
    }
  }

  @media only screen and (max-width: 600px) {
    .img-cont {
      height: 390px;
    }
  }

  @media only screen and (max-width: 400px) {
    .img-cont {
      height: 280px;
    }
  }
`;

const StyledSection4 = styled.section`
  min-height: 100vh;
  .op-title {
    font-weight: 400;
  }
`;

const StyledSection5 = styled.section`
  min-height: 30vh;

  background: linear-gradient(rgba(17, 18, 18, 0.49), rgba(0, 0, 1, 0.49)),
    url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1);
  background-size: cover;
  background-position: center;
`;

export {
  BrandName,
  FindBtn,
  StyledSection1,
  StyledSection2,
  StyledSection3,
  StyledSection4,
  StyledSection5,
};
