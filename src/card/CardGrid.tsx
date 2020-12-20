import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useSelector} from "react-redux";
import {BackDropUserAndWrapCard} from "./BackDropUserAndWrapCard";
import {RootStoreSelector} from "../redux/persons-selectors";
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
        emoji: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'

        }
    }),
);

export function CardGrid() {

    const classes = useStyles();
    const {results, foundUsers, numberPeople, loading} = useSelector(RootStoreSelector)

    if (numberPeople === 0) {
        return (
            <div className={classes.emoji}>
                <div style={{fontSize: '24px'}}>Hello! It's me!</div>
                <EmojiPeopleIcon style={{fontSize: 500}}/>
            </div>
        )
    }

    if (loading) {
        return (
            <div className={classes.emoji}>
                <CircularProgress size={200}/>
            </div>
        )
    }

    return (
        <div>
            <Grid container spacing={2} className={classes.root}>
                {(foundUsers.length ? foundUsers : results).map((el) => {
                    return <Grid item>
                        <BackDropUserAndWrapCard name={el.name.first}
                                                 email={el.email}
                                                 phone={el.phone}
                                                 src={el.picture.large}
                                                 locationStreet={el.location.street.name}
                                                 gender={el.gender}
                                                 login={el.login.username}
                        />
                    </Grid>
                })}
            </Grid>
        </div>
    );
}