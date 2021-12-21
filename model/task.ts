import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'must provide a name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 character length']
},
    completed: {type: Boolean, default: false}
});

export default mongoose.model('Task', TaskSchema);