import React from "react";

import {
  Box,
  Button,
  chakra,
  Flex,
  SimpleGrid,
  Link,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Instructions() {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.900")}
      p={[10,20]}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="semibold"
              letterSpacing="wider"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
              textShadow="2px 0 currentcolor"
            >
              Objetivo
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              Esta aplicación web te permite analizar el consumo de la factura de Endesa. Actualmente 
              ofrecen principalmente 2 tarifas:
              <Link href="https://www.endesa.com/es/luz-y-gas/luz/one/tarifa-one-luz" isExternal> One Luz <ExternalLinkIcon mx="2px" /></Link>  
              donde el precio del kWh es siempre el mismo, y 
              <Link href="https://www.endesa.com/es/luz-y-gas/luz/one/tarifa-one-luz-3periodos" isExternal> One Luz 3 Periodos <ExternalLinkIcon mx="2px" /></Link>  
               donde el precio depende de la hora o si es fin de semana. 
               
            </chakra.p>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              Para cada factura se simula su coste según cada tarifa y posteriormente se comparan para evaluar cuál es la más conveniente. 
            </chakra.p>

            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}
            >              
              <Link href="https://tarifaluzhora.es/comparador/franja-horaria" isExternal> Más información</Link>
            </Button>
          </Box>
          <Box w="fit-content">
            <Image src="franjas_horarias.png" w="lg" alt="Precio según franja horaria"  objectFit="contain" borderRadius="2xl"/>
          </Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "none", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="semibold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color={useColorModeValue("gray.900", "gray.400")}
              lineHeight={{ md: "shorter" }}
            >
              Cómo funciona?
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.400")}
              fontSize={{ md: "lg" }}
            >
              En el área cliente de Endesa puedes descargar el resumen detallado de tu factura donde 
              puedes ver el consumo desglosado por día y hora. Para analizarlos simplemente hay que descargarlos
              en formato csv e introducirlos en la web. (Soporta el ánalisis de múltiples 
              ficheros a la vez)
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg={useColorModeValue("gray.900", "gray.700")}
              _hover={{ bg: useColorModeValue("gray.700", "gray.600") }}
              color={useColorModeValue("gray.100", "gray.200")}    
            >
              <Link href="https://www.endesaclientes.com/oficina/mis-facturas.html" isExternal> Área Cliente Endesa</Link>                              
            </Button>
          </Box>
          <Box w="fit-content">
            <Image src="formato_descarga.png" alt="Descargar factura"  objectFit="cover" borderRadius="2xl" />
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

