import { useRef, useState } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Output from "./Output";
import "./style.css"

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("java");
  const [width, setWidth] = useState("100");
  const [dark,setDark] = useState(false);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleWidthChange = (newWidth) => {
    setWidth(newWidth);
  };
  const handleDarkChange = (change) => {
    setDark(change);
  };


  const onSelect = (language) => {
    setLanguage(language);
    switch (language) {
      case "c":
        setValue(`int main() {
  printf("Hello World");
  return 0;
}`)
break;
    case "c++":
      setValue(`#include <iostream>

int main() {
    std::cout << "Hello world";
    return 0;
}`)
        break;
        case "ruby":
      setValue(`def sum(a, b)
  a + b
end
puts sum(3, 4)`)
        break;
        case "rust":
      setValue(`fn sum(a: i32, b: i32) -> i32 {
  a + b
}
fn main() {
  println!("{}", sum(3, 4));
}`)
        break;
        default:
        setValue(CODE_SNIPPETS[language]);
    }
  };


  return (
    <ChakraProvider theme={theme}>
        
          <Box minH="100vh" bg={dark ? "#0f0a19" : "white"} color={dark ? "gray.500" : "black"} px={6} py={8}>
        <div className="div" style={{display:"flex",flexDirection:width === "100" ? "column":"row",} }>
        <Box w= {width ? `${width}%` : "100%"}>
          
          <LanguageSelector 
          language={language} 
          onSelect={onSelect} 
          onWidthChange={handleWidthChange}
          onDarkChange={handleDarkChange} 
        />
        <div className="edit"  style={{borderColor : dark ? null : "black",border: "1px solid",borderRight:"0.5px solid",
          borderRadius:dark ? "null" : "3px"
        }}>
        <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height={width=== "100" ? "50vh" : "75vh"} //75vh for full
            theme={dark ? "vs-dark" : "vs-light"}
           
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </div>
          
        </Box>
        
        <Output editorRef={editorRef} language={language} width={width} mode={dark}/>
       
        </div>
        
        
      
    </Box>
    
    </ChakraProvider>
    
  );
};
export default CodeEditor;
