import type { NextPage } from "next";
import { useCallback } from "react";

const HeaderCardForm: NextPage = () => {
  const onGitbookClick = useCallback(() => {
    window.open("https://starknopoly.gitbook.io/starknopoly/");
  }, []);

  const onTelegramClick = useCallback(() => {
    window.open("https://t.me/starknopoly");
  }, []);

  const onTwitterClick = useCallback(() => {
    window.open("https://twitter.com/stark_nopoly");
  }, []);

  return (
    <header className="self-stretch relative h-14 overflow-hidden shrink-0">
      <img
        className="absolute top-[0px] left-[0px] w-[52px] h-[65px] object-cover"
        alt=""
        src="/starknolopylogo-1@2x.jpg"
      />
      <div className="absolute top-[6px] right-[0px] flex flex-row items-center justify-start gap-[18px]">
        <img
          className="relative w-[54px] h-[38px] cursor-pointer"
          alt=""
          src="/gitbook.svg"
          onClick={onGitbookClick}
        />
        <img
          className="relative w-[52px] h-[50px] cursor-pointer"
          alt=""
          src="/telegram.svg"
          onClick={onTelegramClick}
        />
        <img
          className="relative w-[52px] h-[42px] cursor-pointer"
          alt=""
          src="/twitter.svg"
          onClick={onTwitterClick}
        />
      </div>
    </header>
  );
};

export default HeaderCardForm;
