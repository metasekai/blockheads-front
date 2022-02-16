import { Image } from "@chakra-ui/react";

import ShinobiFemale from "../../assets/img/shinobi-female-full.png";
import ShinobiMale from "../../assets/img/shinobi-male-full.png";
import ZombieFemale from "../../assets/img/zombie-female-full.png";
import ZombieMale from "../../assets/img/zombie-male-full.png";
import CowboyFemale from "../../assets/img/cowboy-female-full.png";
import CowboyMale from "../../assets/img/cowboy-male-full.png";
import Robot from "../../assets/img/robot-full.png";
import Knight from "../../assets/img/knight-full.png";

export default function ImageRender({ item }) {
  switch (item.class) {
    case "knight":
      return (
        <Image
          src={Knight}
          alt={"knight"}
          boxSize={{ sm: "130px", lg: "200px" }}
          m={4}
          objectFit="contain"
          objectPosition="center"
          marginX="auto"
        />
      );
    case "robot":
      return (
        <Image
          src={Robot}
          alt={"knight"}
          boxSize={{ sm: "130px", lg: "200px" }}
          m={4}
          objectFit="contain"
          objectPosition="center"
          marginX="auto"
        />
      );
    case "cowboy":
      if (item.type === "female") {
        return (
          <Image
            src={CowboyFemale}
            alt={"cowboy"}
            boxSize={{ sm: "130px", lg: "200px" }}
            m={4}
            objectFit="contain"
            objectPosition="center"
            marginX="auto"
          />
        );
      } else {
        return (
          <Image
            src={CowboyMale}
            alt={"cowboy"}
            boxSize={{ sm: "130px", lg: "200px" }}
            m={4}
            objectFit="contain"
            objectPosition="center"
            marginX="auto"
          />
        );
      }
    case "zombie":
      if (item.type === "female") {
        return (
          <Image
            src={ZombieFemale}
            alt={"zombie"}
            boxSize={{ sm: "130px", lg: "200px" }}
            m={4}
            objectFit="contain"
            objectPosition="center"
            marginX="auto"
          />
        );
      } else {
        return (
          <Image
            src={ZombieMale}
            alt={"zombie"}
            boxSize={{ sm: "130px", lg: "200px" }}
            m={4}
            objectFit="contain"
            objectPosition="center"
            marginX="auto"
          />
        );
      }
    case "shinobi":
      if (item.type === "female") {
        return (
          <Image
            src={ShinobiFemale}
            alt={"shinobi"}
            boxSize={{ sm: "130px", lg: "200px" }}
            m={4}
            objectFit="contain"
            objectPosition="center"
            marginX="auto"
          />
        );
      } else {
        return (
          <Image
            src={ShinobiMale}
            alt={"shinobi"}
            boxSize={{ sm: "130px", lg: "200px" }}
            m={4}
            objectFit="contain"
            objectPosition="center"
            marginX="auto"
          />
        );
      }
    default:
      return (
        <Image
          src={Knight}
          alt={"knight"}
          boxSize={{ sm: "130px", lg: "200px" }}
          m={4}
          objectFit="contain"
          objectPosition="center"
          marginX="auto"
        />
      );
  }
}
