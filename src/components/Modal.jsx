import React, { useContext, useState } from "react";
import GameOver from "./GameOver";
import "../styles/Modal.css";
import { AppContext } from "../App";
export default function Modal(props) {
  const { gameOver, gameStart } = useContext(AppContext);
  return (
    <>
      {gameOver.gameOver && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h1 className="modal-header">Game Over</h1>
            {props.content}
          </div>
        </div>
      )}
      {!gameStart && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h1 className="modal-header">Pokemon Memory!</h1>
            {props.content}
          </div>
        </div>
      )}
    </>
  );
}
