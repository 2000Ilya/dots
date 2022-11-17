import "./App.css";
import { useRef, useState } from "react";
import Item from "./components/Item";
import Scroller from "./components/Scroller";
import { moveLeft, moveRight } from "./services/moveScroller";

const pagesAmount = 5;
const dotsAmount = pagesAmount + 1;
const arr = Array(pagesAmount + 1).fill();

const App = () => {
  const scrollerRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimProcessing, setAnimProcessing] = useState(false);

  const handlePageChange = (diff) => {
    setCurrentPage((prevPage) => {
      const result = prevPage + diff;

      if (result >= 1 && result <= pagesAmount) {
        setAnimProcessing(true);
        if (diff < 0) {
          moveLeft(scrollerRef, pagesAmount, dotsAmount, result, () =>
            setAnimProcessing(false)
          );
        } else {
          moveRight(scrollerRef, pagesAmount, dotsAmount, result, () =>
            setAnimProcessing(false)
          );
        }
        return result;
      }
      return prevPage;
    });
  };

  return (
    <>
      <div className="container">
        {arr.map((elem, index) => {
          if (currentPage !== pagesAmount) {
          }
          return (
            <Item
              key={index}
              isFilledPage={currentPage > index}
              isLastPage={currentPage !== pagesAmount}
            />
          );
        })}
        <Scroller ref={scrollerRef} pagesAmount={pagesAmount} />
      </div>

      <button onClick={() => handlePageChange(-1)} disabled={isAnimProcessing}>
        BACK
      </button>
      <button onClick={() => handlePageChange(1)} disabled={isAnimProcessing}>
        FORW
      </button>
    </>
  );
};

export default App;
