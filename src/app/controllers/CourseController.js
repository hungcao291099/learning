const { mongooseToObject } = require('../../util/mongoose');
const Course = require('./models/Course');

      
class CourseController{
    show(req, res,next){
        Course.findOne({ slug: req.params.slug})
        .then(course => res.render('courses/show',{course: mongooseToObject(course)} ))
        
        .catch(next);
    }

    create(req, res, next){
        res.render('courses/create')
    }

    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{course: mongooseToObject(course)}))
            .catch(next);
    }
    
    store(req, res, next){
        const formData =req.body;
        formData.image= 'https://i.ytimg.com/vi/'+ formData.videoID+'/hqdefault.jpg';
        const course = new Course(formData);
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {});
    }

    update(req, res, next){
        Course.updateOne({_id : req.params.id}, req.body)
        .then(()=> res.redirect('/me/stored/courses'))
    }

    delete(req, res, next){
        Course.delete({_id : req.params.id})
             .then(()=> res.redirect('back'))
             .catch(next)
    }
    forceDelete(req, res, next){
        Course.deleteOne({_id : req.params.id})
             .then(()=> res.redirect('back'))
             .catch(next)
    }
    
    restore(req, res, next){
    Course.restore({ _id: req.params.id})
        .then(()=> res.redirect('back'))
        .catch(next)
    }
   

}
module.exports = new CourseController;