// import React, { useState } from 'react';
// import { Box } from '@chakra-ui/react'
// import CodeEditor from './components/CodeEditor';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Box minH="100vh" bg='#0f0a19' color='gray.500' px={6} py={8}>
//       <CodeEditor/>
//     </Box>
//   );
// }

// export default App


// App.js
import React, { useState } from 'react';
import { Box, ChakraProvider, useColorMode, IconButton, Flex, Text } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CodeEditor from './components/CodeEditor';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins/700.css';

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
  },
});

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider resetCSS>
      <Box minH="100vh" bg={colorMode === 'light' ? '#ffffff' : '#0f0a19'} color={colorMode === 'light' ? 'gray.700' : 'gray.300'} px={6} py={8}>
        <Flex justifyContent="space-between" alignItems="center" mb={4}>
          <Flex alignItems="center">
            <img src="src/resources/curly_bracket_icon.png" alt="Logo" style={{ width: '40px', height: '40px', marginRight: '8px' }} />
            <Text 
              fontSize="2xl" 
              fontWeight="bold"
              color={colorMode === 'dard' ? 'gray.800' : 'black'}
              fontFamily="heading"
              letterSpacing="wide"
              textTransform="uppercase"
              bgGradient="linear(to-r, #ff0080, #7928ca)"
              bgClip="text"
              >
              CODIZZ
              </Text>
          </Flex>
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon color="gray.800" /> : <SunIcon color="gray.200" />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
        <CodeEditor />
      </Box>
    </ChakraProvider>
  );
}


// App.js
// import React, { useState } from 'react';
// import { Box, ChakraProvider, useColorMode, Flex, IconButton } from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
// import CodeEditor from './components/CodeEditor';

// function App() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <ChakraProvider resetCSS>
//       <Box minH="100vh" bg={colorMode === 'light' ? '#ffffff' : '#0f0a19'} color={colorMode === 'light' ? 'gray.700' : 'gray.300'} px={6} py={8}>
//         <Flex justifyContent="flex-end" mb={4}>
//           <ToggleIcon onClick={toggleColorMode} colorMode={colorMode} />
//         </Flex>
//         <CodeEditor />
//       </Box>
//     </ChakraProvider>
//   );
// }

// const ToggleIcon = ({ onClick, colorMode }) => {
//   return (
//     <IconButton
//       aria-label="Toggle color mode"
//       icon={<ToggleCapsule colorMode={colorMode} />}
//       onClick={onClick}
//       variant="ghost"
//       borderRadius="full"
//       size="lg"
//     />
//   );
// };

// const ToggleCapsule = ({ colorMode }) => {
//   return (
//     <Box
//       bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}
//       borderRadius="full"
//       p="1px"
//       display="inline-flex"
//       alignItems="center"
//       justifyContent={colorMode === 'light' ? 'flex-end' : 'flex-start'}
//       transition="background-color 0.3s"
//     >
//       <Box bg={colorMode === 'light' ? '#ffffff' : '#0f0a19'} w="24px" h="24px" borderRadius="full" />
//     </Box>
//   );
// };


export default App;



