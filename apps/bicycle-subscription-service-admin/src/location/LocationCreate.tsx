import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BicycleTitle } from "../bicycle/BicycleTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="bicycles"
          reference="Bicycle"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BicycleTitle} />
        </ReferenceArrayInput>
        <TextInput label="city" source="city" />
        <TextInput label="name" source="name" />
        <TextInput label="state" source="state" />
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
