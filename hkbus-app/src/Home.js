import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {
  return (
        <Carousel interval={null}>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="/images/kmb.webp"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>巴士</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="/images/minibus.jpg"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>小巴</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="/images/mtr.webp"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>港鐵</h3>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
