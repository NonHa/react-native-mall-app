export interface RadioProps {
  value: string | number;
  activeIcon?: string;
  cancelIcon?: string;
  activeColor?: string;
  cancelColor?: string;
  label: string | number;
  children?: string;
  onChange: (value: string | number) => void;
}
