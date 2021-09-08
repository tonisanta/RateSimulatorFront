import React, { useState, useRef } from "react";
import {
  Container,
  Center,
  Spinner,
  Alert,
  useColorModeValue,
  AlertIcon,
  chakra,
  Button,
  useDisclosure,
  ButtonGroup,
  Collapse,
  Stack,
} from "@chakra-ui/react";

import Slogan from "../../components/Slogan/Slogan";
import InputPrice from "../../components/InputPrice/InputPrice";
import usePrices from "../../Hooks/usePrices";


export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const { items, isLoaded, error } = usePrices("");
  const inputFiles = useRef(null);
  const inputGroupRef = useRef(null);


  const sendForm = () => {
    let formData = new FormData();

    let files = inputFiles.current.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log(file);
      formData.append('files', file)
      
    }

    //formData.append('PricePerKwHPunta', );

    for (var key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }

    let inputGroup = inputGroupRef.current.children;

    console.log(inputGroup);
    let pricePunta = inputGroup[0].children[1].value;
    console.log(pricePunta);
    // punta - 0
    // llano - 1 valle - 2 sinPeriodo -3  


    console.log(getPrice("llano") + "holasdflasjfs");


  }

  const GetPriceInputIndex = {
    "punta" : 0,
    "llano" : 1,
    "valle" : 2,
    "sinPeriodo" : 3
  }

  const getPrice = (franjaHoraria) => {
    let index = GetPriceInputIndex[franjaHoraria];
    let inputGroup = inputGroupRef.current.children;
    return inputGroup[index].children[1].value;
  }


  const displayPrices = () => {
    if (error) {
      return displayError(error)
    }
  
    if (!isLoaded) {
      return (
        <Center>
          <Spinner size="xl" />
        </Center>
      );
    }
  
    return (
      <>
        <InputPrice name="Punta" price={items.pricePerKwHPunta} />
        <InputPrice name="Llano" price={items.pricePerKwHLlano} />
        <InputPrice name="Valle" price={items.pricePerKwHValle} />
        <InputPrice name="Sin periodos" price={items.pricePerKwH} />
      </>
    );
  }

  return (
    <>
      <Slogan />
      <Container id="containerForm" mt={8} textAlign="center">
        <input id="files" ref={inputFiles} type="file" multiple accept=".csv" />

        <ButtonGroup
          variant="solid"
          spacing="6"
          mt={5}
          color={useColorModeValue("brand.600", "brand.100")}
        >
          <Button color="white" onClick={sendForm} bg={useColorModeValue("brand.600", "brand.500")} >Compara</Button>
          <Button onClick={onToggle}>Personalizar</Button>
        </ButtonGroup>

        <Collapse in={isOpen} animateOpacity>
          <Stack spacing={4} mt={4} align="center" ref={inputGroupRef}>
            {/* per defecte han de tenir el valor del GET de la API */}
            {displayPrices()}
          </Stack>
        </Collapse>
      </Container>
    </>
  );
}


function displayError(error) {
  return (
    <Container maxW="xl">
      <Alert status="error">
        <AlertIcon />
        <chakra.div px={2} fontSize="sm">
          Se ha producido un error : {error.message}
        </chakra.div>
      </Alert>
    </Container>
  );
}


