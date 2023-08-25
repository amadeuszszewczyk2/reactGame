// src/components/GuessGame.js

import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f7f7f7;
  border-radius: 5px;
  padding: 20px;
  width: 300px;
  margin: 0 auto;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

function GuessGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Zgadnij liczbę od 1 do 100!");

  const handleGuess = () => {
    if (parseInt(guess) === number) {
      setMessage("Gratulacje! Zgadłeś!");
    } else if (parseInt(guess) < number) {
      setMessage("Za mało!");
    } else {
      setMessage("Za dużo!");
    }
  };

  return (
    <Container>
      <h2>Zgadnij liczbę!</h2>
      <Input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
      />
      <Button onClick={handleGuess}>Sprawdź!</Button>
      <p>{message}</p>
    </Container>
  );
}

export default GuessGame;
