import axios from "axios";

const CustomAxios = axios.create({
  baseURL: "https://api.notion.com/v1/databases",
  headers: {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    Accept: "application/json",
    "Notion-Version": "2022-06-28",
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTION_TOKEN}`,
  },
});

export default CustomAxios;
