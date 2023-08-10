const Course = require('./models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

      
class MeController{

    storedCourses(req, res,next) {

        Promise.all(([Course.find({}),Course.countDocumentsDeleted()]))
            .then(([courses,deletedCount]) => {
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                    deletedCount})
            })
            .catch(next)
        
    }
    trashCourses(req, res,next) {
        Course.findWithDeleted({deleted:true})
        .then(courses => res.render('me/trash-courses', {courses: multipleMongooseToObject(courses)}))
        .catch(next)
    }
}
module.exports = new MeController;