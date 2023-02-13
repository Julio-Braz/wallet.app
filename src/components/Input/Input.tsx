import React, { forwardRef, useState, useCallback, useEffect, useRef, useImperativeHandle } from "react";
import { Text,TextInputProps } from 'react-native';
import { Container, IContainer, InputText } from "./styles";
import { useField } from "@unform/core";
import { Ionicons } from "@expo/vector-icons";

interface InputRef{
    focus(): void;
}

interface inputValueReference{
    Value: string;
}
export function Input() {
    return (
        <Container>
            <Text>Input
            </Text>
        </Container>
    )
}
