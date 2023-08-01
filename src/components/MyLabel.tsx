import "./mylabel.css";

export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * Si quiere todo capitalizado
   */
  AllCaps?: boolean;

  /**
   * Colores básicos del botón
   */
  color?: "primary" | "secondary" | "tertiary";

  /**
   * Colores básicos del texto
   */
  fontColor?: string;

  backgroundColor?: string;
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  AllCaps = false,
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      style={{ color: fontColor, backgroundColor }}
      className={`label ${size} text-${color} `}
    >
      {AllCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};

export default MyLabel;
