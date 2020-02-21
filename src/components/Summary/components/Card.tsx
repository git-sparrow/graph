import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { deleteObject } from "../../../store/objects";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#F8F8FC",
    marginBottom: 20
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  }
});

type CardProps = {
  id: string;
  name: string;
};

export default function SimpleCard({ id, name }: CardProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const dispatch = useDispatch();

  const _handleDelete = () => {
    dispatch(deleteObject(id));
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {bull}
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button size="small">Edit</Button>
        <Button color="secondary" size="small" onClick={_handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
