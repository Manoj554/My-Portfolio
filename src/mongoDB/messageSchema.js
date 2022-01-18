import mongoose from 'mongoose';

const MessageSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    messages: [
        {
            slNo: Number,
            date: {
                type: Date,
                default: Date.now
            },
            message: String
        }
    ]

}, { timestamps: true });

export default mongoose.models.mymessage || mongoose.model('mymessage', MessageSchema);