import SimpleChipField from "../SimpleChipField/SimpleChipField";
import { Fragment } from 'react';
import { db } from '../../../functions/firebase';
import { 
    List,
    Datagrid,
    TextField,
    NumberField,
    ArrayField,
    EditButton,
    DeleteWithConfirmButton,
    RefreshButton,
    ExportButton,
    BulkDeleteWithConfirmButton,
    BooleanField,
    Toolbar,
    SaveButton,
    Edit,
    SimpleForm,
    TextInput,
    required,
    BooleanInput,
    CreateButton,
    Create,
    NumberInput,
    SingleFieldList,
    ArrayInput,
    SimpleFormIterator,
    SelectInput,
    Filter,
    Show,
    SimpleShowLayout,
    minValue,
    maxValue
} from 'react-admin';

const ProductBulkActionButtons = props => (
    <Fragment>
        <BulkDeleteWithConfirmButton {...props} />
    </Fragment>
);

const ProductActionsButtons = props => (
    <div>
        <RefreshButton {...props} />
        <CreateButton {...props} />
        <ExportButton {...props} />
    </div>
);

const ProductTitle = ({ record }) => {
    return <span>{record ? `"${record.title}"` : ''}</span>;
}

const ProductEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

const ProductFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

const ProductPanel  = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="name"/>
            <ArrayField label="Images" source="img" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField>
            <TextField source="title"/>
            <TextField source="subtitle"/>
            <ArrayField source="details">
                <SingleFieldList>
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField>
            <NumberField source="price"/>
            <NumberField source="rating"/>
            <BooleanField source="stock"/>
            <BooleanField source="discount"/>
            <NumberField source="discountPercentage"/>
            <TextField source="category"/>
            <TextField source="subCategory"/>
            <TextField source="type"/>
            <TextField source="brand"/>
        </SimpleShowLayout>
    </Show>
);

export const ProductList = props => (
    <List {...props} filters={<ProductFilter/>} actions={<ProductActionsButtons/>} bulkActionButtons={<ProductBulkActionButtons />} >
        <Datagrid rowClick="expand" expand={<ProductPanel />}>
            {/* <TextField source="id"/> */}
            {/* <TextField source="name"/>*/}
            {/* <ArrayField label="Images" source="img" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            <TextField source="title"/>
            {/* <TextField source="subtitle"/> */}
            {/* <ArrayField source="details">
                <SingleFieldList>
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            <NumberField source="price"/>
            <NumberField source="rating"/>
            <BooleanField source="stock"/>
            <BooleanField source="discount"/>
            <NumberField source="discountPercentage"/>
            <TextField source="category"/>
            <TextField source="subCategory"/>
            <TextField source="type"/>
            <TextField source="brand"/>
            <EditButton />
            <DeleteWithConfirmButton />
        </Datagrid>
    </List>
);

export const ProductEdit = props => (
    <Edit {...props} title={<ProductTitle />} undoable={false}>
        <SimpleForm toolbar={<ProductEditToolbar />}>
            <TextInput disabled source="id" />
            <TextInput source="name" validate={[required()]} />
            <ArrayInput label="Images" source="img" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="title" validate={[required()]}/>
            <TextInput source="subtitle"/>
            <ArrayInput source="details" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput min="0.01" step="0.01" source="price" validate={[required(), minValue(0.01)]}/>
            <NumberInput min="0" max="5" step="0.5" source="rating" validate={[required(), minValue(0), maxValue(5)]}/>
            <BooleanInput source="stock" defaultValue={true} validate={[required()]}/>
            <BooleanInput source="discount" defaultValue={false}/>
            <NumberInput min="0.01" max="1" step="0.01" source="discountPercentage" defaultValue="0.01" validate={[required(), minValue(0.01), maxValue(1)]}/>
            <SelectInput source="category" validate={[required()]} choices={[
                { id: 'Hardware', name: 'Hardware' },
                { id: 'Laptops', name: 'Laptops' },
                { id: 'Peripheral', name: 'Peripheral' },
                { id: 'Softwares', name: 'Softwares' }
            ]}/>
            <TextInput source="subCategory" validate={[required()]}/>
            <TextInput source="type" validate={[required()]}/>
            <TextInput source="brand" validate={[required()]}/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="list">
            <TextInput source="name" validate={[required()]} />
            <ArrayInput label="Images" source="img" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <TextInput source="title" validate={[required()]}/>
            <TextInput source="subtitle"/>
            <ArrayInput source="details" validate={[required()]}>
                <SimpleFormIterator>
                    <TextInput />
                </SimpleFormIterator>
            </ArrayInput>
            <NumberInput min="0.01" step="0.01" source="price" validate={[required(), minValue(0.01)]}/>
            <NumberInput min="0" max="5" step="0.5" defaultValue="0" source="rating" validate={[required(), minValue(0), maxValue(5)]}/>
            <BooleanInput source="stock" defaultValue={true} validate={[required()]}/>
            <BooleanInput source="discount" defaultValue={false}/>
            <NumberInput min="0.01" max="1" step="0.01" source="discountPercentage" defaultValue="0.01" validate={[required(), minValue(0.01), maxValue(1)]}/>
            <SelectInput source="category" validate={[required()]} choices={[
                { id: 'Hardware', name: 'Hardware' },
                { id: 'Laptops', name: 'Laptops' },
                { id: 'Peripheral', name: 'Peripheral' },
                { id: 'Softwares', name: 'Softwares' }
            ]}/>
            <TextInput source="subCategory" validate={[required()]}/>
            <TextInput source="type" validate={[required()]}/>
            <TextInput source="brand" validate={[required()]}/>
        </SimpleForm>
    </Create>
);