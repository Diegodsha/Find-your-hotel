import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 100px;
  .social {
    padding: 10px;
    font-size: 3rem;
    color: white;
    margin: 0 10px;
    border-radius: 2rem;
  }

  .facebook {
    background-color: #27569c;
  }

  .twitter {
    background-color: #00aff1;
  }

  .instagram {
    background-color: #00739e;
  }
  @media only screen and (max-width: 500px) {
    padding: 80px;
  }
`;

export default StyledFooter;
