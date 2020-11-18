import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { WrapperGrid, Logo } from '../';
import Favorites from '../../assets/icons/favorites.svg';
import { useDeviceDetect } from '../../utils';

const NavBarStyled = styled.nav`
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.pink};
  position: fixed;
  width: 100%;
  margin: 0px auto;
  min-height: 60px;
  p {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const RowStyled = styled(Row)`
  min-height: 60px;
`;

const ColStyled = styled(Col)`
  min-height: 60px;
  display: flex;
  align-items: center;
`;

const ColStyledMobile = styled(ColStyled)`
  min-height: 60px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 640px) {
    padding-left: 30px;
  }
`;

const MenuLinksStyled = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

const FavoritesIcon = styled(Favorites)`
  margin-right: 5px;
  position: relative;
  top: 2px;
`;

const LinkStyled = styled.p`
  font-size: 13px;
`;

const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  height: 100%;
  display: table;

  @media only screen and (max-width: 640px) {
    padding-left: 0px;
  }
`;

const ListItemStyled = styled.li`
  display: table-cell;
  padding: 0px 15px;
  height: 100%;
  vertical-align: middle;
  transition: background-color 0.2s linear 0s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.linkHover};
  }

  @media only screen and (max-width: 640px) {
    padding-left: 0px;
  }
`;

const links = [
  {
    id: 1,
    text: '¿Cómo funciona?',
    onMobile: false,
  },
  {
    id: 2,
    text: 'Soy propietario',
    onMobile: false,
  },
  {
    id: 3,
    text: 'Iniciar sesión',
    onMobile: true,
  },
];

const NavBar = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <NavBarStyled>
      <WrapperGrid>
        <RowStyled>
          <ColStyledMobile xs={5} md={2}>
            <Logo />
          </ColStyledMobile>
          <ColStyled xs={3} md={4}>
            <FavoritesIcon />
            <LinkStyled>Favoritos</LinkStyled>
          </ColStyled>
          <MenuLinksStyled xs={4} md={6}>
            <ListStyled>
              {links.map((l) => {
                if (isMobile && !l.onMobile) return null;
                return (
                  <ListItemStyled key={l.id}>
                    <LinkStyled>{l.text}</LinkStyled>
                  </ListItemStyled>
                );
              })}
            </ListStyled>
          </MenuLinksStyled>
        </RowStyled>
      </WrapperGrid>
    </NavBarStyled>
  );
};

export default NavBar;
