import { Page1 } from "./src/screens/Page1";
import { Page2 } from "./src/screens/Page2";
import { Dispatch, SetStateAction, useState } from 'react'
import { StyleSheet } from 'react-native';

export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)

  if(page == 1){
    return <Page1 setPageI={setPage}/>
  }else if (page == 2){
    return <Page2 setPageI={setPage}/>
  }
}
