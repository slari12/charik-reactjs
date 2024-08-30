useEffect(() => {
  const testim = document.getElementById("testim"),
    testimDots = Array.from(document.getElementById("testim-dots").children),
    testimContent = Array.from(
      document.getElementById("testim-content").children
    ),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500;

  let currentSlide = 0;
  let currentActive = 0;
  let testimTimer;
  let touchStartPos;
  let touchEndPos;
  const ignoreTouch = 30;

  const playSlide = (slide) => {
    for (let k = 0; k < testimDots.length; k++) {
      testimContent[k].classList.remove("active", "inactive");
      testimDots[k].classList.remove("active");
    }

    if (slide < 0) {
      slide = currentSlide = testimContent.length - 1;
    }

    if (slide > testimContent.length - 1) {
      slide = currentSlide = 0;
    }

    if (currentActive !== currentSlide) {
      testimContent[currentActive].classList.add("inactive");
    }
    testimContent[slide].classList.add("active");
    testimDots[slide].classList.add("active");

    currentActive = currentSlide;

    clearTimeout(testimTimer);
    testimTimer = setTimeout(() => {
      playSlide((currentSlide += 1));
    }, testimSpeed);
  };

  testimLeftArrow.addEventListener("click", () => {
    playSlide((currentSlide -= 1));
  });

  testimRightArrow.addEventListener("click", () => {
    playSlide((currentSlide += 1));
  });

  testimDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      playSlide((currentSlide = index));
    });
  });

  playSlide(currentSlide);

  document.addEventListener("keyup", (e) => {
    switch (e.keyCode) {
      case 37:
        testimLeftArrow.click();
        break;
      case 39:
        testimRightArrow.click();
        break;
      default:
        break;
    }
  });

  testim.addEventListener("touchstart", (e) => {
    touchStartPos = e.changedTouches[0].clientX;
  });

  testim.addEventListener("touchend", (e) => {
    touchEndPos = e.changedTouches[0].clientX;
    const touchPosDiff = touchStartPos - touchEndPos;

    if (touchPosDiff > ignoreTouch) {
      testimLeftArrow.click();
    } else if (touchPosDiff < -ignoreTouch) {
      testimRightArrow.click();
    }
  });

  return () => {
    // Cleanup event listeners on component unmount
    testimLeftArrow.removeEventListener("click", () => {});
    testimRightArrow.removeEventListener("click", () => {});
    document.removeEventListener("keyup", () => {});
    testim.removeEventListener("touchstart", () => {});
    testim.removeEventListener("touchend", () => {});
    clearTimeout(testimTimer);
  };
}, []);
