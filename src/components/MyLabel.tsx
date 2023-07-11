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
}

export const MyLabel = ({
  label = "No Label",
  size = "normal",
  color = "primary",
  AllCaps = false,
}: Props) => {
  return (
    <span className={`label ${size} text-${color}`}>
      {AllCaps ? label.toLocaleUpperCase() : label}
    </span>
  );
};
