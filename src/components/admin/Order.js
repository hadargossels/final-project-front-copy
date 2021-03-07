import * as React from "react";
import { Accordion,AccordionSummary ,AccordionDetails  } from '@material-ui/core'
import { List, Datagrid, TextField, EmailField, UrlField,DateField, DeleteButton,EditButton,TabbedShowLayout, Tab,
        useRefresh,useRedirect, 
        useNotify,
        SimpleList,ShowButton ,
        Filter,
        ReferenceField,
        Edit,
        Create,
        SimpleForm,
        ReferenceInput,
        SelectInput,
        TextInput,
        NumberField,
        NumberInput,
        PasswordInput,
        required,
        minLength,
        maxLength,
        minValue,
        maxValue,
        number,
        regex,
        email,ArrayField,
        choices,SimpleShowLayout,
        BooleanField,BooleanInput,ImageInput,ImageField,SimpleFormIterator,ArrayInput,Show,RichTextField,ReferenceManyField
    } from 'react-admin';
const validatePrice = [required(),regex(/^\d{0,8}(\.\d{1,4})?$/, 
'Must be a valid price number (contain only number).')];
const validateRating = [required(),regex(/[0-5]/, 'Must be a valid rating integer number between 0-5')];
const validateCompany =[required()]
const validateTitle =[required()]
const validateType =[required()]
const validateImg=[required()]
const validateInfo=[required()]
// export const PostShow = (props) => {
//     console.log("asdasd")

//     return(
//         <Show {...props}>
            
//         <SimpleShowLayout>
//             <TextField source="title" />
//             <TextField source="teaser" />
//             <RichTextField source="body" />
//             <DateField label="Publication date" source="created_at" />
//         </SimpleShowLayout>
//     </Show>
// )};
const OrdersFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Products" source="id" reference="storeProducts" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const OrderDetails = props => (
    <Show
        {...props}
        title=" orders lists"
    >
        <SimpleShowLayout>
            <ArrayField source="cart">
                <Datagrid>
                <TextField source="company" />
                <TextField source="title" />
                <TextField source="count" />
                <TextField source="info" />
                <TextField source="price" />
                <TextField source="total" />
                </Datagrid>
            </ArrayField>
            <TextField source="subTotal" />
            <TextField source="tax" />
            <TextField source="price" />
        </SimpleShowLayout>
    </Show>
);
export const OrdersList = props => (

            <List filters={<OrdersFilter />} {...props}>
                <Datagrid expand={<OrderDetails />}>
                    <TextField source="user"/>
                    <TextField source="userId"/>
                    <TextField source="id"/>
                    <DateField  source="createTime"/>
                    <NumberField source="price"/>
                    <TextField source="orderStatus"/>
                    <DeleteButton />      
                </Datagrid>
            </List>
    
);
    export const OrdersEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/orders');
        refresh();
    };
   return( <Edit onSuccess={onSuccess} title="Edit Order" {...props} undoable={false}
   >
        <SimpleForm >
           <TextInput  disabled source="id" />
           <SelectInput  source="orderStatus" choices={[
                { id: 'Processing', name: 'Processing' },
                { id: 'Ready', name: 'Ready' },
                { id: 'Delivered', name: 'Delivered' },
                ]} />         
            <button style={{background:"gray" , border:"none"}}>return money</button>

        </SimpleForm>
    </Edit>)
};

