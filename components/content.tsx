import type { NextPage } from "next";
import { useCallback } from "react";
import { Button, IconButton } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Content: NextPage = () => {
  const onButtonSolidTextAndIconClick = useCallback(() => {
    window.location.href = "https://game.starknopoly.com/";
  }, []);

  return (
    <main
      className="w-[800px] h-[741.07px] flex flex-col items-center justify-start gap-[24px] text-center text-31xl text-gold font-americancheese sm:pl-5 sm:pr-5 sm:box-border"
      id="game"
    >
      <h1 className="m-0 relative text-inherit tracking-[0.08em] font-normal font-inherit text-left [text-shadow:0px_4px_0px_#2e131e]">
        starknopoly
      </h1>
      <img
        className="relative w-[812px] h-[448px] object-cover"
        alt=""
        src="/screenshot.webp"
      />
      <h3 className="m-0 self-stretch relative text-5xl leading-[24px] font-normal font-inter sm:text-xl sm:leading-[24px] sm:text-center">
        A strategic and social fully-onchain monopoly game
      </h3>
      <Button
        className="cursor-pointer"
        name="play-button"
        id="play"
        colorScheme="yellow"
        size="md"
        variant="solid"
        rightIcon={<ArrowForwardIcon />}
        onClick={onButtonSolidTextAndIconClick}
      >
        Play
      </Button>
      <div className="flex flex-row items-center justify-center gap-[9px] text-base">
        <div className="relative leading-[24px] [text-shadow:0px_4px_0px_#2e131e]">
          power by
        </div>
        <img
          className="relative w-[49px] h-[26px] overflow-hidden shrink-0"
          alt=""
          src="/dojo-1.svg"
        />
        <img
          className="relative w-[150px] h-[34.07px] overflow-hidden shrink-0"
          alt=""
          src="/starknet-1.svg"
        />
      </div>
    </main>
  );
};

export default Content;
