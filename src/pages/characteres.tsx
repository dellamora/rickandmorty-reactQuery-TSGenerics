/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import Image from "next/image";
import SearchComponent from "../common/components/search";
import CardCharactere from "../common/components/cardCharactere";

/* import { Container } from "./styles"; */

const Characteres: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-72 h-56">
      <Image src="/portalRAM.png" fill alt="rick and morty title"/>
      </div>
      <SearchComponent/>
      <CardCharactere/>
    </div>
  );
};

export default Characteres;