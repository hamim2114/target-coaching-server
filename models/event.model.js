import mongoose, {Schema} from 'mongoose';

const EventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    imgId: {
      type: String,
    },
  },
  {timestamps: true}
);
export default mongoose.model('Event', EventSchema);
