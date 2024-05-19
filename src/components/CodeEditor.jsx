import { Box, HStack, Button} from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react';
import React, { useRef, useState } from 'react';
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../constants';
import Output from './Output';

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState('java');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    const onSelect = (language) => {
        setLanguage(language);
        setValue(CODE_SNIPPETS[language]);
    };

    const downloadCode = () => {
        const element = document.createElement("a");
        const file = new Blob([editorRef.current.getValue()], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${language}_code.txt`;
        document.body.appendChild(element);
        element.click();
    };

    return (
        <Box>
            <HStack spacing={4}>
                <Box w='50%'>
                    <LanguageSelector language={language} onSelect={onSelect} downloadCode={downloadCode}/>
                    <Editor
                        height="75vh"
                        theme="vs-dark"
                        language={language}
                        defaultValue={CODE_SNIPPETS[language]}
                        onMount={onMount}
                        value={value}
                        onChange={(value) => setValue(value)}
                    />
                </Box>
                <Output editorRef={editorRef} language={language} />
            </HStack>
        </Box>
    )
}


export default CodeEditor;

// ************************
