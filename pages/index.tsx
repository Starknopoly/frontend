import type { NextPage } from "next";
import HeaderCardForm from "../components/header-card-form";
import Content from "../components/content";

const Landing: NextPage = () => {
  return (
    <div className="relative bg-purple w-full min-h-screen overflow-hidden flex flex-col py-5 pr-7 pl-[27px] box-border items-center justify-start gap-[12px]">
      <HeaderCardForm />
      <Content />
    </div>
  );
};

export default Landing;
