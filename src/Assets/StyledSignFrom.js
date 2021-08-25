import styled from 'styled-components';

const FormContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(
      rgba(253, 253, 253, 0.84),
      rgba(253, 253, 253, 0.84)
    ),
    url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/47/f2/ef/hyatt-zilara-cancun.jpg?w=1200&h=-1&s=1);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledForm = styled.form`
  .userName,
  .userEmail {
    border-radius: 2rem;
    border: 1px solid gray;
    padding: 8px;
    color: #ec5200;
    background-color: transparent;
    text-align: center;
    &:focus-visible {
      outline: 2px solid #ec5200;
    }
  }

  .sign-btn {
    border-radius: 2rem;
    border: none;
    padding: 8px;
    color: #fff;
    background-color: #ec5200;
    width: 75%;
    transition: box-shadow 200ms ease-in;
    &:hover {
      box-shadow: 3px 1px 10px 3px #ec5200;
    }
  }
`;

export { StyledForm, FormContainer };
