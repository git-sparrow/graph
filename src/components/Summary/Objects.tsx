import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import uuid from "uuid";

import Card from "./components/Card";

import { addObject, deleteObject, saveEditedObject } from "../../store/objects";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { Alert } from "@material-ui/lab";

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

const Objects = () => {
  const classes = useStyles();
  const objects: any = useSelector((store: RootState) => store.objects.byId);
  const permissions: any = useSelector(
    (store: RootState) => store.permissions.byId
  );
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [fieldName, setFieldName] = React.useState<string>("");
  const [relatedPermission, setRelatedPermission] = React.useState("");
  const [isShownAlert, setIsShownAlert] = React.useState<boolean>(false);

  const _handleFieldNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldName(e.target.value);
  };

  const _handleSelectChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setRelatedPermission(event.target.value as string);
  };

  const _handleExpand = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const _handleDelete = useCallback(
    id => {
      dispatch(deleteObject(id));
    },
    [dispatch]
  );

  const _handleSave = useCallback(
    (id: string, name: string) => {
      dispatch(saveEditedObject(id, name));
    },
    [dispatch]
  );

  const _handleAdd = () => {
    const id = uuid.v4();
    dispatch(addObject(id, fieldName, relatedPermission));
    setIsShownAlert(true);
    setFieldName("");
  };

  let objectsArray = Object.keys(objects).map(item => {
    return objects[item];
  });

  const permissionsKeys = Object.keys(permissions);

  return (
    <div>
      <h1>Objects component</h1>
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
            Add new object
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <TextField
              label="New object"
              variant="outlined"
              value={fieldName}
              onChange={_handleFieldNameChange}
            />
          </div>
          <div className={classes.selectBlock}>
            <InputLabel id="demo-simple-select-label">
              Pick related permission
            </InputLabel>
            <Select
              className={classes.selectInput}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={relatedPermission}
              onChange={_handleSelectChange}
            >
              {permissionsKeys.length > 0 &&
                permissionsKeys.map(item => {
                  return (
                    <MenuItem key={item} value={item}>
                      {permissions[item].name}
                    </MenuItem>
                  );
                })}
            </Select>
          </div>
          <Button
            className={classes.saveBtn}
            variant="contained"
            color="primary"
            onClick={_handleAdd}
            disabled={!fieldName || !relatedPermission}
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
      {objectsArray.length > 0 &&
        objectsArray.map(object => {
          return (
            <Card
              key={object.id}
              id={object.id}
              name={object.name}
              onDelete={_handleDelete}
              onSave={_handleSave}
            />
          );
        })}
    </div>
  );
};

export default Objects;
