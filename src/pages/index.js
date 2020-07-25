/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import React, { useState, useEffect, useRef, createRef } from "react";
import { rem } from "@src/theme";
import SEO from "@src/components/SEO";
import { countries } from "@src/data";
const IndexPage = (props) => {
  const [country, setCountry] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [topPos, setTopPos] = useState(0);
  const [leftPos, setLeftPos] = useState(0);

  const [sortOption, setSortOption] = useState(null);
  const [stampImage, setStampImage] = useState(null);

  const parentRefs = useRef(countries.map(() => createRef()));

  const onCountryHover = (c, index) => {
    setCountry(c);
    setTopPos(getRandomTop(parentRefs.current[index]));
    setLeftPos(getRandomLeft(parentRefs.current[index]));
  };
  const onCountryLeave = (c) => {
    setCountry(null);
    setCurrentImage(null);
  };
  const onSortSelect = (o) => setSortOption(o);

  useEffect(() => {
    if (country) {
      if (country.stamps.length === 1) {
        setCurrentImage(0);
        return;
      }
      if (currentImage === null) {
        setCurrentImage(0);
      }
      const next =
        currentImage === 0 ? 1 : (currentImage + 1) % country.stamps.length;
      const id = setInterval(() => setCurrentImage(next), 1500);
      return () => clearInterval(id);
    }
  }, [currentImage, country]);
  const getRandomTop = (parentRef) =>
    `${Math.floor(Math.random() * (parentRef.current.clientHeight - 24)) +
      1}px`;
  const getRandomLeft = (parentRef) =>
    `${Math.floor(Math.random() * parentRef.current.clientHeight) + 1}px`;

  return (
    <div
      sx={{
        width: "95%",
        maxWidth: rem(1380),
        mx: "auto",
        mt: [rem(30), null, rem(125)],
        pb: [rem(30), null, rem(125)],
      }}
    >
      <SEO defaultTitle="Home" location={props.location} />
      <ul
        sx={{
          margin: 0,
          padding: 0,
          display: "flex",
          listStyle: "none",
          flexWrap: "wrap",
        }}
      >
        {countries.map((stamp, index) => (
          <li
            tabIndex={0}
            ref={parentRefs.current[index]}
            onMouseEnter={() => onCountryHover(stamp, index)}
            onMouseLeave={onCountryLeave}
            onFocus={() => onCountryHover(stamp, index)}
            onFocusLeave={onCountryLeave}
            sx={{
              mr: rem(40),
              mb: rem(-24),
              "&:hover, &:focus": {
                color: "green",
                cursor: "none",
              },
              transition: "color 200ms linear",
              fontSize: rem(65),
              position: "relative",
            }}
          >
            {stamp.name.toUpperCase()}

            <img
              src={country ? country.stamps[currentImage] : null}
              sx={{
                display:
                  country && country.name === stamp.name ? "block" : "none",
                position: "absolute",
                zIndex: 2,
                maxWidth: rem(190),
                top: topPos,
                left: leftPos,
              }}
            ></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default IndexPage;
