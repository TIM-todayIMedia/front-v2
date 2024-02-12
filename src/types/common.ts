export interface CategorySelectProps {
  name: string;
  onClick: () => void;
  isClicked: boolean;
}

export type CategoryColorType = Record<string, string>;

export interface Props {
  params: {
    name: string;
  };
}
