import CustomAxios from "@/utils/lib/CustomAxios";

export const getAllList = async () => {
  try {
    const { data } = await CustomAxios.post("");
    const list = data.results;
    return list;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const getFilterList = async (names: string) => {
  const ArrayNames = names.split(" ");
  let objectArray: object[] = [];
  ArrayNames.map((i) => {
    if (i === "영화" || i === "드라마") {
      objectArray.push({
        property: "Tag",
        select: {
          equals: i,
        },
      });
    } else {
      objectArray.push({
        property: "Category",
        multi_select: {
          contains: i,
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
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return;
  }
};

export const getSerchList = async (name: string) => {
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        property: "Name",
        title: {
          contains: name,
        },
      },
    });
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return {};
  }
};
