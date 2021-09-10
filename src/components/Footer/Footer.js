import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
  
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        target="_blank"
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallWithSocial() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        mb={4}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'center' }}
          align={{ base: 'center', md: 'center' }}
          alignItems="center"
        >
          <Text>Rate Simulator 2021 ©</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'LinkedIn'} href={'https://linkedin.com/in/toni-santandreu-sureda-87137b207'}>
              <FaLinkedin />
            </SocialButton>
            <SocialButton label={'Github'}  href={'https://github.com/tonisanta'}>
              <FaGithub />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://www.instagram.com/tonisanta/'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    );
  }
  