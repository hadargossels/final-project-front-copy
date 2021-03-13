import { Fragment } from 'react';
import { db } from '../../../functions/firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import { 
    List,
    Datagrid,
    TextField,
    NumberField,
    EditButton,
    DeleteWithConfirmButton,
    BooleanField,
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    BooleanInput,
    required,
    maxLength,
    minValue,
    maxValue,
    useRedirect,
    Filter,
    RefreshButton,
    CreateButton,
    ExportButton,
    BulkDeleteWithConfirmButton,
    Toolbar,
    SaveButton,
    Edit,
    Show,
    SimpleShowLayout
} from 'react-admin';

const CouponCreateDB = async (data) => {

    let id;

    id = await db.child("coupons").push({}).path.pieces_[1]
    
    await db.child("coupons").child(id).set({

        "id": id,
        "name": data.name.toUpperCase(),
        "discount": data.discount,
        "active": data.active,
    })
};

const CouponFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const CouponActionsButtons = props => (
    <div>
        <RefreshButton {...props} />
        <CreateButton {...props} />
        <ExportButton {...props} />
    </div>
);

const CouponBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const CouponEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

const CouponPanel  = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <NumberField source="discount"/>
            <BooleanField source="active"/>
        </SimpleShowLayout>
    </Show>
);

export const CouponList = props => (
    <List {...props} filters={<CouponFilter/>} actions={<CouponActionsButtons/>} bulkActionButtons={<CouponBulkActionButtons />}>
        <Datagrid rowClick="expand" expand={<CouponPanel />}>
            <TextField source="id"/>
            <TextField source="name"/>
            <NumberField source="discount"/>
            <BooleanField source="active"/>
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export const CouponCreate = props => {
    
    const redirect = useRedirect();

    return (
        <Create {...props}>
            <SimpleForm save={async (data) => { await CouponCreateDB(data); redirect("/coupons") }}>
                <TextInput onChange={(e) =>  e.target.style.textTransform = "uppercase"} source="name" validate={[required(), maxLength(10)]}/>
                <NumberInput source="discount" min="0.01" max="0.99" step="0.01" defaultValue={0.01} validate={[required(), minValue(0.01), maxValue(0.99)]} />
                <BooleanInput source="active" defaultValue={true} disabled validate={[required()]} />
            </SimpleForm>
        </Create>
    )
};

export const CouponEdit = props => (
    <Edit {...props} undoable={false}>
        <SimpleForm toolbar={<CouponEditToolbar />}>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required(), maxLength(10)]} style={{textTransform: "uppercase"}}/>
            <NumberInput source="discount" min="0.01" max="0.99" step="0.01" defaultValue={0.01} validate={[required(), minValue(0.01), maxValue(0.99)]} />
            <BooleanInput source="active" validate={[required()]} />
        </SimpleForm>
    </Edit>
);