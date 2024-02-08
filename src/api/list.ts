import CustomAxios from "@/utils/lib/CustomAxios";
import { notion } from "@/utils/lib/notion";
import {
  APIErrorCode,
  isNotionClientError,
  ClientErrorCode,
} from "@notionhq/client";

export const getAllList = async (names?: string) => {
  try {
    const { data } = await CustomAxios.post("", {
      filter: {
        property: "Tag",
        select: {
          equals: "",
        },
      },
    });

    if (!data) throw new SyntaxError("데이터가 없습니다.");
    return data.results;
  } catch (error: unknown) {
    console.log(error);
    if (isNotionClientError(error)) {
      // error is now strongly typed to NotionClientError
      switch (error.code) {
        case ClientErrorCode.RequestTimeout:
          // ...
          break;
        case APIErrorCode.ObjectNotFound:
          // ...
          break;
        case APIErrorCode.Unauthorized:
          // ...
          break;
        // ...
        default:
          // you could even take advantage of exhaustiveness checking
          assertNever(error.code);
      }
    }
  }
};

export const notionAllData = async () => {
  try {
    const listUsersResponse = await notion.databases.query({
      database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID || "",
      filter: {
        property: "Tag",
        select: {
          equals: "",
        },
      },
    });
    return listUsersResponse;
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

function assertNever(code: ClientErrorCode | APIErrorCode) {
  throw new Error("Function not implemented.");
}
