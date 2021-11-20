// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
//import "react-step-progress-bar/styles.css";
//import { ProgressBar } from "react-step-progress-bar";
//import Step from "react-step-progress-bar";

//import { Progress } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';

import { Line } from 'rc-progress';

import ProgressBar from "@ramonak/react-progress-bar";


function LinearProgressWithLabel(props) {
  return (
          <div className="mb-0" >
            {/*<LinearProgress variant="determinate" value={props.level}/>
            <Progress percent={props.level} label={dynamicBar(props.level).teir} color={dynamicBar(props.level).colorName} />*/}
            <ProgressBar
                percent={props.level}
                unfilledBackground={dynamicBar(props.level).color}
                filledBackground={dynamicBar(props.level).color}
                text={dynamicBar(props.level).teir}
                height={13}
            >
            </ProgressBar>
          </div>
  );
}

function dynamicBar(num) {
  let dynamic=[ {color:""},{color: ""},{teir:""},{monoColorBlue:""},{monoColorGreen:""}];
  if(num < 25){
    dynamic.color="#00ff00";
    dynamic.colorName='green';
    dynamic.monoColorBlue='#609CE1';
    dynamic.monoColorGreen='#EEF8E3';
    dynamic.teir="Novice";
  } else if (num < 50 && num > 24){
    dynamic.color="#ffff00";
    dynamic.colorName='yellow';
    dynamic.monoColorBlue='#236AB9';
    dynamic.monoColorGreen='#7FBD32';
    dynamic.teir="Intermediate";
  }
  else if (num < 75 && num > 49){
    dynamic.color="#0000ff";
    dynamic.colorName='blue';
    dynamic.monoColorBlue='#133863';
    dynamic.monoColorGreen='#496D1D';
    dynamic.teir="Advanced";
  }
  else if (num < 100 && num > 74){
    dynamic.color="#ff0000";
    dynamic.colorName='red';
    dynamic.monoColorBlue='#091D34';
    dynamic.monoColorGreen='#213409';
    dynamic.teir="Expert";
  }
  else{
    dynamic.color="linear-gradient(to right, #ccfb72, #f0bb31)";
    dynamic.level="error";
  }
  return dynamic;
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font dark:text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="dark:bg-gray-800 bg-gray-300 rounded dark:border-transparent border border-gray-700 flex p-4 h-full items-center w-full">
                <div className='w-full'>
                  <div className="flex flex-wrap overflow-hidden">

                    <div className="w-1/2 overflow-hidden">
                      <p className="self-start font-medium dark:text-white w-1/2 h-6">
                        {skill.name}
                      </p>
                    </div>

                    <div className="w-1/2 overflow-hidden">
                      <p className="self-end font-medium dark:text-white h-6 text-right">
                        {dynamicBar(skill.level).teir}
                      </p>
                    </div>

                  </div>


                  <div className="mb-0" >
                    {/*<Line percent={[skill.level,100]} strokeLinecap={"square"} strokeColor={{'0%' : '#0000FF', '100%' : '#FF0000'}} strokeWidth={2}/>*/}
                    {/*<div className='pb-1'>
                      <ProgressBar
                          completed={skill.level}
                          bgColor={dynamicBar(skill.level).color}
                          borderRadius={1}
                          height={10}
                          labelSize={8}
                      />
                    </div>*/}

                    <Line
                        percent={skill.level}
                        strokeLinecap={"square"}
                        strokeColor={dynamicBar(skill.level).color}
                        strokeWidth={2}
                        trailColor={"#858585"}
                    />

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}