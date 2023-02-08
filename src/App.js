/* eslint-disable no-debugger */
import React from 'react';
import { useSelector} from "react-redux"
import ThemeProvider from './theme';
import IdleStateDetector from "./utils/IdleStateDetector"
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';
import Router from './routes';
import './style.css';

export default function App() {
  const selectedTheme = useSelector((state)=>state.ThemeReducer.selectedTheme);
  
  const inActiveState = ()=>{
    console.log("Session time due to not activity");
  }
  const activeState = ()=>{
    console.log("active user");
  }

  return (
    <>
    <ThemeProvider selectedTheme={selectedTheme}>
      <ScrollToTop />
      <IdleStateDetector delay={500*60} onIdle={inActiveState} onActive={activeState}/>
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
    </>
  );
}
