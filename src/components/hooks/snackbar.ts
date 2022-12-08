import React from 'react';

interface IColorsSnackbar{
    error: string,
    success: string,
    info: string,
    warning: string
}
type typeSeverity = "error"| "success"| "info"| "warning"

const colorsSnackbar:IColorsSnackbar = {
    error: "#e53935",
    success: "#43a047",
    info: "#5048E5",
    warning: "#FFB020"

}

export const useSnackbar = () => {
    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: '',
        severity: ''
    });

    const closeSnackbar = () => {
        setSnackbar({...snackbar, open: false, message: ''});
    };
    const openSnackbar = (param:{message:string, open:boolean, severity: typeSeverity}) => {
        setSnackbar({...snackbar, open: true, message: param.message, severity: colorsSnackbar[param.severity]});
    };

    return {snackbar, closeSnackbar, openSnackbar};
};