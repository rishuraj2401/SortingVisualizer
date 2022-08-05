import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from 'react';
// import Algorithm from './Algorithm';
import { Algorithm } from './merge';
import { bubble } from './Bubble';
import { quick } from './quick';
import photo1 from './photo1.png'

const Visual = () => {
    const [a, setA] = useState([12, 21, 300, 45, 51, 11, 22, 33, 44, 555, 66, 77, 88, 99])

    const [arr1, setArr1] = useState([12, 21, 300, 45, 200, 100, 35, 567, 65, 54, 34, 42 ,12, 21, 300, 45, 200, 100, 35, 567, 65, 54, 34, 42])
    const [speed, setSpeed] = useState(50)
    const [size, setSize] = useState(5)
    const [d, setd] = useState("")

    const onchange1 = (e) => {
        e.preventDefault()
        const val1 = e.target.value;

        setSpeed(val1)
        console.log(speed);
    }
    const onchange2 = (e) => {
        e.preventDefault()
        const val2 = e.target.value;
        setSize(val2)
        console.log(size);
        run()
    }

    //  const arr2=[20,50,60]      
    // const [d, setd] = useState(<div> hi</div>)
    const run = () => {
        var abc = []
        for (let i = 0; i < size; i++) {
            var c = Math.floor(Math.random() * 500);

            abc.push(c);


        }
        setArr1(abc)
        // setW(10)
        //  arr2=arr1.slice().sort((a,b)=>a-b) 

        //  if(w===1){
        //     const btn = document.querySelectorAll('.t1')[0]; 
        //    btn.disabled=true;
        //     console.log("aaaaaaa");
        //  }  
        // setArr1(arr1)        
    }

    const mergebtn = () => {
        const animation = Algorithm(arr1);
        console.log(animation);
        // setd("true") 
        // document.getElementsByClassName("arr")[4].style.backgroundColor="pink"
        for (let i = 0; i < animation.length; i++) {
            const bars = document.getElementsByClassName("arr");
          
            // setd("true")
            // if(i<animation.length-2){ setd("true")}
            // else{ setd("")}
            // setTimeout(() => {
            //     i < (animation.length - 2) ? setd("true") : setd("");
               
            // }, i * speed);

            if (i % 3 !== 2) {
                const [index1, index2] = animation[i]
                const color = i % 3 === 0 ? "black" : "purple"
                const dis=i<(animation.length-2) ?"true" : "" ;
                // i < (animation.length - 2) ? setd("true") : setd("")
                console.log(12);
                setTimeout(() => {
                    const btn=document.getElementsByTagName("button")
                    const inpt=document.getElementsByTagName("input")
                    inpt[0].disabled=dis
                    inpt[1].disabled=dis
                    btn[0].disabled= dis
                    btn[4].disabled= dis
                    btn[5].disabled= dis
                    btn[3].disabled= dis 
                    bars[index1].style.backgroundColor = color
                    bars[index2].style.backgroundColor = color
                    console.log(13);
                    // i < (animation.length - 2) ? setd("true") : setd("")
                    // setW(0)
                    // setd("true")  
                                              
                }, i *(5000/ speed));
            }
            else {
                // i<animation.length-2?setd("true"):setd("")   ; 
               
                setTimeout(() => {
                    // setd("true")
                    
                    const [ind, newh] = animation[i]
                    bars[ind].style.height = `${newh}px`
                    bars[ind].style.background = "green"

                    console.log(14);
                     
                    
                }, i *(5000/ speed));
            }
        }  
    }
    const bubblebtn = () => {
        // document.getElementsByClassName("arr")[4].style.backgroundColor="pink"
        const animate1 = bubble(arr1);
        //    setd("true") 
        console.log(animate1);
        for (let i = 0; i < animate1.length ; i++) {
            const bars = document.getElementsByClassName("arr");
            if (i % 3 !== 2) {
                const color1 = i % 3 === 0 ? "blue" : "black"
                const dis=i<(animate1.length-2) ?"true" : "" ;
                const [ind1, ind2] = animate1[i];
                setTimeout(() => {
                    const btn=document.getElementsByTagName("button")
                    const inpt=document.getElementsByTagName("input")
                    inpt[0].disabled=dis
                    inpt[1].disabled=dis
                    btn[0].disabled= dis
                    btn[4].disabled= dis
                    btn[5].disabled= dis
                    btn[3].disabled= dis  
                    // i < (animate1.length - 2) ? setd("true") : setd("");
                    bars[ind1].style.backgroundColor = color1;
                    bars[ind2].style.backgroundColor = color1;
                }, i *(5000/ speed));
            }
            else {
                
                setTimeout(() => {
                    // i < (animate1.length - 2) ? setd("true") : setd("");
                   
                    const [i1, i2, b1, b2] = animate1[i];
                    // bars[i1].style.hight=`${b1}px`;
                    bars[i1].style.height = `${b1}px`;
                    bars[i2].style.height = `${b2}px`
                }, i *(5000/ speed));
            }


        }
    }
    const quickbtn = () => {
        const animate1 = quick(arr1)
        console.log(animate1);
        for (let i = 0; i < animate1.length; i++) {
            const bars = document.getElementsByClassName("arr");

            if (animate1[i].length === 1) {
                setTimeout(() => {


                    const t = animate1[i]

                    bars[t].style.backgroundColor = "green";
                    // for (let i = 0; i < arr1.length; i++) {
                    //     bars[i].style.width="10px";

                    // }
                    // bars[t].style.width="40px"
                }, i *(5000/ speed));
            }
            else if (animate1[i].length !== 4 && animate1[i].length !== 1) {
                const color1 = animate1[i].length === 2 ? "blue" : "red";

                const [ind1, ind2] = animate1[i];
                setTimeout(() => {
                    // i < (animate1.length - 2) ? setd("true") : setd("")
                    bars[ind1].style.backgroundColor = color1;
                    bars[ind2].style.backgroundColor = color1;
                }, i *(5000/ speed));
            }
            else if (animate1[i].length === 4) {
                const [i1, i2, b1, b2] = animate1[i];
                const color2 = animate1[i].lenght === 4 ? "purple" : "black"
                const dis=i<(animate1.length-2) ?"true" : "" ;
                setTimeout(() => {
                    // i < (animate1.length - 2) ? setd("true") : setd("")
                    // bars[i1].style.hight=`${b1}px`;
                    const btn=document.getElementsByTagName("button")
                    const inpt=document.getElementsByTagName("input")
                    inpt[0].disabled=dis
                    inpt[1].disabled=dis
                    btn[0].disabled= dis
                    btn[4].disabled= dis
                    btn[5].disabled= dis
                    btn[3].disabled= dis  

                    bars[i1].style.height = `${b1}px`;
                    bars[i2].style.height = `${b2}px`;
                    bars[i1].style.backgroundColor = color2;
                    bars[i2].style.backgroundColor = color2;
                }, i  *(5000/ speed));
            }

 
        }
    }


    // const c1=
    // arr2.map((ind ,v)=> <div className="arr" key={ind} style={{ width:"10px"  ,backgroundColor:"red", height:v+"px" ,display:"inline-block" , margin :"2px"}}> </div>)

    return (
        <>
            <div>
                <div className="head">
                    <img src={photo1} id="im1" alt="" />
                    <h1>Sorting Visualizer</h1>
                    <img src={photo1} alt="" />
                </div>
                <div className="fn">
                    <div className="fn1">
                        <button type='button' onClick={run} disabled={d}>New Array</button>
                    </div>
                    <div className="fn1">
                        <button type='button' disabled={d}>Speed</button><br />
                        <input type="range" onChange={onchange1} value={speed} disabled={d} min ="10" max="500"/>
                    </div>
                    <div className="fn1">
                        <button type='button'>Size of array</button><br />
                        <input type="range" name="" id="" onChange={onchange2} value={size} disabled={d} min="10" max="500"/>
                    </div>
                </div>
                <div className="cont1">
                    <div className="stype">
                        <div className="st1">
                            <div className="t1">
                                <button type="submit" onClick={mergebtn} disabled="" id="m1">MergeSort</button>
                            </div>
                            <div className="t1">
                                <button type="submit" onClick={quickbtn} disabled={d}>QuickSort</button>
                            </div>
                            <div className="t1">
                                <button type="submit" onClick={bubblebtn} disabled={d}>BubbleSort</button>
                            </div></div>
                    </div>
                    <div className="main" >
                        {arr1.map((v, ind) => <div className="arr" key={ind} style={{ width: "10px", height: v + "px",background:"red",  marginInline: "1px", display: "inline-flex", position: 'relative' }}></div>)}

                    </div>
                </div>
            </div>
            <script>

            </script>
        </>
    )
}

export default Visual;
