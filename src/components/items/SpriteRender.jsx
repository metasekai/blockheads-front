import { useEffect, useState, useRef, useCallback } from 'react';
import { Image as ChakraImage } from '@chakra-ui/react';

import {
  ZombieFemaleWalk,
  ZombieMaleWalk,
  ShinobiMaleRun,
  ShinobiFemaleRun,
  RobotRun,
  KnightRun,
  CowboyMaleRun,
  CowboyFemaleRun,
} from '../sprites/Actions';

export default function SpriteRender({ item }) {
  const [selected, setSelected] = useState(0);
  const [sprites, setSprites] = useState([]);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const animationRef = useRef(null);

  const animateSprite = useCallback(async () => {
    const interval = setInterval(() => {
      let index = selected + 1;
      if (index >= 10) {
        index = 0;
      }

      setSelected(index);
      animationRef.current = interval;
    }, 80);
  }, [selected]);

  useEffect(() => {
    if (sprites.length === 0) {
      switch (item.class) {
        case 'knight':
          setSprites(KnightRun);
          break;
        case 'robot':
          setSprites(RobotRun);
          break;
        case 'cowboy':
          if (item.type === 'female') {
            setSprites(CowboyFemaleRun);
          } else {
            setSprites(CowboyMaleRun);
          }
          break;
        case 'zombie':
          if (item.type === 'female') {
            setSprites(ZombieFemaleWalk);
          } else {
            setSprites(ZombieMaleWalk);
          }
          break;
        case 'shinobi':
          if (item.type === 'female') {
            setSprites(ShinobiFemaleRun);
          } else {
            setSprites(ShinobiMaleRun);
          }
          break;
        default:
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
          img.src = sprite.src;
        });

        setAssetsLoaded(true);
      }
    }
  }, [assetsLoaded, sprites]);

  useEffect(() => {
    if (assetsLoaded) {
      // console.log('start animation');
      animateSprite();
      return () => clearInterval(animationRef.current);
    }
  }, [selected, assetsLoaded, animateSprite]);

  return (
    { assetsLoaded } && (
      <ChakraImage src={sprites[selected]} alt="nft collections" objectFit={'contain'} boxSize="300px" m={8} />
    )
  );
}
