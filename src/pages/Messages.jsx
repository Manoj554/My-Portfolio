import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import InputText from "../components/InputText";
import { FormContainer, FormControl } from "../styles/componentStyles/message";
import { Container, Spacer } from "../styles/globalStyles";
const secretCode = process.env.NEXT_PUBLIC_MESSAGE_SECRET_KEY;

const Form = ({ scode, setScode, handleClick, errorMsg }) => (
    <Container width="80%" margin="5rem auto">
        <FormContainer width="100%" onSubmit={handleClick}>
            <Typography variant="h4" component="h1" color="blue" textAlign="center" fontWeight="bold">
                Welcome to Portfolio-Manoj !!!
            </Typography>
            <Spacer space="10" />
            <Typography variant="p" component="p" color="red" fontWeight="bold" textAlign="center">
                {errorMsg}
            </Typography>
            <Spacer space={20} />
            <FormControl>
                <InputText
                    name="password"
                    type="password"
                    label="Secret Code"
                    value={scode}
                    onChange={(e) => setScode(e.target.value)}
                    placeholder="Enter your secret code to open"
                    focus
                />
            </FormControl>
            <FormControl>
                <Button type="submit" variant="contained" color="info">
                    Validate
                </Button>
            </FormControl>
        </FormContainer>
    </Container>
)

const Messages = () => {
    const router = useRouter();
    const [auth, setAuth] = useState(false);
    const [scode, setScode] = useState('');
    const [errorMsg, seterrorMsg] = useState('');
    const [attempt, setAttempt] = useState(3);

    const handleClick = async (e) => {
        e.preventDefault();
        if (secretCode !== scode) {
            setAuth(false);
            setAttempt(prev => prev - 1);
            seterrorMsg(`You Have only ${attempt - 1} attempts left`);
        } else {
            router.push(`/api/allmessages?key=${scode}`);
            setAuth(true);
        }
    }
    return (
        <>
            {!auth ? <Form errorMsg={errorMsg} handleClick={handleClick} setScode={setScode} scode={scode} /> : null}
        </>
    )
}

export default Messages;