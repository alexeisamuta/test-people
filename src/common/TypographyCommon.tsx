import React from "react";
import {Typography} from "@material-ui/core";

export const TypographyCommon = (props: TypographyCommonType) => {
    return (
        <Typography variant="body2" color="textSecondary" component="p">
            {props.text}: {props.value}
        </Typography>
    )
}
// type
type TypographyCommonType = {
    text: string
    value: string
}