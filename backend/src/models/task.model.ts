import mongoose, { Document, Schema } from "mongoose";
import { TaskStatusEnum, TaskPriorityEnum, TaskPriorityEnumType, TaskStatusEnumType } from "../enums/task.enum";
import { generateInviteCode } from "../utils/uuids";


export interface TaskDocument extends Document {
    taskCode: string;
    title: string;
    description: string | null;
    project: mongoose.Schema.Types.ObjectId;
    workspace: mongoose.Schema.Types.ObjectId;
    status: TaskStatusEnumType;
    priority: TaskPriorityEnumType;
    assignedTo: mongoose.Schema.Types.ObjectId | null;
    createdBy: mongoose.Schema.Types.ObjectId;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
}


const taskSchema = new Schema<TaskDocument>({
    taskCode: {
        type: String,
        unique: true,
        default: generateInviteCode
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
        default: null,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace",
        required: true
    },
    status: {
        type: String,
        enum: Object.values(TaskStatusEnum),
        default: TaskStatusEnum.TODO
    },
    priority: {
        type: String,
        enum: Object.values(TaskPriorityEnum),
        default: TaskPriorityEnum.LOW
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    dueDate: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
})

const TaskModel = mongoose.model<TaskDocument>("Task", taskSchema)
export default TaskModel

