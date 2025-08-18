"use client";
import { Carousel } from "react-bootstrap";
import Link from "next/link";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="/images/Nike.jpg" alt="Nike" />
        <Carousel.Caption>
          <h5>Nike Collection</h5>
          <p>Step up your game with Nike shoes</p>
          <Link href="/shop" className="btn btn-custom text-white">
            Shop Now
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src="/images/shoes.jpg" alt="Adidas" />
        <Carousel.Caption>
          <h5>Adidas Ultraboost</h5>
          <p>Experience ultimate comfort and style</p>
          <Link href="/shop" className="btn btn-custom text-white">
            Shop Now
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Vans Old Skool.jpg"
          alt="Vans"
        />
        <Carousel.Caption>
          <h5>Vans Old Skool</h5>
          <p>Classic style for everyday wear</p>
          <Link href="/shop" className="btn btn-custom text-white">
            Shop Now
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
