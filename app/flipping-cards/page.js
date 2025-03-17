"use client";

import React, { useEffect, useState } from "react";
import AboutTask from "../AboutTask";

const FlippingCards = () => {
  const cardArr = ["A", "C", "D", "A", "B", "B", "C", "D"];
  const [flippedIndex, setFlippedIndex] = useState([]);
  const [chances, setChances] = useState(0);
  const [cardObj, setCardObj] = useState(
    cardArr.map((card) => {
      return {
        name: card,
        isOpen: false,
      };
    })
  );
  let totalChances = 3;
  const flippedCard = cardObj?.filter((card) => card?.isOpen === true);
  let cardsGroupIndex = cardObj?.filter((card) => card?.isOpen === true);

  const handleCardFlip = (index) => {
    if (cardObj[index].isOpen || flippedIndex.length === 2) return;
    if (chances < 3) {
      setFlippedIndex([...flippedIndex, index]);
      const duplicatedCardObjArr = [...cardObj];
      duplicatedCardObjArr[index].isOpen = !duplicatedCardObjArr[index].isOpen;
      setCardObj(duplicatedCardObjArr);
    } else {
      alert("Bs kr bhai haar gaya tu");
      setTimeout(() => {
        setCardObj(
          cardObj.map((card) => {
            if (card.isOpen === true) {
              return (card.isOpen = false);
            }
          })
        );
      }, 600);
    }
  };

  useEffect(() => {
    if (flippedIndex.length === 2) {
      const [firstIndex, secondIndex] = flippedIndex;
      if (cardObj[firstIndex].name !== cardObj[secondIndex].name) {
        setTimeout(() => {
          if (chances < totalChances) {
            const newCardObj = [...cardObj];
            newCardObj[firstIndex].isOpen = false;
            newCardObj[secondIndex].isOpen = false;
            setCardObj(newCardObj);
            setChances((prev) => (prev += 1));
          }
        }, 1000);
      }
      setTimeout(() => setFlippedIndex([]), 800);
    }
  }, [flippedCard]);

  useEffect(() => {
    alert(`hi! you have ${totalChances} chances`);
  });

  useEffect(() => {
    if (cardsGroupIndex.length === cardArr.length && chances < totalChances) {
      alert("You win pasha!!");
      setTimeout(() => {
        setCardObj(
          cardObj.map((card) => {
            if (card.isOpen === true) {
              return (card.isOpen = false);
            }
          })
        );
      }, 600);
    }
  }, [flippedCard]);

  return (
    <div className="flex flex-col p-10 items-center justify-center">
      <AboutTask
        text={
          "This task involves creating a Flipping Cards game using React, where players match pairs of cards within a limited number of chances. The game consists of an array of cards, each with a letter, and the player can flip two cards at a time. If the two flipped cards match, they remain open; otherwise, they flip back after a short delay."
        }
      />
      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 place-items-center gap-10 p-10 font-semibold">
        {cardArr.map((card, index) => (
          <div
            className="border-2 border-white w-[200px] h-[300px] flex items-center justify-center cursor-pointer"
            key={index}
            onClick={() => handleCardFlip(index)}
          >
            {cardObj[index]?.isOpen ? (
              card.toUpperCase()
            ) : (
              <span>click to reveal</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlippingCards;
