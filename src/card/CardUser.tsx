import React from "react";
import {Avatar, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {TypographyCommon} from "../common/TypographyCommon";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            marginTop: '10px',
            width: theme.spacing(15),
            height: theme.spacing(15),
        },
    }),
);

export const CardUser = (props: CardUserType) => {

    const classes = useStyles();

    return (
        <>
            <Avatar alt="Remy Sharp"
                    src={props.src}
                    className={classes.large}/>
            <Typography gutterBottom variant="h5" component="h2">
                {props.name}
            </Typography>
            <TypographyCommon text={'email'} value={props.email}/>
            <TypographyCommon text={'phone'} value={props.phone}/>
        </>
    );
}

// types
export type CardUserType = {
    name: string
    email: string
    phone: string
    src: string
}