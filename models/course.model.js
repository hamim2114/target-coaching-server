import mongoose, {Schema} from 'mongoose';

const CourseSchema = new Schema(
  {
    class: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    date: {
      type: String,
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
export default mongoose.model('Course', CourseSchema);
