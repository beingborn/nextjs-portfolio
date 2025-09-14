'use client';

import { Box, Checkbox } from '@mui/material';

export default function CustomCheckbox({
    checked,
    defaultChecked,
    onChange,
    name,
    disabled = false,
    width = 20,
    height = 20,
    ...props
}) {
    return (
        <Checkbox
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            name={name}
            disabled={disabled}
            {...props}
            sx={{ padding: 0 }}
            icon={
                <Box
                    sx={{
                        width: `${width}px`,
                        height: `${height}px`,
                        borderRadius: '2.5px',
                        border: '1px solid #DDDDDD',
                        backgroundColor: '#FFFFFF',
                        flexShrink: 0,
                    }}
                ></Box>
            }
            checkedIcon={
                <Box
                    sx={{
                        width: `${width}px`,
                        height: `${height}px`,
                        backgroundColor: 'blue',
                        position: 'relative',
                    }}
                ></Box>
            }
        ></Checkbox>
    );
}
