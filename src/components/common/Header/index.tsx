import * as S from "./styled";
import { useState } from "react";
import { CategoryArray } from "@/utils/CategoryArray";
import { useRouter } from "next/navigation";
import { SearchIcon } from "@/assets/svg";
import CategorySelect from "../CategorySelect";

const Header = () => {
  const router = useRouter();
  const [filterToggleBtn, setFilterToggleBtn] = useState(false);
  const [filterCategoryArray, setFilterCategoryArray] = useState<string[]>([]);
  const [field, setField] = useState("");
  const [searchValue, SetSearchValue] = useState<string>("");

  const handleClick = () => {
    if (!searchValue) {
      setFilterCategoryArray([]);
      return router.push("/");
    }
    router.push(`/search/${searchValue}`);
    setFilterToggleBtn(false);
  };

  const handleCategorySelectClick = (name: string) => {
    if (!filterCategoryArray.includes(name)) {
      setFilterCategoryArray([...filterCategoryArray, name]);
      handleSubmitBtnClick(field, [...filterCategoryArray, name]);
    } else {
      const arr = filterCategoryArray.filter((i) => i !== name);
      handleSubmitBtnClick(field, arr);
      setFilterCategoryArray(arr);
    }
  };

  const handleSubmitBtnClick = (field: string, arr?: string[]) => {
    if (
      arr?.length === 0 ||
      (arr === undefined && filterCategoryArray.length === 0)
    ) {
      setFilterCategoryArray([]);
      if (field !== "") {
        return router.push(`/filter/${field}`);
      } else {
        return router.push("/");
      }
    }
    const filterQuery = arr ? arr.join(" ") : filterCategoryArray.join(" ");

    router.push(`/filter/${filterQuery} ${field}`);
  };

  const handleTitleClick = () => {
    setField("");
    setFilterCategoryArray([]);
    return router.push("/");
  };

  return (
    <S.HeaderWapper>
      <S.LeftWapper>
        <p onClick={handleTitleClick}>TIM</p>
      </S.LeftWapper>
      <S.CenterWrapper>
        <S.InputWapper>
          <input
            type="text"
            placeholder="영화/드라마 이름을 입력하세요"
            value={searchValue}
            onChange={(e) => SetSearchValue(e.target.value)}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") handleClick();
            }}
          />
          <label>
            <SearchIcon />
          </label>
        </S.InputWapper>
      </S.CenterWrapper>

      <S.TagBtns>
        <input
          type="radio"
          value={field}
          id="영화"
          name="분야"
          onClick={() => {
            handleSubmitBtnClick("영화");
            setField("영화");
          }}
        />
        <label htmlFor="영화">영화</label>
        <input
          type="radio"
          value={field}
          id="드라마"
          name="분야"
          onClick={() => {
            handleSubmitBtnClick("드라마");
            setField("드라마");
          }}
        />
        <label htmlFor="드라마">드라마</label>
        <input
          defaultChecked
          type="radio"
          value={field}
          id="전체"
          name="분야"
          onClick={() => {
            handleSubmitBtnClick("");
            setField("");
          }}
        />
        <label htmlFor="전체">전체</label>
      </S.TagBtns>

      <S.RightWrapper>
        <S.FilterBtn onClick={() => setFilterToggleBtn((pre) => !pre)}>
          카테고리
        </S.FilterBtn>

        {filterToggleBtn && (
          <S.FilterBox>
            <S.BoxTop>
              {CategoryArray.map((i, index) => (
                <CategorySelect
                  onClick={() => handleCategorySelectClick(i)}
                  key={index}
                  name={i}
                  isClick={filterCategoryArray.includes(i)}
                />
              ))}
            </S.BoxTop>
          </S.FilterBox>
        )}
      </S.RightWrapper>
    </S.HeaderWapper>
  );
};

export default Header;
