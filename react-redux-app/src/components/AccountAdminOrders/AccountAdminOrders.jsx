import { Fragment } from 'react';
import { BulkDeleteWithConfirmButton } from 'react-admin';
import SimpleChipField from "../SimpleChipField/SimpleChipField";
import { 
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteWithConfirmButton,
    Edit,
    SimpleForm,
    TextInput,
    required,
    Toolbar,
    SaveButton,
    SelectInput,
    RefreshButton,
    ExportButton,
    Filter,
    CreateButton,
    ArrayField,
    SingleFieldList,
    ArrayInput,
    SimpleFormIterator
} from 'react-admin';

const OrderBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const OrderActionsButtons = props => (
    <div>
        <RefreshButton {...props}/>
        <CreateButton {...props} />
        <ExportButton {...props}/>
    </div>
);


const OrderFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const OrderEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

export const OrderList = props => (
    <List {...props} filters={<OrderFilter/>} actions={<OrderActionsButtons/>} bulkActionButtons={<OrderBulkActionButtons />} >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="datetime" />
            <TextField label="User Id" source="uid" />
            {/* <ArrayField source="coupons" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            {/* <ArrayField source="shipping" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            <TextField source="payment" />
            <TextField source="total" />
            <TextField source="status" />
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export const OrderEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<OrderEditToolbar />} redirect="list">
            <TextInput source="id" disabled />
            <TextInput source="datetime" disabled />
            <TextInput label="User Id" source="uid" disabled />
            <ArrayInput source="productsInCart" disabled>
                <SimpleFormIterator>
                    <TextInput label="Product" source="prodId"/>
                    <TextInput label="Quantity" source="prodQuantity" />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="coupons" disabled>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <ArrayInput source="shipping" disabled>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="payment" disabled />
            <TextInput source="total" disabled />
            <SelectInput source="status" validate={[required()]} choices={[
                { id: 'Received', name: 'Received' },
                { id: 'In progress', name: 'In progress' },
                { id: 'Confirmed', name: 'Confirmed' },
                { id: 'Dispatched', name: 'Dispatched' },
                { id: 'Delivered', name: 'Delivered' },
                { id: 'Canceled', name: 'Canceled' }
            ]}/>
        </SimpleForm>
    </Edit>
);