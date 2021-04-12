import { Toolbar, SaveButton, CreateButton, RefreshButton, TextInput, Filter, DeleteWithConfirmButton, BulkDeleteWithConfirmButton} from "react-admin";
import { makeStyles } from '@material-ui/core';

export const MyFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const BulkActionButtons = props => (
    <BulkDeleteWithConfirmButton {...props} />
)

export const ActionsButtons = props => {
    const picked = (({ basePath, className , resource}) => ({  basePath, className , resource}))(props);

    return (
    <div>
        <RefreshButton {...picked}/>
        <CreateButton {...picked}/>
    </div>
)}

export const CustomToolbar = props => (
    <Toolbar {...props} classes={useStyles()}>
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

export const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});