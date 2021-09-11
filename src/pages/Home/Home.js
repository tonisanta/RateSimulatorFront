import React, { useRef, useState } from "react";
import {
  Container,
  Center,
  Spinner,
  useColorModeValue,
  Button,
  useDisclosure,
  ButtonGroup,
  Collapse,
  Stack
} from "@chakra-ui/react";

import Slogan from "../../components/Slogan/Slogan";
import InputPrice from "../../components/InputPrice/InputPrice";
import usePrices from "../../Hooks/usePrices";
import axios from "axios";
import CustomAlert from "../../components/Alert/Alert";
import useLocation from "wouter/use-location";
import Instructions from "../../components/Instructions/Instructions";


export default function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const { items, isLoaded, error } = usePrices("");
  const inputFiles = useRef(null);
  const inputGroupRef = useRef(null);
  const [errorOnPost, setErrorOnPost] = useState();
  const [, setLocation] = useLocation();

  const sendForm = () => {
    let formData = new FormData();

    let files = inputFiles.current.files;
    for (let i = 0; i < files.length; i++) {      
      formData.append('files', files[i])      
    }

    let pricePunta =  getPrice("punta");
    if (pricePunta) {
      formData.append('PricePerKwHPunta', pricePunta);
    }

    let priceLlano =  getPrice("llano");
    if (priceLlano) {
      formData.append('PricePerKwHLlano', priceLlano);
    }

    let priceValle =  getPrice("valle");
    if (priceValle) {
      formData.append('PricePerKwHValle', priceValle);
    }    

    let priceSinPeriodo =  getPrice("sinPeriodo");
    if (priceSinPeriodo) {
      formData.append('PricePerKwH', priceSinPeriodo);
    }

    const axiosInst = axios.create({
      baseURL: 'https://rate-simulator.azurewebsites.net/api/Rate'
    });
    axiosInst
      .post('',formData)
      .then(function (response) {
        localStorage.setItem('summary', JSON.stringify(response.data))        
        setLocation("/summary")
      })
      .catch(function (error) {
        setErrorOnPost(error.message)
      });
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

  // show the defaultValues set in the API to be able to modify them
  const displayPrices = () => {
    if (error) {
      let errorMessage = `No se pueden obtener los valores por defecto. Error: ${error.message}`;
      return (
        <Container textAlign="left">
          <CustomAlert message={errorMessage}/> 
        </Container> )
    }
  
    if (!isLoaded) {
      return (
        <Center>
          <Spinner size="xl" />
        </Center>
      );
    }
  
    return (
      <Stack spacing={4} mt={4} align="center" ref={inputGroupRef}>
        <InputPrice name="Punta" price={items.pricePerKwHPunta} />
        <InputPrice name="Llano" price={items.pricePerKwHLlano} />
        <InputPrice name="Valle" price={items.pricePerKwHValle} />
        <InputPrice name="Sin periodos" price={items.pricePerKwH} />
      </Stack>
    );
  }

  return (
    <>
      <Slogan />
      {errorOnPost ? <CustomAlert message={errorOnPost}/> : React.Fragment }
      {error ? <CustomAlert message={error.message}/> : React.Fragment }
      <Container id="containerForm" textAlign="center" p={7}>
        <input id="files" ref={inputFiles} type="file" multiple accept=".csv" />

        <ButtonGroup
          variant="solid"
          spacing="6"
          mt={5}
          color={useColorModeValue("brand.600", "brand.100")}
        >
          <Button color="white" onClick={sendForm} bg={useColorModeValue("brand.600", "brand.500")} disabled={error}>Compara</Button>
          <Button onClick={onToggle}>Personalizar</Button>
        </ButtonGroup>

        <Collapse in={isOpen} animateOpacity>
            {displayPrices()}
        </Collapse>
      </Container>
      
      <Instructions/>  
    </>
  );
}