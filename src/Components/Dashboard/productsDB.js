import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    SelectInput,
    TextInput,
    Toolbar,
    SaveButton,
    DeleteWithConfirmButton,
    required,
    BooleanInput,
    SelectField
} from 'react-admin';
// import MyUrlField from './MyUrlField';
// import { Fragment } from 'react';
import firebase from 'firebase/app'
import {db} from '../../firebase'
import { date } from "faker";

// const UserBulkActionButtons = props => (
//     <Fragment>
//         <BulkDeleteWithConfirmButton {...props} />
//     </Fragment>
// );

const ProductEditToolbar = props => (
    <Toolbar {...props} >
        <SaveButton />
        <DeleteWithConfirmButton/>
    </Toolbar>
);

const ProductName = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

// const ProductFilter = (props) => (
//     <Filter {...props}>
//         <TextInput label="Search" source="q" alwaysOn />
//         <ReferenceInput label="Product" source="id" reference="product" allowEmpty>
//             <SelectInput optionText="title" />
//         </ReferenceInput>
//     </Filter>
// );

export const ProductList = props => (
    // <List filters={<UserFilter />} bulkActionButtons={<UserBulkActionButtons />} {...props}>
        <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" label="ID / ISBN10" />
            <TextField source="title" />
            <SelectField source="format" choices={[
                { id: 'Hardcover', name: 'Hardcover' },
                { id: 'Paperback', name: 'Paperback' },
                { id: 'Single Issue', name: 'Single Issue' },
            ]} />
            <TextField source="originalPrice" label="Original Price" />
            <TextField source="price" label="Current Price" />
            <SelectField source="publisher" choices={[
                { id: 'DC Comics', name: 'DC Comics' },
                { id: 'Marvel Comics', name: 'Marvel Comics' },
                { id: 'Dynamite Entertainment', name: 'Dynamite Entertainment' },
                { id: 'Image Comics', name: 'Image Comics' },
                { id: 'Shueisha/Tsai Fong Books', name: 'Shueisha/Tsai Fong Books' },
                { id: 'Pie International Co., Ltd.', name: 'Pie International Co., Ltd.' },
                { id: 'Malpaso Editorial', name: 'Malpaso Editorial' },
                { id: 'Dark Horse Comics', name: 'Dark Horse Comics' },
            ]} />
            <SelectField source="language" choices={[
                { id: 'English', name: 'English' },
                { id: 'Spanish', name: 'Spanish' },
                { id: 'Japanese', name: 'Japanese' },
                { id: 'French', name: 'French' },
            ]} />
            <TextField source="special"/>
            <TextField source="top"/>
            <TextField source="new"/>
            <EditButton />
            <DeleteWithConfirmButton/>
        </Datagrid>
    </List>
);

export const ProductEdit = props => (
    <Edit title={<ProductName />} {...props}>
        <SimpleForm toolbar={<ProductEditToolbar />}>
            <TextInput disabled source="id" label="ID / ISBN10" />
            <TextInput source="title" validate={[required()]}/>
            <TextInput source="ISBN13" validate={[required()]}/>
            <SelectInput source="format" validate={[required()]} choices={[
                    { id: 'Hardcover', name: 'Hardcover' },
                    { id: 'Paperback', name: 'Paperback' },
                    { id: 'Single Issue', name: 'Single Issue' },
            ]} />
            <TextInput source="pages" />
            <TextInput source="dimensions" />
            <TextInput source="weight" />
            <SelectInput source="publisher" validate={[required()]} choices={[
                { id: 'DC Comics', name: 'DC Comics' },
                { id: 'Marvel Comics', name: 'Marvel Comics' },
                { id: 'Dynamite Entertainment', name: 'Dynamite Entertainment' },
                { id: 'Image Comics', name: 'Image Comics' },
                { id: 'Shueisha/Tsai Fong Books', name: 'Shueisha/Tsai Fong Books' },
                { id: 'Pie International Co., Ltd.', name: 'Pie International Co., Ltd.' },
                { id: 'Malpaso Editorial', name: 'Malpaso Editorial' },
                { id: 'Dark Horse Comics', name: 'Dark Horse Comics' },
            ]} />
            <TextInput source="publicationPlace" />
            <SelectInput source="language" validate={[required()]} choices={[
                { id: 'English', name: 'English' },
                { id: 'Spanish', name: 'Spanish' },
                { id: 'Japanese', name: 'Japanese' },
                { id: 'French', name: 'French' },
            ]} />
            <TextInput source="originalPrice" validate={[required()]}/>
            <TextInput source="price" />
            <TextInput source="publicationDate" validate={[required()]}/>
            <TextInput source="image" disabled/>
            <TextInput source="author" validate={[required()]}/>
            <TextInput source="artist" validate={[required()]}/>
            <TextInput source="stars"/>
            <TextInput source="quantity" disabled/>
            <TextInput source="description" validate={[required()]}/>
            <BooleanInput label="Special" source="special"/>
            <BooleanInput label="New" source="new"/>
            <BooleanInput label="Top" source="top"/>
        </SimpleForm>
    </Edit>
);

let title;
let isbn10;
let isbn13;
let format = 'Hardcover';
let pages;
let dimensions;
let weight;
let publisher = "DC Comics";
let publicationPlace;
let language = 'English';
let originalPrice;
let newDate;
let author;
let artist;
let stars = 0;
let description;

let addProduct = (ttl, i10, i13, frmt, pgs, dmns, wght, pblshr, pblcPlace, lng, orPrice, ndate, auth, art, star, desc, props) => {
    let fakeHash = i10;
    let fakePrice = Number(orPrice) - 5
    let productDetails = {
        id: fakeHash,
        ISBN10: i10,
        ISBN13: i13,
        title: ttl,
        format: frmt,
        pages: pgs,
        dimensions: dmns,
        weight: wght,
        publisher: pblshr,
        publicationPlace: pblcPlace,
        language: lng,
        price: fakePrice,
        originalPrice: Number(orPrice),
        publicationDate: ndate,
        image: "https://via.placeholder.com/150x250",
        author: auth,
        artist: art,
        stars: star,
        quantity: 1,
        description: desc,
        special: false,
        new: false,
        top: false
    }
    db.ref('products/' + fakeHash).set({
        ...productDetails
    })
    .then(() => {
        props.history.push('/products')
    })
    .catch((error) => {console.log(error)});

}

export const ProductCreate = props => (
    <Create {...props}>
        {/* <SimpleForm save={() => {console.log(title, isbn10, isbn13, format, pages, dimensions, weight, publisher, publicationPlace, language, originalPrice, newDate, author, artist, stars, description, props)}}> */}
        <SimpleForm save={() => {addProduct(title, isbn10, isbn13, format, pages, dimensions, weight, publisher, publicationPlace, language, originalPrice, newDate, author, artist, stars, description, props)}}>
            <TextInput source="title" validate={[required()]} onChange={(event) => {title = event.target.value}}/>
            <TextInput source="ISBN10" validate={[required()]} onChange={(event) => {isbn10 = event.target.value}}/>
            <TextInput source="ISBN13" validate={[required()]} onChange={(event) => {isbn13 = event.target.value}}/>
            <SelectInput source="format" choices={[
                    { id: 'Hardcover', name: 'Hardcover' },
                    { id: 'Paperback', name: 'Paperback' },
                    { id: 'Single Issue', name: 'Single Issue' },
            ]} optionValue="id" onChange={(event) => {format = event.target.value}}/>
            <TextInput source="pages" validate={[required()]} onChange={(event) => {pages = event.target.value}}/>
            <TextInput source="dimensions" validate={[required()]} onChange={(event) => {dimensions = event.target.value}}/>
            <TextInput source="weight" validate={[required()]} onChange={(event) => {weight = event.target.value}}/>
            <SelectInput source="publisher" validate={[required()]} optionValue="id" choices={[
                { id: 'DC Comics', name: 'DC Comics' },
                { id: 'Marvel Comics', name: 'Marvel Comics' },
                { id: 'Dynamite Entertainment', name: 'Dynamite Entertainment' },
                { id: 'Image Comics', name: 'Image Comics' },
                { id: 'Shueisha/Tsai Fong Books', name: 'Shueisha/Tsai Fong Books' },
                { id: 'Pie International Co., Ltd.', name: 'Pie International Co., Ltd.' },
                { id: 'Malpaso Editorial', name: 'Malpaso Editorial' },
                { id: 'Dark Horse Comics', name: 'Dark Horse Comics' },
            ]} onChange={(event) => {publisher = event.target.value}}/>
            <TextInput source="publicationPlace" validate={[required()]} onChange={(event) => {publicationPlace = event.target.value}}/>
            <SelectInput source="language" validate={[required()]} choices={[
                { id: 'English', name: 'English' },
                { id: 'Spanish', name: 'Spanish' },
                { id: 'Japanese', name: 'Japanese' },
                { id: 'French', name: 'French' },
            ]} optionValue="id" onChange={(event) => {language = event.target.value}}/>
            <TextInput source="originalPrice" validate={[required()]} onChange={(event) => {originalPrice = event.target.value}}/>
            <TextInput source="publicationDate" validate={[required()]} onChange={(event) => {newDate = event.target.value}}/>
            <TextInput source="author" validate={[required()]} onChange={(event) => {author = event.target.value}}/>
            <TextInput source="artist" validate={[required()]} onChange={(event) => {artist = event.target.value}}/>
            <TextInput source="stars" validate={[required()]} onChange={(event) => {stars = event.target.value}}/>
            <TextInput source="description" validate={[required()]} onChange={(event) => {description = event.target.value}}/>
        </SimpleForm>
     </Create>
 );