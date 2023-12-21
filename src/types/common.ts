export interface CategorySelectProps {
  name: string;
  onClick: () => void;
  isClicked: boolean;
}

export interface CategoryColorType {
  [key: string]: string;
}

export interface Props {
  params: {
    name: string;
  };
}
