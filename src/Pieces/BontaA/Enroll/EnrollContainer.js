import React,{useState} from 'react';
import Enroll from './Enroll';

const FindHome =() =>{
    //다음맵 api
};

const WRITE_OK =() =>{

};
const useInput =() => {
    const [value,setValue] = useState();
    // 에러메세지? const [msg,setMsg] = useState();
    const onChange =(e) => {
        // const check = validator(e.target.value)
        //check ? errmesagge : setvalue 
       if(e) setValue(e.target.value) ;
      
    //    if(e.target.files[0]) console.log(e.target.files[0]);
     }
    return {value,onChange,setValue};
}




export default () => {

    const name = useInput();
    const email = useInput();
    const phone = useInput();
    const pw = useInput();
    const address = useInput();
    const date = useInput();
    const file = useInput();
    const values = useInput();
    console.log(name)
    return <Enroll
            name={name} email={email} phone={phone} pw={pw} address={address} file={file} date={date} values={values} 
            ok={WRITE_OK}/>
};