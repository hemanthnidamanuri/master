import Promise from "bluebird";
import models from "../../../../server/models"

export default class studentsDao {
  static getById(_id) {
    return new Promise((resolve,reject)=>{
      models.Students.findAll({
        where: {
          id: _id
        }
      })
        .then(students=>{
          console.log("getbyid=",_id);
          resolve(students)
        },(error)=>{
          reject(error)
        })
    })
  }
  static getAll(res) {
    return new Promise((resolve, reject) => {
        models.Students.findAndCountAll({})
        .then(students => {
          console.log(students)
          resolve(students);
        }, (error) => {
          reject(error);
        });
    });
  }
  static createNew(req){
    return new Promise((resolve,reject) => {
      models.Students.create({
        sname: req.sname,
        ucolg: req.ucolg,
        sid: req.sid,
        saddress: req.saddress
      })
        .then(students => {
          console.log(students)
          resolve(students);
        }, (error) => {
          reject(error);
        });
    });
  }
  static deleteMember(id){
    return new Promise((resolve,reject) => {

      models.Students.destroy({
        where:
          {
            id: id
          }
      }).then(delstu => {
        console.log(delstu);
        resolve(delstu);
      },
        (error) => {
        reject(error);
        });
    });
  }
  static updateStudent(req,id){
    return new Promise((resolve,reject) => {
      models.Students.update(
        {
          ucolg: req.ucolg
        },
        {
          where:
            {
              id: id
            }
        })
        .then(updttudents => {
          // console.log(updttudents)
          resolve(updttudents);
        }, (error) => {
          reject(error);
        });
    });
  }
}
