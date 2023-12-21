interface props {
  id: string;
  field: string;
  isdefaultChecked: boolean;
  onClick: () => void;
}

const TagBtn = ({ id, field, isdefaultChecked, onClick }: props) => {
  return (
    <>
      <input
        defaultChecked={isdefaultChecked}
        type="radio"
        value={field}
        id={id}
        name="분야"
        onClick={onClick}
      />
      <label htmlFor={id}>{id}</label>
    </>
  );
};

export default TagBtn;
