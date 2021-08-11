import styled from 'styled-components';

const StyledNav = styled.nav`
  box-shadow: 0px 0px 10px #807e7e;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .logout{
      border-radius: 2rem;
      border: none;
      background-color: #808080ad;
      padding: 3px 15px;
      transition: background-color 200ms ease-in;
      &:hover {
        background-color: #464343ad;
      }
    }
`;

export default StyledNav;
