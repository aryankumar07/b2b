import mongoose, { Document, Schema } from "mongoose";
import { ProviderEnumType, ProviderEnum } from "../enums/account-provider.enum";

export interface AccountDocument extends Document {
    provider: ProviderEnumType;
    providerId: string;
    userId: mongoose.Schema.Types.ObjectId;
    refereshToken: string | null;
    tokenExpiry: Date | null;
    createdAt: Date
}


const accountSchema = new Schema<AccountDocument>({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    provider: {
        type: String,
        enum: Object.keys(ProviderEnum),
        required: true
    },
    providerId: {
        type: String,
        required: true,
        unique: true
    },
    refereshToken: {
        type: String,
        default: null
    },
    tokenExpiry: {
        type: Date,
        default: null
    }
}, {
    timestamps: true,
    // toJSON is used when you are returning using user.toJSON() before sending to client then the refereshtoken will be excluded
    toJSON: {
        transform(_, ret) {
            delete ret.refereshToken
        }
    }
})


const AccountModel = mongoose.model<AccountDocument>("Account", accountSchema)
export default AccountModel
