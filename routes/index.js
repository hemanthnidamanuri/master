//import TodoRoutes from "../api/todo/route/todo-route";
import studentRoutes from "../api/students/route/students-route";


export default class Routes {
   static init(app, router) {
     // TodoRoutes.init(router);
     studentRoutes.init(router);

     app.use("/", router);
   }
}
