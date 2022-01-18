import { TextField } from '@mui/material';
import React from 'react'

const InputText = ({ label, type, placeholder, rows, value, onChange, name, focus }) => {
    return (
        <TextField
            fullWidth
            variant="outlined"
            label={label}
            type={type}
            rows={rows}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoFocus={focus}
            autoComplete='off'
        />
    )
}

export default InputText;
