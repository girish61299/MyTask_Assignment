import {Extrapolation, interpolate} from 'react-native-reanimated';
import type {IComputedDirectionTypes} from 'react-native-reanimated-carousel';

interface TBaseConfig {
  size: number;
  vertical: boolean;
}

export interface ILayoutConfig {
  /**
   * Control prev/next item offset.
   * @default 100
   */
  parallaxScrollingOffset?: number;
  /**
   * Control prev/current/next item offset.
   * @default 0.8
   */
  parallaxScrollingScale?: number;
  /**
   * Control prev/next item offset.
   * @default Math.pow(parallaxScrollingScale, 2)
   */
  parallaxAdjacentItemScale?: number;
  /**
   * Control vertical offset for unfocused items.
   * @default 50
   */
  parallaxVerticalOffset?: number;
}

export type TParallaxModeProps = IComputedDirectionTypes<{
  /**
   * Carousel Animated transitions.
   */
  mode?: 'parallax';
  modeConfig?: ILayoutConfig;
}>;

export function parallaxLayout(
  baseConfig: TBaseConfig,
  modeConfig: ILayoutConfig = {},
) {
  const {size, vertical} = baseConfig;
  const {
    parallaxScrollingOffset = 100,
    parallaxScrollingScale = 0.8,
    parallaxAdjacentItemScale = parallaxScrollingScale ** 2,
    parallaxVerticalOffset = 20,
  } = modeConfig;

  return (value: number) => {
    'worklet';
    const translateX = interpolate(
      value,
      [-1, 0, 1],
      [-size + parallaxScrollingOffset, 0, size - parallaxScrollingOffset],
    );

    const translateY = interpolate(
      value,
      [-1, 0, 1],
      [-parallaxVerticalOffset, 0, -parallaxVerticalOffset], // Reverse direction
      Extrapolation.CLAMP,
    );

    const zIndex = interpolate(
      value,
      [-1, 0, 1],
      [0, size, 0],
      Extrapolation.CLAMP,
    );

    const scale = interpolate(
      value,
      [-1, 0, 1],
      [
        parallaxAdjacentItemScale,
        parallaxScrollingScale,
        parallaxAdjacentItemScale,
      ],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        vertical
          ? {
              translateY: translateX, // Adjust for vertical layout if needed
            }
          : {
              translateX,
            },
        {
          translateY,
        },
        {
          scale,
        },
      ],
      zIndex,
    };
  };
}
