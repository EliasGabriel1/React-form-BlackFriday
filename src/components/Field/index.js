import React from "react";
import Label from "./Label";
import Input from "./input"
import Content from "./Content"

const Text = ({label,type,name,register}) => (
    <Label>
        <Content>{label} </Content>
        <Input type={type} name={name} {...register(name)} />
    </Label>
);

const Field ={ 
    Text,
};

export default Field;