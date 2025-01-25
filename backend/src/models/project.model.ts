import mongoose, { Document, Schema } from "mongoose";


export interface ProjectDocument extends Document {
    name: string;
    description: string | null;
    emoji: string;
    workspace: mongoose.Schema.Types.ObjectId;
    createdBy: mongoose.Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}


const projectSchema = new Schema<ProjectDocument>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    emoji: {
        type: String,
        required: false,
        default: "🎫"
    },
    description: {
        type: String,
        required: false,
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workspace"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
})

const ProjectModel = mongoose.model<ProjectDocument>("Project", projectSchema)
export default ProjectModel

