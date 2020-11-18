import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
// import { Col, Row } from 'react-styled-flexboxgrid';
import FavoriteOutline from '../../assets/icons/favorite-outline.svg';
import Slider from 'react-styled-carousel';
import Image from 'next/image';

const PostContainer = styled.div`
  background-color: white;
  margin-bottom: 15px;
  border-radius: 2px;
  transition: all 0.2s ease-in-out 0s;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px;

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
    font-family: 'Open Sans Bold',sans-serif;
    z-index:10;
    background-color:white;
}
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
    font-family: 'Open Sans Bold',sans-serif;
    z-index:10;
    background-color: ${({ theme }) => theme.colors.secondaryTransparent};
    color: white;

    p {
        margin: 0;
        text-align: center;
        font-size: 14px;
    }
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
  padding: 8px 5px;
  box-sizing: border-box;
  border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

const AmenityTitle = styled.p`
  display: inline-block;
  margin: 0;
  margin-right: 5px;
  margin-left: 3px;
  font-size: 14px;
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

const photos = [
  'https://s3-us-west-2.amazonaws.com/homie-development/assets/home/5c8933b54d35bf523980ffb6/954d6e63-6078-4659-a0e6-91baa2d84005_medium.jpg?1552608360',
  'https://s3-us-west-2.amazonaws.com/homie-development/assets/home/5c8933b54d35bf523980ffb6/07ee4efc-5c03-41d9-8b2a-036f56987043_medium.jpg?1552608357',
  'https://s3-us-west-2.amazonaws.com/homie-development/assets/home/5c8933b54d35bf523980ffb6/5aae1f4f-a6a7-4597-a260-43f1b34e7eb3_medium.jpg?1552608357',
];

const amenities = ['bedrooms', 'bathrooms', 'parkings', 'pet_friendly', 'square_mts'];

const responsive = [
  { breakPoint: 1280, cardsToShow: 1 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 1 },
];

const renderAmenity = (type) => {
  switch (type) {
    case 'bedrooms':
      return (
        <div>
          <AmenityTitle>2</AmenityTitle>
          <AmenityImg src="/images/bedroom.png" width={22} height={15} alt="bedroom" />
        </div>
      );
    case 'bathrooms':
      return (
        <div>
          <AmenityTitle>2</AmenityTitle>
          <AmenityImg src="/images/bathrooms.png" width={22} height={15} alt="bathrooms" />
        </div>
      );
    case 'parkings':
      return (
        <div>
          <AmenityTitle>1</AmenityTitle>
          <AmenityImg src="/images/parking.png" width={22} height={15} alt="parking" />
        </div>
      );
    case 'pet_friendly':
      return (
        <div>
          <AmenityTitle>Si</AmenityTitle>
          <AmenityImg src="/images/pet.png" width={22} height={15} alt="pet friendly" />
        </div>
      );
    case 'square_mts':
      return (
        <div>
          <AmenityTitle>
            25m<sup>2</sup>
          </AmenityTitle>
        </div>
      );
    default:
      return null;
  }
};

const Post = () => {
  const [width, setWidth] = useState(0);
  const componentRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      setWidth(componentRef.current.offsetWidth);
    };

    if (componentRef.current) {
      setWidth(componentRef.current.offsetWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [componentRef]);

  return (
    <PostContainer ref={componentRef}>
      <PostPrice>
        <Price>$3,000</Price>
        <FavoriteIcon>
          <FavoriteOutline />
        </FavoriteIcon>
      </PostPrice>
      <Slider
        showDots={false}
        padding={0}
        responsive={responsive}
        LeftArrow={<LeftArrow />}
        RightArrow={<RightArrow />}
        autoSlide={false}
        cardsToShow={1}>
        {photos.map((p) => (
          <ImageSlide key={p}>
            <img src={p} alt="Yacatas 403" />
            <ExclusiveContainer>
              <p>Exclusivo de Homie</p>
            </ExclusiveContainer>
          </ImageSlide>
        ))}
      </Slider>
      <div>
        <PostTitle>Yacatas 403</PostTitle>
      </div>
      <Amenities>
        {amenities.map((a) => (
          <Amenity key={a} width={width}>
            {renderAmenity(a)}
          </Amenity>
        ))}
      </Amenities>
    </PostContainer>
  );
};

export default Post;
