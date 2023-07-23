import mongoose, {Schema} from 'mongoose';

const NoticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
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
export default mongoose.model('Notice', NoticeSchema);
