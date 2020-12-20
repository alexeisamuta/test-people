import React, {ChangeEvent} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {setFoundUsers, setNumberPeople} from '../redux/persons-reducer';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {InputSearchAndGroup} from '../common/HeaderInput';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
    }),
);

export function Header() {

    const classes = useStyles();
    const dispatch = useDispatch()

    const dataSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        dispatch(setFoundUsers({dataSearch: e.currentTarget.value}))
    }
    const numberPeople = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.currentTarget.value
            ? dispatch(setNumberPeople({number: +e.currentTarget.value}))
            : dispatch(setNumberPeople({number: 10}))
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        People
                    </Typography>
                    <InputSearchAndGroup placeholder={'Quantity…'} onChange={numberPeople} iconComponent={<GroupOutlinedIcon/>}/>
                    <InputSearchAndGroup placeholder={'Search…'} onChange={dataSearch} iconComponent={<SearchIcon/>}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}