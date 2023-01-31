import React ,{ useState }from 'react'
// import PropTypes from 'prop-types'

export default function Table(props) {
    const [inputTxt, setInputTxt]= useState()
    const changeTheText=(event)=>{
        setInputTxt(event.target.value);
    }
    const my9=(event)=>{
        console.log(event.target.value);
        let txt=inputTxt+" 9"
        setInputTxt(txt);
    }
    const my8=()=>{
        let txt=inputTxt+"8"
        setInputTxt(txt);
    }
    const my7=()=>{
        let txt=inputTxt+"7"
        setInputTxt(txt);
    }
    const myp=()=>{
        let txt=inputTxt+" + "
        setInputTxt(txt);
    }
    const my6=()=>{
        let txt=inputTxt+"6"
        setInputTxt(txt);
    }
    const my5=()=>{
        let txt=inputTxt+"5"
        setInputTxt(txt);
    }
    const my4=()=>{
        let txt=inputTxt+"4"
        setInputTxt(txt);
    }
    const myn=()=>{
        let txt=inputTxt+" - "
        setInputTxt(txt);
    }
    const my3=()=>{
        let txt=inputTxt+"3"
        setInputTxt(txt);
    }
    const my2=()=>{
        let txt=inputTxt+"2"
        setInputTxt(txt);
    }
    const my1=()=>{
        let txt=inputTxt+"1"
        setInputTxt(txt);
    }
    const my0=()=>{
        let txt=inputTxt+"0"
        setInputTxt(txt);
    }
    const mymul=()=>{
        let txt=inputTxt+" * "
        setInputTxt(txt);
    }
    const mymodu=()=>{
        let txt=inputTxt+" % "
        setInputTxt(txt);
    }
    const mydiv=()=>{
        let txt=inputTxt+" / "
        setInputTxt(txt);
    }
    const stop=()=>{
        let txt=inputTxt+"."
        setInputTxt(txt);
    }
    const par1=()=>{
        let txt=inputTxt+"("
        setInputTxt(txt);
    }
    const par2=()=>{
        let txt=inputTxt+")"
        setInputTxt(txt);
    }
    const ac=()=>{
        setInputTxt('');
    }
    const sqroot=()=>{
        let txt=Math.sqrt(inputTxt);
        setInputTxt(txt);
    }
    const e=()=>{
        let txt = (inputTxt)*Math.E;
        setInputTxt(txt);
    }
    const sq=()=>{
        let txt=(inputTxt)*(inputTxt);
        setInputTxt(txt);
    }
    const log=()=>{
        let txt = Math.log(inputTxt);
        setInputTxt(txt);
    }
    const myequal=()=>{
        let result=eval(inputTxt);
        setInputTxt(result);
    }
    return(
        <div className='container'>
        <div>
            <input type='text' className='inputText' value={inputTxt} onChange={changeTheText} />
            <table>
                <tr>
                    <td onClick={my9}>9</td>
                    <td onClick={my8}>8</td>
                    <td onClick={my7}>7</td>
                    <td onClick={myp}>+</td>
                    <td onClick={stop}>.</td>
                    <td onClick={sq}>X<sup>2</sup></td>
                </tr>
                <tr>
                    <td onClick={my6}>6</td>
                    <td onClick={my5}>5</td>
                    <td onClick={my4}>4</td>
                    <td onClick={myn}>-</td>
                    <td onClick={par2}>)</td>
                    <td onClick={log}>log</td>
                </tr>
                <tr>
                    <td onClick={my3}>3</td>
                    <td onClick={my2}>2</td>
                    <td onClick={my1}>1</td>
                    <td onClick={mymul}>*</td>
                    <td onClick={par1}>(</td>
                    <td onClick={sqroot}>Sqrt</td>
                </tr>
                <tr>
                    <td onClick={mymodu}>%</td>
                    <td onClick={my0}>0</td>
                    <td onClick={mydiv}>/</td>
                    <td onClick={myequal}>=</td>
                    <td onClick={ac}>AC</td>
                    <td onClick={e}>E</td>
                </tr>
            </table>
            </div>
        </div>
    )
}
