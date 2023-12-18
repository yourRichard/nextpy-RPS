

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Container, Image, Spacer, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Text_79ec486b04aae4fe923c7dd5bb643e7e () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "20px", "fontWeight": "bold", "marginLeft": "270px", "marginTop": "20px"}}>
  {`You choose >> ${state__state.player_choice}`}
</Text>
  )
}

export function Image_a528a4d6c5dee89e051fc8afffabccf9 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2a0258d878502770ba96be75b0030ffc = useCallback((_e) => addEvents([Event("state.state.scissor_btn", {})], (_e), {}), [addEvents, Event])

  return (
    <Image onClick={on_click_2a0258d878502770ba96be75b0030ffc} src={`./scissor.png`} sx={{"width": "120px", "height": "120px", "cursor": "pointer", "bg": "#a37cf0", "padding": "20px", "borderRadius": "30px", "boxShadow": "0px 15px 25px rgba(0,0,0,0.15)"}}/>
  )
}

export function Image_30ea6de0236ed2045288a4acff6e11da () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_5ae3dcfd007d2c7375e42abc259bd7f5 = useCallback((_e) => addEvents([Event("state.state.paper_btn", {})], (_e), {}), [addEvents, Event])

  return (
    <Image onClick={on_click_5ae3dcfd007d2c7375e42abc259bd7f5} src={`./paper.png`} sx={{"width": "120px", "height": "120px", "cursor": "pointer", "marginRight": "30px", "bg": "#a37cf0", "padding": "20px", "borderRadius": "30px", "boxShadow": "0px 15px 25px rgba(0,0,0,0.15)"}}/>
  )
}

export function Text_a2750b16feb2890347f8b28b9bf7aa7a () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "20px", "fontWeight": "bold", "marginLeft": "230px"}}>
  {`Computer choosed >> ${state__state.com_choice}`}
</Text>
  )
}

export function Text_2d818e13124867c7fa8713dade289954 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "20px", "fontWeight": "bold", "marginLeft": "305px", "width": "120px", "height": "40px", "bg": "#d8b6e0", "borderRadius": "3px", "marginTop": "30px", "textAlign": "center", "paddingTop": "5px", "boxShadow": "0px 15px 25px rgba(0,0,0,0.15)"}}>
  {`${state__state.result}`}
</Text>
  )
}

export function Image_23db8d548c592ba386d2356d7747c212 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_162b59bdbf8002eab52b192cc6d5b31a = useCallback((_e) => addEvents([Event("state.state.rock_btn", {})], (_e), {}), [addEvents, Event])

  return (
    <Image onClick={on_click_162b59bdbf8002eab52b192cc6d5b31a} src={`./rock.png`} sx={{"width": "120px", "height": "120px", "cursor": "pointer", "marginRight": "30px", "bg": "#a37cf0", "padding": "20px", "borderRadius": "30px", "boxShadow": "0px 15px 25px rgba(0,0,0,0.15)"}}/>
  )
}

export function Text_df1fa83439c358e2ebb94126b502e666 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "30px"}}>
  {`${state__state.win}`}
</Text>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Container sx={{"bg": "#e0e0e0", "height": "100vh", "maxWidth": "auto", "position": "relative", "placeItems": "center"}}>
  <Text sx={{"fontSize": "45px", "color": "black", "width": "2000px", "fontWeight": "bold", "marginLeft": "280px"}}>
  {`Rock,Paper,Scissor game with Nextpy`}
</Text>
  <Box sx={{"width": "700px", "height": "500px", "bg": "white", "marginLeft": "315px", "marginTop": "40px", "boxShadow": "0px 15px 25px rgba(0,0,0,0.15)", "borderRadius": "10px"}}>
  <Spacer/>
  <Box sx={{"display": "flex", "marginLeft": "150px", "paddingTop": "130px"}}>
  <Text_df1fa83439c358e2ebb94126b502e666/>
  <Image_23db8d548c592ba386d2356d7747c212/>
  <Image_30ea6de0236ed2045288a4acff6e11da/>
  <Image_a528a4d6c5dee89e051fc8afffabccf9/>
</Box>
  <Text_79ec486b04aae4fe923c7dd5bb643e7e/>
  <Text_a2750b16feb2890347f8b28b9bf7aa7a/>
  <Text_2d818e13124867c7fa8713dade289954/>
</Box>
</Container>
  <NextHead>
  <title>
  {`Nextpy App`}
</title>
  <meta content={`A Nextpy app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
