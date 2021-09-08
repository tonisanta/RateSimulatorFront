import React from "react";
import { Container, Heading, Center, Text } from "@chakra-ui/react";

import Chart from "../../components/Chart/Chart";
import CustomAlert from "../../components/Alert/Alert";

export default function Summary() {

    let summaryData = localStorage.getItem('summary');
    if (!summaryData) {
        return <CustomAlert message="No se han encontrado los datos"/>
    }

    let summary = JSON.parse(summaryData);
    let breakdown = summary["oneLuz3Periodos"]["consumptionBreakdown"];    

    let messageOneLuz = `OneLuz (mismo precio todas las horas): ${summary["oneLuz"].cost.toFixed(2)}€`;
    let messageOne3Periodos = `One3Periodos (precio según franja horaria): ${summary["oneLuz3Periodos"].cost.toFixed(2)}€`;    
    
  return (
    <>
      <Center>
        <Heading mt={4}>Resumen del consumo</Heading>
      </Center>

      <Container h="xs" textAlign="center">
        <Chart breakdown={breakdown}/>
      </Container>

      <Container maxW="xl" centerContent>
        <Text textAlign="center" fontSize="xl">{messageOneLuz}</Text>
        <Text textAlign="center" fontSize="xl">{messageOne3Periodos}</Text>        
      </Container>
    </>
  );
}
