import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: [true, 'must provide a title'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 character length']
},
    description: {type: String},
    createdTime: {type: String, required: true},
    endedTime: {type: String, required: true},
});

export default mongoose.model('Task', TaskSchema);