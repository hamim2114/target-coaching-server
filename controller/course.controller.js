import courseModel from "../models/course.model.js";


export const createCourse = async (req,res,next) => {
  try {
    const newCourse =  new courseModel(req.body)
    const savedCourse = await newCourse.save();
    res.status(201).send(savedCourse)
  } catch (error) {
    next(error)
  }
};

export const updateCourse = async (req,res,next) => {
  try {
    const updatedCourse = await courseModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedCourse)
  } catch (error) {
    next(error)
  }
}

export const getCourse = async (req,res,next) => {
  try {
    const courseData = await courseModel.find().sort({updatedAt: -1});
    res.status(201).send(courseData);
  } catch (error) {
    next(error)
  }
};

export const getCourseByCat = async (req,res,next) => {

  try {
    const courseData = await courseModel.find({category: req.params.cat});
    res.status(201).send(courseData);
  } catch (error) {
    next(error)
  }
};

export const getSingleCourse = async (req,res,next) => {
  try {
    const courseSingleData = await courseModel.findById(req.params.id);
    res.status(201).send(courseSingleData);
  } catch (error) {
    next(error)
  }
};

export const deleteCourse = async (req,res,next) => {
  try {
    await courseModel.findByIdAndDelete(req.params.id);
    res.status(201).send('Course Deleted!')
  } catch (error) {
    next(error)
  }
}