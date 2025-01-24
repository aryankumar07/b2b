import mongoose, { Document, Schema } from "mongoose";
import { generateInviteCode } from "../utils/uuids";


export interface WorkspaceDocument extends Document {
    name: string;
    description: string;
    owner: mongoose.Schema.Types.ObjectId;
    invitedCode: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    resetInviteCode(): void
}


const workspaceSchema = new Schema<WorkspaceDocument>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    invitedCode: {
        type: String,
        required: true,
        unique: true,
        default: generateInviteCode
    }
})

workspaceSchema.method("resetInviteCode", function() {
    this.invitedCode = generateInviteCode()
})

const workspaceModel = mongoose.model("Workspace", workspaceSchema);
export default workspaceModel 
