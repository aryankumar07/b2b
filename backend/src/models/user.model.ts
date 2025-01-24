import mongoose, { Document, Schema, CallbackWithoutResultAndOptionalError } from "mongoose";
import { hashValue, compareValue } from "../utils/bcrypt";

export interface UserDocument extends Document {
    name: string;
    email: string;
    password?: string;
    profilePicture: string | null;
    isActive: boolean;
    lastlogin: Date | null;
    createdAt: Date;
    updatedAt: Date;
    currentWorkspace: mongoose.Types.ObjectId | null;
    comparePassword(value: string): Promise<boolean>;
    omitPassword(): Omit<UserDocument, "password">;
}

const userSchema = new Schema<UserDocument>(
    {
        name: {
            type: String,
            required: false,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            select: true, // Change to `select: false` if you want to exclude by default
        },
        profilePicture: {
            type: String,
            default: null,
        },
        currentWorkspace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workspace",
        },
        isActive: {
            type: Boolean,
            default: true,
        },
        lastlogin: {
            type: Date,
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.pre<UserDocument>("save", async function(next: CallbackWithoutResultAndOptionalError) {
    if (this.isModified("password")) {
        if (this.password) {
            this.password = await hashValue(this.password);
        }
    }
    next();
});

userSchema.method('comparePassword', async function(value: string): Promise<boolean> {
    return await compareValue(value, this.password!)
})

// this could have beem done usinf select: false and then using .select("+password") if passowrd was needed but Omit allows you to do it oin demand and retains the properties while sending back
userSchema.method('omitPassword', function(): Omit<UserDocument, 'password'> {
    const user = this.toObject()
    delete user.password
    return user;
})


const userModel = mongoose.model<UserDocument>('User', userSchema)
export default userModel
