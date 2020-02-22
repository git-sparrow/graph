import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/rootReducer";
import Card from "./components/Card";
import {
  addPermission,
  deletePermission,
  saveEditedPermission
} from "../../store/permissions";
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

const Permissions = () => {
  const classes = useStyles();
  const permissions: any = useSelector(
    (store: RootState) => store.permissions.byId
  );
  const roles: any = useSelector((store: RootState) => store.roles.byId);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [fieldName, setFieldName] = React.useState<string>("");
  const [relatedRole, setRelatedRole] = React.useState<string>("");
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
    setRelatedRole(event.target.value as string);
  };
  const _handleDelete = useCallback(
    id => {
      dispatch(deletePermission(id));
    },
    [dispatch]
  );

  const _handleSave = useCallback(
    (id: string, name: string) => {
      dispatch(saveEditedPermission(id, name));
    },
    [dispatch]
  );

  const _handleAdd = () => {
    const id = uuid.v4();
    dispatch(addPermission(id, fieldName, relatedRole));
    setIsShownAlert(true);
    setFieldName("");
  };

  let permissionsArray = Object.keys(permissions).map(item => {
    return permissions[item];
  });

  const rolesKeys = Object.keys(roles);

  return (
    <div>
      <h1>Permissions component</h1>
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
            Add new permission
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
              Pick related role
            </InputLabel>
            <Select
              className={classes.selectInput}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={relatedRole}
              onChange={_handleSelectChange}
            >
              {rolesKeys.length > 0 &&
                rolesKeys.map(item => {
                  return (
                    <MenuItem key={item} value={item}>
                      {roles[item].name}
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
            disabled={!fieldName || !relatedRole}
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
      {permissionsArray.length > 0 &&
        permissionsArray.map(item => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              onDelete={_handleDelete}
              onSave={_handleSave}
            />
          );
        })}
    </div>
  );
};

export default Permissions;
