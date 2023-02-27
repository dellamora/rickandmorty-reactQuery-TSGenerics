/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Character } from "../../domain/interfaces";

type Props = {
  rickandmortyAPI: Pick<Character, "image">[];
};

const Grid = ({ rickandmortyAPI }: Props): JSX.Element => {
  return (
    <motion.div id="grid" className="h-fit p-10">
      <div className="grid grid-cols-cards gap-10">
        {rickandmortyAPI.map((character, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: i * 0.1 } }}
              className="relative h-20 w-20 overflow-hidden rounded-lg bg-TextWhite"
              key={`card-${i}`}
            >
              <Image alt="pp" src={character.image} fill />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Grid;
