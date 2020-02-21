import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: "#F8F8FC",
    marginBottom: 20
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  expansionPanel: {
    width: "60%"
  },
  heading: {
    fontSize: 15,
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: 15,
    color: "black"
  }
});

type CardProps = {
  id: string;
  name: string;
  onDelete: (id: string) => void;
  onSave: (id: string, name: string) => void;
};

export default function SimpleCard({ id, name, onDelete, onSave }: CardProps) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [fieldName, setFieldName] = React.useState<string>(name);

  const _handleExpand = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const _handleFieldNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldName(e.target.value);
  };

  const _handleSave = () => {
    onSave(id, fieldName);
  };

  const _handleDelete = () => {
    onDelete(id);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2">
          {bull}
          {name}
        </Typography>
        <div className={classes.expansionPanel}>
          <ExpansionPanel
            expanded={expanded === "panel1"}
            onChange={_handleExpand("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={"+"}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.secondaryHeading}>Edit</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <TextField
                label="Outlined"
                variant="outlined"
                value={fieldName}
                onChange={_handleFieldNameChange}
              />
              <Button color="primary" onClick={_handleSave}>
                Save
              </Button>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
        <Button color="secondary" size="small" onClick={_handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
