import React, { useRef } from 'react';
import styled from 'styled-components';
// import { Col, Row } from 'react-styled-flexboxgrid';
import FavoriteOutline from '../../assets/icons/favorite-outline.svg';
import Slider from 'react-styled-carousel';
import Image from 'next/image';
import { useGetWidth, formatPrice } from '../../utils';
import { homeTypes } from '../../types';
import PropTypes from 'prop-types';
const PostContainer = styled.div`
  background-color: white;
  margin-bottom: 25px;
  border-radius: 2px;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px 0px;
  }
`;

const PostPrice = styled.div`
  width: 111px;
  height: 35px;
  display: block;
  position: absolute;
  left: 0px;
  top: 0px;
  padding: 6px 7px;
  box-sizing: border-box;
  font-family: 'Open Sans Bold', sans-serif;
  z-index: 10;
  background-color: white;
`;

const FavoriteIcon = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  float: right;
  outline: none;
  margin: 0;
  svg {
    width: 1.2em;
    position: relative;
    top: 2px;
  }
`;

const Price = styled.h3`
  font-size: 16px;
  float: left;
  margin: 0;
  color: ${({ theme }) => theme.colors.secondary};
`;

const ImageSlide = styled.div`
  width: 100%;
  height: 150px;
  position: relative;

  img {
    width: 100%;
  }
  @media only screen and (max-width: 500px) {
    height: 210px;
  }
`;

const ExclusiveContainer = styled.div`
  width: 100%;
  height: 22px;
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: 'Open Sans Bold', sans-serif;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.secondaryTransparent};
  color: white;

  p {
    margin: 0;
    text-align: center;
    font-size: 14px;
  }
`;

const PostTitle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0;
  padding: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const Amenities = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Amenity = styled.li`
  display: inline-block;
  width: ${(props) => props.width / 5}px;
  height: 32px;
  font-size: 14px;
  padding: 8px 3px;
  box-sizing: border-box;
  border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

const AmenityTitle = styled.p`
  display: inline-block;
  margin: 0;
  margin-right: 5px;
  margin-left: 3px;
  font-size: 13px;
  position: relative;
  bottom: 2px;
`;

const AmenityImg = styled(Image)`
  vertical-align: middle;
  display: inline-block;
  img {
    position: relative;
    top: 5px;
  }
`;

const LeftArrow = styled.button`
  color: #fff;
  position: absolute;
  margin-left: 3px;
  margin-top: 0px;
  width: 16px;
  background-color: #fff;
  left: 0px;

  border: 0;
  cursor: pointer;
  outline: none;
  z-index: 1;
  height: 100%;
  background-color: transparent;
  :before {
    content: '';
    position: absolute;
    left: 1px;
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    border-top: solid 2px #fff;
    border-right: solid 2px #fff;
    transform: rotate(-135deg);
  }
  :after {
    content: '';
    position: absolute;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    opacity: 0.39;
  }
`;

const RightArrow = styled.button`
  color: #fff;
  position: absolute;
  margin-right: 3px;
  margin-top: 0px;
  width: 16px;
  background-color: #fff;
  right: 0px;

  border: 0;
  cursor: pointer;
  outline: none;
  z-index: 1;
  height: 100%;
  background-color: transparent;
  :before {
    content: '';
    position: absolute;
    right: 1px;
    top: calc(50% - 5px);
    width: 10px;
    height: 10px;
    border-top: solid 2px #fff;
    border-right: solid 2px #fff;
    transform: rotate(45deg);
  }
  :after {
    content: '';
    position: absolute;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.textPrimary};
    opacity: 0.39;
  }
`;

const amenities = ['bedrooms', 'bathrooms', 'parkings', 'pet_friendly', 'sqare_mts'];

const responsive = [
  { breakPoint: 1280, cardsToShow: 1 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 1 },
];

const renderAmenity = (type, value) => {
  switch (type) {
    case 'bedrooms':
      return (
        <div>
          <AmenityTitle>{value[type]}</AmenityTitle>
          <AmenityImg src="/images/bedroom.png" width={18} height={15} alt="bedroom" />
        </div>
      );
    case 'bathrooms':
      return (
        <div>
          <AmenityTitle>{value[type]}</AmenityTitle>
          <AmenityImg src="/images/bathrooms.png" width={18} height={15} alt="bathrooms" />
        </div>
      );
    case 'parkings':
      return (
        <div>
          <AmenityTitle>{value[type]}</AmenityTitle>
          <AmenityImg src="/images/parking.png" width={18} height={15} alt="parking" />
        </div>
      );
    case 'pet_friendly':
      return (
        <div>
          <AmenityTitle>{value[type] ? 'Si' : 'No'}</AmenityTitle>
          <AmenityImg src="/images/pet.png" width={18} height={15} alt="pet friendly" />
        </div>
      );
    case 'sqare_mts':
      return (
        <div>
          <AmenityTitle>
            {value[type]}m<sup>2</sup>
          </AmenityTitle>
        </div>
      );
    default:
      return null;
  }
};

const Post = ({
  abbr_address,
  bathrooms,
  bedrooms,
  is_homie_exclusive,
  name,
  parkings,
  pet_friendly,
  photos,
  price,
  sqare_mts,
  id,
  onHover,
}) => {
  const componentRef = useRef();
  const width = useGetWidth(componentRef);

  return (
    <PostContainer ref={componentRef} onMouseEnter={() => onHover(id)}>
      <PostPrice>
        <Price>${formatPrice(price)}</Price>
        <FavoriteIcon>
          <FavoriteOutline />
        </FavoriteIcon>
      </PostPrice>
      <Slider
        showDots={false}
        padding={'0'}
        responsive={responsive}
        LeftArrow={<LeftArrow />}
        RightArrow={<RightArrow />}
        autoSlide={false}
        DotsWrapper={() => null}
        cardsToShow={1}>
        {photos.map((p) => (
          <ImageSlide key={p}>
            <img src={p} alt={name} />
            {is_homie_exclusive && (
              <ExclusiveContainer>
                <p>Exclusivo de Homie</p>
              </ExclusiveContainer>
            )}
          </ImageSlide>
        ))}
      </Slider>

      <div>
        <PostTitle>{abbr_address}</PostTitle>
      </div>
      <Amenities>
        {amenities.map((amenity) => (
          <Amenity key={amenity} width={width}>
            {renderAmenity(amenity, {
              bathrooms,
              pet_friendly,
              bedrooms,
              parkings,
              sqare_mts,
            })}
          </Amenity>
        ))}
      </Amenities>
    </PostContainer>
  );
};

Post.propTypes = {
  ...homeTypes,
  onHover: PropTypes.func,
};

export default Post;
