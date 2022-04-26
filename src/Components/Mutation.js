/* eslint-disable no-unused-vars */
import { gql, useMutation } from "@apollo/client";
import React from "react";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: $quantityPerUnit }) {
      record {
        name
      }
    }
  }
`;

const Mutation = () => {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "peri peri chicken",
        quantityPerUnit: 13,
      },
    }
  );
  return <div></div>;
};

export default Mutation;
