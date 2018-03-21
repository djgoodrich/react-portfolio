import React from "react";
import "./portfolio.css";
import Hamburger from "./images/hamburger.png";
import BlogReview from "./images/Blog-review-pic.png";
import LynxTrain from "./images/lynxtrain.png";
import TodoList from "./images/todolist.png";

const Portfolio = () => {
  return (
    <div className="portfolio-background">
      <h2 id="heading">Portfolio</h2>
      <div className="portfolio-grid">
      <div className="card">
        <a href="https://stark-hollows-20874.herokuapp.com/"><img className="card-img-top" src={BlogReview} alt="Blog Review"/></a>
        <div className="card-body">
          <h4 className="card-title">Blog-Review</h4>
          <p className="card-text">
            Website created with my team that allows users to login and review
            their favorite blogs or add new blogs if they are currently not in
            our database.
          </p>
        </div>
      </div>
      <div className="card">
        <a href="https://djgoodrich.github.io/CharlotteLynxDemo/"><img className="card-img-top" src={LynxTrain} alt="Lynx Train Schedule" /></a>
        <div className="card-body">
          <h4 className="card-title">Lynx Train Scheduler</h4>
          <p className="card-text">
          Built with Firebase, moment.js, bootstrap, and jquery this app
          is a Demo that allow users to input a train schedule that automatically updates 
          the train schedule
          </p>
        </div>
      </div>
      <div className="card">
        <a href="https://github.com/djgoodrich/nom-nom-burger"><img className="card-img-top" src={Hamburger} alt="Devour Da Burger"/></a>
        <div className="card-body">
          <h4 className="card-title">Eat-Da-Burger</h4>
          <p className="card-text">
            CRUD Demo where users can add burgers to a database and be displayed on page 
            and deleted and updated on page after devour button is clicked
          </p>
        </div>
      </div>
      <div className="card">
        <a href="https://djgoodrich.github.io/react-todo-localStorage"><img className="card-img-top" src={TodoList} alt="Todo List" /></a>
        <div className="card-body">
          <h4 className="card-title">React Todo List</h4>
          <p className="card-text">
            Using the React Library to create a Todo List app that allows you to add and remove items to your list and be saved in your browser's local storage. Click on image for demo!
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Portfolio;
