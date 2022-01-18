import validator from "validator";
export default function handler(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.json({ msg: 'please fill all the details', validate: false });
    }

    if (!validator.isEmail(email)) {
        return res.json({ msg: 'please provide valid email id', validate: false });
    }


    res.status(200).json({ msg: 'successfully validate', validate: true });
}
