import CustomAxios from "@/utils/lib/CustomAxios";

export const getAllList = async (names: string) => {
  let objectArray: object[] = [];
  objectArray.push({
    property: "Tag",
    select: {
      equals: "",
    },
  });
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        and: objectArray,
      },
    });

    if (!data) throw new SyntaxError("데이터가 없습니다.");

    return data.results;
  } catch (e) {
    console.log(e);
    if (e instanceof ReferenceError) {
      console.log(e.message);
    }
  }
};

export const getFilterList = async (names: string) => {
  const nameArray = names.split(" ");
  let objectArray: object[] = [];
  nameArray.map((name) => {
    if (name === "영화" || name === "드라마") {
      objectArray.push({
        property: "Tag",
        select: {
          equals: name,
        },
      });
    } else {
      objectArray.push({
        property: "Category",
        multi_select: {
          contains: name,
        },
      });
    }
  });

  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        and: objectArray,
      },
    });

    if (!data) throw new SyntaxError("데이터가 없습니다.");

    return data.results;
  } catch (e) {
    console.log(e);
    if (e instanceof ReferenceError) {
      console.log(e.message);
    }
  }
};

export const getSearchList = async (name: string) => {
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        property: "Name",
        title: {
          contains: name,
        },
      },
    });

    if (!data) throw new SyntaxError("데이터가 없습니다.");

    return data.results;
  } catch (e) {
    console.log(e);
    if (e instanceof ReferenceError) {
      console.log(e.message);
    }
  }
};

export const getDetailData = async (name: string) => {
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        property: "Name",
        title: {
          equals: name,
        },
      },
    });

    if (!data) throw new SyntaxError("데이터가 없습니다.");

    return data.results[0];
  } catch (e) {
    console.log(e);
  }
};
