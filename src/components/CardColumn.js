import Title from "antd/lib/typography/Title";
import React from "react";
import { ActionCard } from "../atoms/ActionCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Divider } from "antd";

function RightArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightCircleOutlined
      className={className}
      style={{ ...style, display: "block", fontSize: "20px", color: "grey" }}
      onClick={onClick}
    />
  );
}

function LeftArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftCircleOutlined
      className={className}
      style={{ ...style, display: "block", fontSize: "20px", color: "grey" }}
      onClick={onClick}
    />
  );
}

var settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  rows: 2,
  nextArrow: (
    <RightArrow style={{ color: "black", fontSize: "20px" }}></RightArrow>
  ),
  prevArrow: (
    <LeftArrow style={{ color: "black", fontSize: "20px" }}></LeftArrow>
  ),
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const CardColumn = ({ deck, title, children }) => (
  <div>
    <Divider></Divider>

    <Title level={2}>
      {`${title} 
      (${deck?.length})`}
    </Title>
    {children}
    <Divider></Divider>

    <Slider {...settings}>
      {deck
        ?.sort((a, b) => a.card_number - b.card_number)
        .map((card) => (
          <ActionCard
            deck={deck}
            key={`${card._id}${deck}`}
            card={card}
          ></ActionCard>
        ))}
    </Slider>
  </div>
);

export default CardColumn;
