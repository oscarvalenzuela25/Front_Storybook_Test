import './myLabel.css';

export interface Props {
  /**
   * Label es principalmente el mensaje que quieres que se muestre.
   */
  label: string;
  /**
   * El size es el tamaño del label
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Si quieres todo capitalizado
   */
  allCaps?: boolean;
  /**
   * Colores del Label
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Color customizado
   */
  fontColor?: string;
}

/**
 * Mi primer componente UI en storyBook! Cool
 */
const MyLabel = ({
  label = 'Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
