export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  buttonText?: string;
  src?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  passStyle?: string;
  id?: string;
};
