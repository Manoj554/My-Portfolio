import ConnectToDB from "../../mongoDB/connect";
import Messages from "../../mongoDB/messageSchema";

ConnectToDB();

export default async function handler(req, res) {
    const { name, email, message } = req.body;
    try {
        const findEmail = await Messages.findOne({ email });

        if (findEmail) {
            const messageLength = findEmail.messages.length;
            await Messages.findByIdAndUpdate(findEmail._id, {
                "$push": {
                    "messages": {
                        "message": message,
                        "slNo": messageLength + 1
                    }
                }
            });
            res.status(200).json({ msg: 'Another Message Sent Successfully' });

        } else {
            await Messages.create({
                name, email,
                messages: {
                    message,
                    slNo: 1
                }
            });
            res.status(201).json({ msg: 'Message Successfully Sent ' });
        }
    } catch (error) {
        console.log(error);
        res.json({ msg: 'Internal Server Error', error });
    }
}
