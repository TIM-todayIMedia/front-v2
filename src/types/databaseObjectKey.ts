import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type TitleType = Extract<
  DatabaseObjectResponse["properties"][string],
  { type: "title" }
>;

export type CategoryType = Extract<
  DatabaseObjectResponse["properties"][string],
  { type: "multi_select" }
>;

export type UrlType = Extract<
  DatabaseObjectResponse["cover"],
  { type: "external" }
>;
