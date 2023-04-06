import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/route";
import "@arco-design/web-react/dist/css/arco.css";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/es/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
moment.locale("zh-cn");
import "./style/index.less";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
