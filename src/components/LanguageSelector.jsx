// import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text} from '@chakra-ui/react'
// import React from 'react'
// import { LANGUAGE_VERSIONS } from '../constants';

// const languages = Object.entries(LANGUAGE_VERSIONS);
// const ACTIVE_COLOR = "blue.400";

// const LanguageSelector = ({ language, onSelect, downloadCode}) => {

//     return (
//         <Box ml={2} mb={4}>
//             <Text mb={2} fontSize='lg' >Language: </Text>
//             <Menu isLazy>
//                 <MenuButton as={Button}>{language}</MenuButton>
//                 <MenuList bg="#110c1b">
//                     {languages.map(([lang, version]) => (
//                         <MenuItem key={lang}
//                             color={
//                                 lang === language ? ACTIVE_COLOR : ""
//                             }
//                             bg={
//                                 lang === language ? "gray.900" : "transparent"
//                             }
//                             _hover={{
//                                 color: ACTIVE_COLOR,
//                                 bg: "gray.900"
//                             }}
//                             onClick={() => onSelect(lang)}>
//                             {lang}
//                             &nbsp;
//                             <Text as="span" color="gray.600" fontSize="sm">
//                                 {version}
//                             </Text>
//                         </MenuItem>
//                     ))}
//                 </MenuList>
//             </Menu>
//             <Button onClick={downloadCode} variant='outline' colorScheme='blue' mt={2}>
//                 Download Code
//             </Button>
//         </Box>
//     )
// }

// export default LanguageSelector

// // **************************


import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text, Flex } from '@chakra-ui/react';
import React from 'react';
import { LANGUAGE_VERSIONS } from '../constants';

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "blue.400";

const LanguageSelector = ({ language, onSelect, downloadCode }) => {
    return (
        <Flex alignItems="center" justifyContent="space-between" ml={2} mb={4}>
            <Box>
                <Text mb={2} fontSize='lg'>Language: </Text>
                <Menu isLazy>
                    <MenuButton as={Button}>{language}</MenuButton>
                    <MenuList bg="#110c1b">
                        {languages.map(([lang, version]) => (
                            <MenuItem key={lang}
                                color={lang === language ? ACTIVE_COLOR : ""}
                                bg={lang === language ? "gray.900" : "transparent"}
                                _hover={{ color: ACTIVE_COLOR, bg: "gray.900" }}
                                onClick={() => onSelect(lang)}>
                                {lang}
                                &nbsp;
                                <Text as="span" color="gray.600" fontSize="sm">
                                    {version}
                                </Text>
                            </MenuItem>
                        ))}
                    </MenuList>
                </Menu>
            </Box>
            <Button onClick={downloadCode} variant='outline' colorScheme='blue' ml={2} mt={9}>
                Download Code
            </Button>
        </Flex>
    );
}

export default LanguageSelector;
