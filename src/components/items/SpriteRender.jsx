import { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

import {
  ZombieFemaleWalk,
  ZombieMaleWalk,
  ShinobiMaleRun,
  ShinobiFemaleRun,
  RobotRun,
  KnightRun,
  CowboyMaleRun,
  CowboyFemaleRun,
} from "../sprites/Actions";

export default function SpriteRender({ item }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let index = selected + 1;
      if (index >= 10) {
        index = 0;
      }

      setSelected(index);
    }, 80);
    return () => clearInterval(interval);
  }, [selected]);

  switch (item.class) {
    case "knight":
      return (
        <Image
          src={KnightRun[selected]}
          alt="nft collections"
          objectFit={"contain"}
          boxSize="300px"
          m={8}
        />
      );
    case "robot":
      return (
        <Image
          src={RobotRun[selected]}
          alt="nft collections"
          objectFit={"contain"}
          boxSize="300px"
          m={8}
        />
      );
    case "cowboy":
      if (item.type === "female") {
        return (
          <Image
            src={CowboyFemaleRun[selected]}
            alt="nft collections"
            objectFit={"contain"}
            boxSize="300px"
            m={8}
          />
        );
      } else {
        return (
          <Image
            src={CowboyMaleRun[selected]}
            alt="nft collections"
            objectFit={"contain"}
            boxSize="300px"
            m={8}
          />
        );
      }
    case "zombie":
      if (item.type === "female") {
        return (
          <Image
            src={ZombieFemaleWalk[selected]}
            alt="nft collections"
            objectFit={"contain"}
            boxSize="300px"
            m={8}
          />
        );
      } else {
        return (
          <Image
            src={ZombieMaleWalk[selected]}
            alt="nft collections"
            objectFit={"contain"}
            boxSize="300px"
            m={8}
          />
        );
      }
    case "shinobi":
      if (item.type === "female") {
        return (
          <Image
            src={ShinobiFemaleRun[selected]}
            alt="nft collections"
            objectFit={"contain"}
            boxSize="300px"
            m={8}
          />
        );
      } else {
        return (
          <Image
            src={ShinobiMaleRun[selected]}
            alt="nft collections"
            objectFit={"contain"}
            boxSize="300px"
            m={8}
          />
        );
      }
    default:
      return (
        <Image
          src={KnightRun[selected]}
          alt="nft collections"
          objectFit={"contain"}
          boxSize="300px"
          m={8}
        />
      );
  }
}
