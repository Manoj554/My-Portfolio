import { Button, Typography, Skeleton, Stack } from "@mui/material";
import { CloseButton, Form, FormControl, MessageButton } from "../styles/componentStyles/message";
import InputText from "./InputText";
import { IoIosSend } from 'react-icons/io';
import { Spacer } from "../styles/globalStyles";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { SendMessage } from "../actions";
import DraggableDialog from './Dialog';

const Loader = () => (
    <div style={{ width: '100%' }}>
        <Stack spacing={2}>
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" fullWidth height={50} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" fullWidth height={70} />
            <Skeleton />
        </Stack>
    </div>
)

const TitleComponent = ({ handleClick }) => (
    <>
        <Typography variant="h5" color="black">
            Feel Free to Connect !!!
        </Typography>
    </>
)

const Message = () => {
    const initialValues = { name: '', email: '', message: '' };
    const [open, setOpen] = useState(false);
    const [validateMsg, setValidateMsg] = useState('');
    const [formData, setFormData] = useState(initialValues);
    const [loader, setLoader] = useState(false);

    const handleClick = () => {
        setOpen(prev => !prev);
        setValidateMsg('');
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        setLoader(true);
        e.preventDefault();
        let message = await SendMessage(formData, setFormData, initialValues);
        setValidateMsg(message);
        setLoader(false);
    }

    return (
        <>
            <MessageButton onClick={handleClick}>
                Send Message
            </MessageButton>
            <DraggableDialog open={open} setOpen={setOpen} titleComponent={<TitleComponent handleClick={handleClick} />}>
                <Form onSubmit={handleSubmit}>

                    <CloseButton onClick={handleClick}>
                        <AiOutlineClose size="1.3rem" />
                    </CloseButton>
                    <h4 style={{ color: 'red', textAlign: 'center', margin: 0 }}>{validateMsg}</h4>
                    {loader ? <Loader /> : (<>

                        <FormControl>
                            <InputText
                                label="Name"
                                name="name"
                                type="text"
                                placeholder="Please Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <InputText
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Please Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <InputText
                                label="Message"
                                name="message"
                                type="text"
                                rows={4}
                                placeholder="Write your Question ..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <Spacer space={10} />
                        <FormControl>
                            <Button type="submit" variant="contained" color="error" startIcon={<IoIosSend />} fullWidth>
                                Send Message
                            </Button>
                        </FormControl>
                    </>)}
                </Form>
            </DraggableDialog>
        </>
    )
}

export default Message;
