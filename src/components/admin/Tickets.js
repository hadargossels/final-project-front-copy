import * as React from "react";
import {  DeleteWithConfirmButton, Show, DateField, SimpleShowLayout, SelectInput, TextInput, List,Edit, Datagrid, TextField, SimpleForm, ShowButton, DateInput, EditButton} from 'react-admin';
import {MyFilter, ActionsButtons, BulkActionButtons, CustomToolbar} from './OptionsBar'
export const TicketList = (props) => (
    <List  {...props} filters={<MyFilter/>} actions={<ActionsButtons/>} bulkActionButtons={<BulkActionButtons/>}>
        <Datagrid >
            <DateField source="date" />
            <TextField source="name"/>
            <TextField source="ticketStatus"/>
            <ShowButton/>
            <EditButton/>
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const TicketEdit = (props) => (
    <Edit {...props} undoable={false}  toolbar={<CustomToolbar />}>
        <SimpleForm >
            {/* toolbar={<OrderCustomToolbar />}> */}
            <DateInput source="date" disabled/>
            <TextInput label="Appeal no." source="id" disabled/>
            <TextInput source="sender" disabled/>
            <TextInput source="name" disabled/>
            <TextInput source="subject" disabled/>
            <TextInput label="Message body" source="body" disabled/>
            <SelectInput source="ticketStatus" choices={[
                { id: 'Pending', name: 'Pending' },
                { id: 'Accepted', name: 'Accepted' },
                { id: 'Rejected', name: 'Rejected' },
            ]} />
            <TextInput multiline source="comment"/>
        </SimpleForm>
    </Edit>
)

export const TicketShow = props => (
    <Show {...props}>
        <SimpleShowLayout className="row px-5 py-2 container">
                    <h5 className="text-center py-2">Ticket Details</h5>
                    <DateField className="col-6" source="date"/>
                    <TextField className="col-6" label="Appeal no." source="id" />
                    <TextField className="col-6" source="name" />
                    <TextField className="col-6" source="sender"/>
                    <hr/>
                    <TextField className="col-12" source="subject"/>
                    <TextField className="col-12" label="Message Body" source="body"/>
                    <hr/>
                    <TextField className="col-6" source="ticketStatus" />
                    <TextField className="col-6" source="comment" />
        </SimpleShowLayout>
    </Show>
);
