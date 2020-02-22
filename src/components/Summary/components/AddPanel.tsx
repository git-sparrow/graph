import React from "react";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import uuid from "uuid";

const useStyles = makeStyles({
  secondaryHeading: {
    fontSize: 15,
    color: "black"
  },
  expansionBlock: {
    marginBottom: 30,
    backgroundColor: "#a9dd8d"
  },
  selectBlock: {
    width: 200,
    marginLeft: 60
  },
  selectInput: {
    minWidth: 200
  },
  saveBtn: {
    marginLeft: 20
  },
  alert: {
    marginLeft: 20
  }
});

type AddPanelProps = {
  title: string;
  isRoot?: boolean;
  relatedWith?: string;
  relatedItemsMap?: { id: string; name: string }[];
  onAddItem: (id: string, name: string, relatedItem: string) => void;
};

const AddPanel = ({
  title,
  isRoot = false,
  relatedWith = "",
  relatedItemsMap = [],
  onAddItem
}: AddPanelProps) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [fieldName, setFieldName] = React.useState<string>("");
  const [relatedItem, setRelatedItem] = React.useState<string>("");
  const [isShownAlert, setIsShownAlert] = React.useState<boolean>(false);

  const _handleExpand = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };
  const _handleFieldNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldName(e.target.value);
  };

  const _handleSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setRelatedItem(event.target.value as string);
  };

  const _handleAdd = () => {
    const id = uuid.v4();
    onAddItem(id, fieldName, relatedItem);
    setIsShownAlert(true);
    setFieldName("");
  };

  return (
    <ExpansionPanel
      className={classes.expansionBlock}
      expanded={expanded === "panel1"}
      onChange={_handleExpand("panel1")}
    >
      <ExpansionPanelSummary
        expandIcon={"+"}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography className={classes.secondaryHeading}>
          Add new {title}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <TextField
            label={`New ${title}`}
            variant="outlined"
            value={fieldName}
            onChange={_handleFieldNameChange}
          />
        </div>
        {!isRoot && (
          <div className={classes.selectBlock}>
            <InputLabel id="demo-simple-select-label">
              Pick related {relatedWith}
            </InputLabel>
            <Select
              className={classes.selectInput}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={relatedItem}
              onChange={_handleSelectChange}
            >
              {relatedItemsMap.length > 0 &&
                relatedItemsMap.map((item: { id: string; name: string }) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </div>
        )}
        <Button
          className={classes.saveBtn}
          variant="contained"
          color="primary"
          onClick={_handleAdd}
          disabled={isRoot ? !fieldName : !fieldName || !relatedItem}
        >
          Save
        </Button>
        {isShownAlert && (
          <Alert
            className={classes.alert}
            variant="filled"
            severity="info"
            onClose={() => {
              setIsShownAlert(false);
            }}
          >
            Successfully added
          </Alert>
        )}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default AddPanel;
