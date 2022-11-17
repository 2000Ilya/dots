const dotWidth = "30px";

export const moveLeft = (
  scrollerRef,
  pagesAmount,
  dotsAmount,
  currentPage,
  callback
) => {
  const gapWidth = `(100% - (${dotsAmount} * ${dotWidth})) / ${pagesAmount}`;

  scrollerRef.current.style.right = "auto";
  scrollerRef.current.style.left = `calc((${gapWidth} * ${currentPage}) + (${currentPage} * ${dotWidth}))`;
  scrollerRef.current.style.width = dotWidth;

  setTimeout(() => {
    scrollerRef.current.style.left = "auto";
    scrollerRef.current.style.right = `calc(${gapWidth} * (${
      dotsAmount - 1 - currentPage
    }) + (${dotsAmount - 1 - currentPage} * ${dotWidth}))`;
    scrollerRef.current.style.width = null;
    callback();
  }, 400);
};

export const moveRight = (
  scrollerRef,
  pagesAmount,
  dotsAmount,
  currentPage,
  callback
) => {
  const gapWidth = `(100% - (${dotsAmount} * ${dotWidth})) / ${pagesAmount}`;

  scrollerRef.current.style.left = "auto";
  scrollerRef.current.style.right = `calc(${gapWidth} * (${
    dotsAmount - currentPage
  }) + (${dotsAmount - currentPage} * ${dotWidth}))`;
  scrollerRef.current.style.width = dotWidth;

  setTimeout(() => {
    scrollerRef.current.style.right = "auto";
    scrollerRef.current.style.left = `calc((${gapWidth} * ${
      currentPage - 1
    }) + (${currentPage - 1} * ${dotWidth}))`;
    scrollerRef.current.style.width = null;
    callback();
  }, 400);
};
