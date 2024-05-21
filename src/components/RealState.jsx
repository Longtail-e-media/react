import React from "react";
import RealStateSlider from "./ui/RealStateSlider";

const RealState = () => {
  const properties = [
    {
      name: "@@Gorgeous Apartment Building1",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building2",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building3",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building4",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building5",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building6",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building7",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building8",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building9",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "@@Gorgeous Apartment Building10",
      type: "new",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood1",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood2",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood3",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood4",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood5",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood6",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood7",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood8",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
    {
      name: "Neighborhood9",
      type: "sale",
      price: "$1000",
      address: "Kathmandu",
      beds: 1,
      baths: 3,
      area: 1150,
      img: "https://longtail.info/photolongtail/images/gallery/galleryimages/zbHzS-img_3856-hdr.jpg",
    },
  ];

  const newProperties = properties.filter(
    (property) => property.type === "new"
  );
  const saleProperties = properties.filter(
    (property) => property.type === "sale"
  );

  return (
    <>
      <RealStateSlider items={newProperties} itemsPerSlide={5} />

      <div className="container mx-auto">
        <RealStateSlider items={newProperties} itemsPerSlide={3} />
      </div>

      <div className="container mx-auto">
        <RealStateSlider items={saleProperties} itemsPerSlide={3} />
      </div>
    </>
  );
};

export default RealState;
