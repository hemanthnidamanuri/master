import studentsController from "../controller/students-controller";

export default class studentRoutes {
  static init(router)
  {
      router
        .route('/students')
          .get(studentsController.getAll)
      router
        .route('/students/:id')
          .get(studentsController.getById)
      router
        .route('/students/insert')
          .post(studentsController.createNew)
      router
        .route('/students/delete/:id')
          .delete(studentsController.deleteMember)
      router
        .route('/students/update/:id')
          .put(studentsController.updateStudent)
  }
}
