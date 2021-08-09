import styled from 'styled-components';

const StyledFooter = styled.footer`
padding: 100px;
.social{
    padding: 10px;
    font-size: 3rem;
    color: white;
    margin: 0 10px;
    border-radius: 2rem;
}

.facebook{
    background-color: #27569C;
}

.twitter{
    background-color: #00AFF1;
}

.instagram{
    background-color: #00739E;
}
@media only screen and (max-width: 500px) {
    padding: 80px;
  }
`;

export default StyledFooter;
