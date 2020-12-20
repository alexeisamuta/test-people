import React from "react";
import {Backdrop, Card, CardActionArea} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {CardUser} from "./CardUser";
import {TypographyCommon} from "../common/TypographyCommon";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 350,
        },
        rootBackDrop: {
            width: 500,
            height: 500,
        },
        insideCard: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        insideCardBackDrop: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

export const BackDropUserAndWrapCard = (props: BackDropUserAndWrapCardType) => {


    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);

    };
    const handleToggle = () => {
        setOpen(!open);
    };
    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea className={classes.insideCard} onClick={handleToggle}>
                    <CardUser email={props.email} name={props.name} phone={props.phone} src={props.src}/>
                </CardActionArea>
            </Card>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <Card className={classes.rootBackDrop}>
                    <CardActionArea className={classes.insideCardBackDrop} onClick={handleToggle}>
                        <CardUser email={props.email} name={props.name} phone={props.phone} src={props.src}/>
                        <TypographyCommon text={'gender'} value={props.gender}/>
                        <TypographyCommon text={'street'} value={props.locationStreet}/>
                        <TypographyCommon text={'login'} value={props.login}/>
                    </CardActionArea>
                </Card>
            </Backdrop>
        </>
    )
}
//type
type BackDropUserAndWrapCardType = {
    name: string
    email: string
    phone: string
    src: string
    locationStreet: string
    gender: string
    login: string
}