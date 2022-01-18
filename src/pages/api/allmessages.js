import Mymessage from '../../mongoDB/messageSchema';
import connectDB from '../../mongoDB/connect';

connectDB();

export default async function handler(req, res) {
    const secretKey = req.query.key;
    if (secretKey === process.env.NEXT_PUBLIC_MESSAGE_SECRET_KEY) {
        try {
            const Messages = await Mymessage.find({}, { email: 1, name: 1, messages: 1, _id: 0 });
            res.json(Messages);
        } catch (error) {
            console.log(error);
        }
    } else {
        res.json({ message: "Access Denied" });
    }
}
