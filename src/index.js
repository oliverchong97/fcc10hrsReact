import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const firstBook = {
  title: "I Love You To The Moon and Back",
  author: "Amelia Hepworth",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
};

const secondBook = {
  title: "Ready Player Two: A Novel",
  author: "Ernest Cline",
  img:
    "https://images-na.ssl-images-amazon.com/images/I/811W9hHXiwL._AC_UL200_SR200,200_.jpg",
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
};

const BookList = () => {
  return (
    <>
      <section className="booklist">
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        />
        <Book
          img={secondBook.img}
          title={secondBook.title}
          author={secondBook.author}
        />
      </section>
    </>
  );
};

ReactDOM.render(
  <BookList />,

  document.getElementById("root")
);
