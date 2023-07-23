import noticeModel from "../models/notice.model.js";


export const createNotice = async (req,res,next) => {
  try {
    const newNotice =  new noticeModel(req.body)
    const savedNotice = await newNotice.save();
    res.status(201).send(savedNotice)
  } catch (error) {
    next(error)
  }
};

export const updateNotice = async (req,res,next) => {
  try {
    const updatedNotice = await noticeModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedNotice)
  } catch (error) {
    next(error)
  }
}

export const getNotice = async (req,res,next) => {
  try {
    const noticeData = await noticeModel.find().sort({updatedAt: -1});
    res.status(201).send(noticeData);
  } catch (error) {
    next(error)
  }
};

export const getSingleNotice = async (req,res,next) => {
  try {
    const noticeSingleData = await noticeModel.findById(req.params.id);
    res.status(201).send(noticeSingleData);
  } catch (error) {
    next(error)
  }
};

export const deleteNotice = async (req,res,next) => {
  try {
    await noticeModel.findByIdAndDelete(req.params.id);
    res.status(201).send('Notice Deleted!')
  } catch (error) {
    next(error)
  }
}