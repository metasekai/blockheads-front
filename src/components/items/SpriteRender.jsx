import { useEffect, useState, useRef, useCallback } from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';
import { useAnimation } from 'framer-motion';

import {
  ZombieFemaleWalk,
  ZombieMaleWalk,
  ShinobiMaleRun,
  ShinobiFemaleRun,
  RobotRun,
  KnightRun,
  CowboyMaleRun,
  CowboyFemaleRun,
  SpriteSheetFactory,
} from '../sprites/Actions';

// const MotionBox = motion(Box);

export default function SpriteRender({ item }) {
  // const [width, setWidth] = useState(430);
  // const [frames, setFrames] = useState(10);
  // const [maxWidth, setMaxWidth] = useState(4300);
  // const [bgPosition, setBgPosition] = useState(0);
  // const [count, setCount] = useState(0);
  // const controls = useAnimation();

  const [selected, setSelected] = useState(0);
  const [sprites, setSprites] = useState([]);
  const [spritesheet, setSpritesheet] = useState(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const animationRef = useRef(null);

  const animateSprite = useCallback(async () => {
    const interval = setInterval(() => {
      let index = selected + 1;
      if (index >= 10) {
        index = 0;
      }

      // const perFrame = maxWidth / frames;
      // const currentPosition = bgPosition;

      // if (currentPosition >= maxWidth) {
      //   setBgPosition(0);
      // } else {
      //   setBgPosition(currentPosition + perFrame);
      // }

      // console.log('bgPosition', bgPosition + perFrame);

      setSelected(index);
      animationRef.current = interval;
    }, 80);
  }, [selected]);

  useEffect(() => {
    if (sprites.length === 0) {
      switch (item.class) {
        case 'knight':
          setSpritesheet(SpriteSheetFactory.knight);
          setSprites(KnightRun);
          break;
        case 'robot':
          setSpritesheet(SpriteSheetFactory.robot);
          setSprites(RobotRun);
          break;
        case 'cowboy':
          if (item.type === 'female') {
            setSpritesheet(SpriteSheetFactory.cowboyFemale);
            setSprites(CowboyFemaleRun);
          } else {
            setSpritesheet(SpriteSheetFactory.cowboyMale);
            setSprites(CowboyMaleRun);
          }
          break;
        case 'zombie':
          if (item.type === 'female') {
            setSpritesheet(SpriteSheetFactory.zombieFemale);
            setSprites(ZombieFemaleWalk);
          } else {
            setSpritesheet(SpriteSheetFactory.zombieMale);
            setSprites(ZombieMaleWalk);
          }
          break;
        case 'shinobi':
          if (item.type === 'female') {
            setSpritesheet(SpriteSheetFactory.shinobiFemale);
            setSprites(ShinobiFemaleRun);
          } else {
            setSpritesheet(SpriteSheetFactory.shinobiMale);
            setSprites(ShinobiMaleRun);
          }
          break;
        default:
          setSpritesheet(SpriteSheetFactory.knight);
          setSprites(KnightRun);
      }
    }
  }, [item.class, item.type, selected, sprites.length]);

  useEffect(() => {
    if (sprites.length > 0) {
      if (assetsLoaded === false) {
        console.log('preload assets');
        // Preload the images
        sprites.forEach(sprite => {
          const img = new Image();
          img.src = sprite;
        });

        // Preload spritesheet
        console.log('spt', spritesheet);
        const img = new Image();
        img.src = spritesheet;

        setAssetsLoaded(true);
      }
    }
  }, [assetsLoaded, sprites, spritesheet]);

  useEffect(() => {
    if (assetsLoaded) {
      console.log('start animation');
      animateSprite();
      return () => clearInterval(animationRef.current);
      // controls.start({
      //   x: 100,
      //   backgroundPosition: [-0, maxWidth],
      //   transition: { duration: 1, ease: 'linear' },
      // });
    }
  }, [selected, assetsLoaded, animateSprite]);

  // return (
  //   { assetsLoaded } && (
  //     <MotionBox
  //       height={519}
  //       width="100%"
  //       backgroundImage={spritesheet}
  //       backgroundPosition={`-${bgPosition}px 0px;`}
  //       animate={controls}
  //     />
  //   )
  // );
  return (
    { assetsLoaded } && (
      <ChakraImage src={sprites[selected]} alt="nft collections" objectFit={'contain'} boxSize="300px" m={8} />
    )
  );
}
