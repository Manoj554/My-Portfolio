import axios from "axios";

export const SendMessage = async (formData, setformData, initialValues) => {
    const validate = await (await axios.post('/api/validate', formData)).data;

    if (validate.validate) {
        const { data } = await axios.post('/api/message', formData);
        setformData(initialValues);
        return data.msg;
    } else {
        return validate.msg;
    }
}