// 导入路由
import { useRoutes } from "react-router-dom";
import routes from "./router";
console.log(routes);
function App() {
  return <>{useRoutes(routes)}</>;
}

export default App;
