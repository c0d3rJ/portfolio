// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Step from "react-step-progress-bar";

import { Progress } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import {LinearProgress} from "@mui/material";
import {Box, lighten} from "@mui/material";
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { makeStyles, withStyles} from '@mui/styles'


function LinearProgressWithLabel(props) {
  return (
          <div className="mb-0" >
            <LinearProgress variant="determinate" value={props.level}/>
            <Progress percent={props.level} label={dynamicBar(props.level).teir} color={dynamicBar(props.level).colorName} />
            <ProgressBar
                percent={props.level}
                filledBackground={dynamicBar(props.level).color}
                text={dynamicBar(props.level).teir}
                height={13}
            >
            </ProgressBar>
          </div>
  );
}

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: '{dynamicBar().colorName}',
  },
  barColorPrimary: {
    backgroundColor: '#00695c',
  },
})(LinearProgress);

function dynamicBar(num) {
  let dynamic=[ {color:""},{color: ""},{teir:""}];
  if(num < 25){
    dynamic.color="#0000ff";
    dynamic.colorName='blue';
    dynamic.teir="Novice";
  } else if (num < 50 && num > 24){
    dynamic.color="#00ff00";
    dynamic.colorName='green';
    dynamic.teir="Intermediate";
  }
  else if (num < 75 && num > 49){
    dynamic.color="#ffff00";
    dynamic.colorName='yellow';
    dynamic.teir="Advanced";
  }
  else if (num < 100 && num > 74){
    dynamic.color="#ff0000";
    dynamic.colorName='red';
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
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center w-full">
                <div className='w-full'>
                  <p className="self-start font-medium text-white w-1/2 h-6">
                    {skill.name}
                  </p>
                  <p className="self-end font-medium text-white w-1/2 h-6">
                    {dynamicBar(skill.level).teir}
                  </p>
                  <div className="mb-0" >
                    <ColorLinearProgress variant="determinate" value={skill.level}/>
                    <LinearProgress variant="determinate" value={skill.level}/>
                    <Progress percent={skill.level} label={dynamicBar(skill.level).teir} color={dynamicBar(skill.level).colorName} />
                    <ProgressBar
                        percent={skill.level}
                        filledBackground={dynamicBar(skill.level).color}
                        text={dynamicBar(skill.level).teir}
                        height={13}
                    >
                    </ProgressBar>
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