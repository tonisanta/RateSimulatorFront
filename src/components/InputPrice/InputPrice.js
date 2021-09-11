import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";

export default function InputPrice({ name, price }) {
  return (
    <InputGroup w="xs">
      <InputLeftAddon children={name} />
      <Input
        type="number"
        placeholder={`Precio ${name}`}
        step="any"
        lang="es"
        inputMode="decimal"
        defaultValue={price}
      />
      <InputRightAddon children="Eur/kWh" />
    </InputGroup>
  );
}
