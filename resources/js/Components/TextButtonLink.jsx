import { Link } from '@inertiajs/react';
import { AcUnitOutlined } from '@mui/icons-material';
// import Button from '@mui/material/Button';
import Button from '@mui/material-next/Button';
import { styled, alpha } from '@mui/material/styles';


const GrayButton = styled(Button)(({ theme }) => ({
    color: '#202020',
}));

export default function TextButtonLink({ type, action, href, handleChange, active = false, className = '', children, ...props }) {
    // action();
    if (type == "modal") {
        return (
            <a style={{ margin: "0px 5px" }} onClick={() => handleChange(href)}>
                <GrayButton>
                    {children}
                </GrayButton>
            </a>
        );
    } else if (type == "action") {
        return (
            <a style={{ margin: "0px 5px" }} onClick={() => action()}>
                <GrayButton>
                    {children}
                </GrayButton>
            </a>
        );
    }
    else {
        return (
            <Link style={{ margin: "0px 5px" }} href={href}
                {...props} >
                <GrayButton>
                    {children}
                </GrayButton>
            </Link>
        );
    }
}
