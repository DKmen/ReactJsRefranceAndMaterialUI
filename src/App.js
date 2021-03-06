import React, { Component } from "react";

import { ThemeProvider } from "@material-ui/styles";

// import BoxComponent from './MaterialUI/1.BoxComponent';
// import TypographyComponent from './MaterialUI/2.TypographyComponent';
// import ContainerComponent from './MaterialUI/3.ContainerComponent';
// import CustimizeStyle from './MaterialUI/4.CustimizeStyle';
// import PaperComponent from './MaterialUI/5.PaperComponent';
// import MaterialIcon from './MaterialUI/6.MaterialIcon';
// import ButtonComponent from './MaterialUI/7.ButtonComponent';
// import GridSystem from './MaterialUI/9.GridSystem';
// import FlotingActionButtonComponent from './MaterialUI/10.FlotingActionButton';
// import CardComponent from './MaterialUI/11.CardComponent';
// import TextFieldComponent from './MaterialUI/12.TextFildComponent';
// import RadioButtonComponent from './MaterialUI/13.RadioButton';
// import CheckBoxComponent from './MaterialUI/14.CheckBox';
// import SwitchComponent from './MaterialUI/15.SwitchComponent'
// import ListComponent from "./MaterialUI/16.ListComponent";
// import TableComponent from "./MaterialUI/17.TableComponent";
// import AppbarComponent from "./MaterialUI/18.AppbarComponent";
// import DrawerComponent from "./MaterialUI/19.SimpleDrawerComponent";
// import SwipebleDrawerComponent from "./MaterialUI/20.SwipebleDrawerComponent";
// import ClipDrawerComponent from "./MaterialUI/21.ClipDrawerComponent";
// import MenuComponent from "./MaterialUI/22.MenuComponent";
import HiddenComponent from "./MaterialUI/23.HiddenComponent";
import MiuiThem from "./MaterialUI/8.MaterialUiThem";

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={MiuiThem}>
        {/* <BoxComponent/> */}
        {/* <TypographyComponent/> */}
        {/* <ContainerComponent/> */}
        {/* <CustimizeStyle/> */}
        {/* <PaperComponent/> */}
        {/* <MaterialIcon/> */}
        {/* <ButtonComponent/> */}
        {/* <GridSystem/> */}
        {/* <FlotingActionButtonComponent/> */}
        {/* <CardComponent/> */}
        {/* <TextFieldComponent/> */}
        {/* <RadioButtonComponent/> */}
        {/* <CheckBoxComponent/> */}
        {/* <SwitchComponent/> */}
        {/* <ListComponent /> */}
        {/* <TableComponent/> */}
        {/* <AppbarComponent/> */}
        {/* <DrawerComponent/> */}
        {/* <SwipebleDrawerComponent/> */}
        {/* <ClipDrawerComponent/> */}
        {/* <MenuComponent/> */}
        <HiddenComponent/>
      </ThemeProvider>
    );
  }
}
