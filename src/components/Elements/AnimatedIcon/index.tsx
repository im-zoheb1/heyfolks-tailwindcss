import React from 'react'
import { ICONS, TRIGGER } from 'types/icons';
import lottieWeb from 'lottie-web';
import lordIconElement from 'lord-icon-element';

interface Props {
  name: ICONS,
  trigger?: TRIGGER,
  primaryColor?: string,
  secondaryColor?: string,
  stroke?: [number, string],
  size?: [number, string]
}

lordIconElement.defineLordIconElement(lottieWeb.loadAnimation);

const AnimatedIcon: React.FC = (): JSX.Element => {
  return (
    <>
    </>
  )
}

export default AnimatedIcon;
