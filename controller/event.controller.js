import eventModel from "../models/event.model.js";

export const createEvent = async (req,res,next) => {
  try {
    const newEvent =  new eventModel(req.body)
    const savedEvent = await newEvent.save();
    res.status(201).send(savedEvent)
  } catch (error) {
    next(error)
  }
};

export const updateEvent = async (req,res,next) => {
  try {
    const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, {new: true});
    res.status(201).send(updatedEvent)
  } catch (error) {
    next(error)
  }
}

export const getEvent = async (req,res,next) => {
  try {
    const eventData = await eventModel.find().sort({updatedAt: -1});
    res.status(201).send(eventData);
  } catch (error) {
    next(error)
  }
};

export const getSingleEvent = async (req,res,next) => {
  try {
    const eventSingleData = await eventModel.findById(req.params.id);
    res.status(201).send(eventSingleData);
  } catch (error) {
    next(error)
  }
};

export const deleteEvent = async (req,res,next) => {
  try {
    await eventModel.findByIdAndDelete(req.params.id);
    res.status(201).send('Event Deleted!')
  } catch (error) {
    next(error)
  }
}