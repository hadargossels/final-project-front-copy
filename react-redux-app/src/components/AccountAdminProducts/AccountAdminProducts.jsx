import SimpleChipField from "../SimpleChipField/SimpleChipField";
import { Fragment } from 'react';
import { db } from '../../js/firebase';
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
    Filter
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

const ProductListStyle = {fontSize: "small"};

// const ProductCreateDB = async (data) => {

//     let dbData;
//     let flag = true;

//     await db.on("value", async (snapshot) => {


//         dbData = await (snapshot.val().products);

//         if (!dbData)
//             dbData = {};

//         if (flag) {

//             db.child("products").child(Object.keys(dbData).length).set({

//                 "id": Object.keys(dbData).length,
//                 "name": data.name,
//                 "img": data.img,
//                 "title": data.title,
//                 "subtitle": data.subtitle || "",
//                 "details": data.details,
//                 "price": data.price,
//                 "rating": data.rating,
//                 "stock": data.stock,
//                 "discount": data.discount,
//                 "discountPercentage": data.discountPercentage,
//                 "category": data.category,
//                 "subCategory": data.subCategory,
//                 "type": data.type,
//                 "brand": data.brand
//             });

//             flag = false;
//         }
//         else {
//             return null;
//         }
//     });
// };

export const ProductList = props => (
    <List {...props} filters={<ProductFilter/>} actions={<ProductActionsButtons/>} bulkActionButtons={<ProductBulkActionButtons />} style={{width: "37%"}} >
        <Datagrid rowClick="edit">
            <NumberField source="id" style={ProductListStyle} />
            {/* <TextField source="name" style={ProductListStyle}/> */}
            {/* <ArrayField label="Images" source="img" >
                <SingleFieldList >
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            <TextField source="title" style={ProductListStyle}/>
            {/* <TextField source="subtitle" style={ProductListStyle}/> */}
            {/* <ArrayField source="details">
                <SingleFieldList>
                    <SimpleChipField />
                </SingleFieldList>
            </ArrayField> */}
            <NumberField source="price" style={ProductListStyle}/>
            <NumberField source="rating" style={ProductListStyle}/>
            <BooleanField source="stock" style={ProductListStyle}/>
            <BooleanField source="discount" style={ProductListStyle}/>
            <NumberField source="discountPercentage" style={ProductListStyle}/>
            <TextField source="category" style={ProductListStyle}/>
            <TextField source="subCategory" style={ProductListStyle}/>
            <TextField source="type" style={ProductListStyle}/>
            <TextField source="brand" style={ProductListStyle}/>
            <EditButton style={ProductListStyle} />
            <DeleteWithConfirmButton style={ProductListStyle} />
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
            <NumberInput min="0.01" step="0.01" source="price" validate={[required()]}/>
            <NumberInput min="0" max="5" step="0.5" source="rating" validate={[required()]}/>
            <BooleanInput source="stock" defaultValue={true} validate={[required()]}/>
            <BooleanInput source="discount" defaultValue={false}/>
            <NumberInput min="0.01" max="1" step="0.01" source="discountPercentage" defaultValue="0.01" validate={[required()]}/>
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
        {/* <SimpleForm save={(data) => ProductCreateDB(data)}> */}
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
            <NumberInput min="0.01" step="0.01" source="price" validate={[required()]}/>
            <NumberInput min="0" max="5" step="0.5" defaultValue="0" source="rating" validate={[required()]}/>
            <BooleanInput source="stock" defaultValue={true} validate={[required()]}/>
            <BooleanInput source="discount" defaultValue={false}/>
            <NumberInput min="0.01" max="1" step="0.01" source="discountPercentage" defaultValue="0.01" validate={[required()]}/>
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