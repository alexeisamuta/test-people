import React, {ChangeEvent} from 'react';
import InputBase from '@material-ui/core/InputBase';
import {createStyles, fade, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        searchAndGroup: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIconAndGroup: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }),
);

export const InputSearchAndGroup = (props: InputSearchAndGroupType) => {

    const classes = useStyles();

    return (
        <div className={classes.searchAndGroup}>
            <div className={classes.searchIconAndGroup}>
                {props.iconComponent}
            </div>
            <InputBase
                placeholder={props.placeholder}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onChange={props.onChange}
            />
        </div>
    )
}

//type
type InputSearchAndGroupType = {
    placeholder: string
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    iconComponent: any
}
