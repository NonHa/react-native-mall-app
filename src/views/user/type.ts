export type JumpProps = {
  render?: () => React.ReactNode;
  pressFun?: () => void;
  goPath?: string;
  jumpPressOnrender?: string;
  rightIcon?: string;
  hideArrow?: boolean;
  title: string;
  num?: number | string;
  rightBoxStyle?: ViewStyle | TextStyle;
};
