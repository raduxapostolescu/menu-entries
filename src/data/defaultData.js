import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";

export const defaultData = {
  sidebar: [
    { id: 1, text: "Home", icon: <AiIcons.AiFillHome /> },
    { id: 1, text: "Food Menu", icon: <BiIcons.BiFoodMenu /> },
    { id: 1, text: "Drinks Menu", icon: <BiIcons.BiDrink /> },
    { id: 1, text: "Nutrition", icon: <IoIcons.IoMdBody /> },
    { id: 1, text: "Contact", icon: <IoIcons.IoMdContacts /> },
  ],
  menuFood: [
    {
      id: 1,
      name: "Lorem Ipsum",
      price: "$20",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Lorem Ipsum",
      price: "$15",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Lorem Ipsum",
      price: "$10",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Lorem Ipsum",
      price: "$8",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 5,
      name: "Lorem Ipsum",
      price: "$30",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 6,
      name: "Lorem Ipsum",
      price: "$55",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 7,
      name: "Lorem Ipsum",
      price: "$12",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
    {
      id: 8,
      name: "Lorem Ipsum",
      price: "$9",
      buttonText: "Add to cart",
      img: "https://picsum.photos/200",
    },
  ],
};
