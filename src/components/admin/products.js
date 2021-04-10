import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Filter,
  FilterList,
  FilterListItem,
} from "react-admin";
// import products from "../../data2";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CategoryIcon from "@material-ui/icons/Category";

import { Card as MuiCard, CardContent, withStyles } from "@material-ui/core";

const Card = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: {
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))(MuiCard);

const ProductsTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ""}</span>;
};

export const ProductsList = (props) => (
  <List filters={<ProductsFilter />} aside={<FilterSidebar />} {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="price" />
      <TextField source="stars" />
      <TextField source="category" />
      <TextField source="subcategory" />
      <EditButton />
    </Datagrid>
  </List>
);

export const ProductsEdit = (props) => (
  <Edit title={<ProductsTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="productsId" reference="products">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="price" />
      <TextInput source="stars" />
      <TextInput source="category" />
      <TextInput source="subcategory" />
    </SimpleForm>
  </Edit>
);

export const ProductsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="stars" />
      <TextInput source="category" />
      <TextInput source="subcategory" />
    </SimpleForm>
  </Create>
);

const ProductsFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    {/* <CategoryProductsFilter /> */}
    <ReferenceInput
      label="Category"
      source="products"
      reference="products"
      allowEmpty
    >
      <SelectInput optionText="category" />
    </ReferenceInput>
  </Filter>
);

const OriginFilter = () => (
  <FilterList label="Category" icon={<CategoryIcon />}>
    <FilterListItem
      label="Origin"
      value={{
        category: "Origin",
      }}
    />
    <FilterListItem
      label="Pixie"
      value={{
        category: "Pixie",
      }}
    />
    <FilterListItem
      label="food&bites"
      value={{
        category: "food&bites",
      }}
    />
    <FilterListItem
      label="Sugar"
      value={{
        category: "Sugar",
      }}
    />
    <FilterListItem
      label="LUME Collection"
      value={{
        category: "LUME Collection",
      }}
    />
    <FilterListItem
      label="Barista"
      value={{
        category: "Barista",
      }}
    />
  </FilterList>
);
const RateFilter = () => (
  <FilterList label="Rate" icon={<StarBorderIcon />}>
    <FilterListItem
      label="5 stars"
      value={{
        stars: "5",
      }}
    />
    <FilterListItem
      label="4 stars"
      value={{
        stars: "4",
      }}
    />
    <FilterListItem
      label="3 stars"
      value={{
        stars: "3",
      }}
    />
    <FilterListItem
      label="2 stars"
      value={{
        stars: "2",
      }}
    />
    <FilterListItem
      label="1 star"
      value={{
        stars: "1",
      }}
    />
  </FilterList>
);
const SubCategoryFilter = () => (
  <FilterList label="Sub Category" icon={<CategoryIcon />}>
    <FilterListItem
      label="New"
      value={{
        subcategory: "new",
      }}
    />
    <FilterListItem
      label="best seller"
      value={{
        subcategory: "best seller",
      }}
    />
    <FilterListItem
      label="sales"
      value={{
        subcategory: "sales",
      }}
    />
    <FilterListItem
      label="Featured Product"
      value={{
        subcategory: "Featured Product",
      }}
    />
  </FilterList>
);

const FilterSidebar = () => (
  <Card>
    <CardContent>
      <OriginFilter />
      <SubCategoryFilter />
      <RateFilter />
    </CardContent>
  </Card>
);
