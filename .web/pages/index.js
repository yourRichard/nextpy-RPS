

import { Fragment, useCallback, useContext } from "react"
import { Fragment_054be72e0ea98018059eac5951b3d7a7 } from "/utils/stateful_components"
import { Box, Button, Container, Spacer, Text } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Text_27fe4e2e07b6c5b0105696d034f9eb81 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "30px"}}>
  {state__state.player_choice}
</Text>
  )
}

export function Text_9eceaeb5f337f008d6b4e39a0599b629 () {
  const state__state = useContext(StateContexts.state__state)


  return (
    <Text sx={{"fontSize": "30px"}}>
  {state__state.com_choice}
</Text>
  )
}

export function Button_b17c392012581ec8f73f0329a6baf518 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_5ae3dcfd007d2c7375e42abc259bd7f5 = useCallback((_e) => addEvents([Event("state.state.paper_btn", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_5ae3dcfd007d2c7375e42abc259bd7f5}>
  {`Paper`}
</Button>
  )
}

export function Button_a6871ec304ced608a5ca88273d823905 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_2a0258d878502770ba96be75b0030ffc = useCallback((_e) => addEvents([Event("state.state.scissor_btn", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_2a0258d878502770ba96be75b0030ffc}>
  {`Scissor`}
</Button>
  )
}

export function Button_d823cb8df26f4126f3c28893f59e875c () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_162b59bdbf8002eab52b192cc6d5b31a = useCallback((_e) => addEvents([Event("state.state.rock_btn", {})], (_e), {}), [addEvents, Event])

  return (
    <Button onClick={on_click_162b59bdbf8002eab52b192cc6d5b31a}>
  {`Rock`}
</Button>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_054be72e0ea98018059eac5951b3d7a7/>
  <Container>
  <Text sx={{"fontSize": "32px", "color": "black", "width": "2000px"}}>
  {`Rock,Paper,Scissor game with Nextpy`}
</Text>
  <Text_27fe4e2e07b6c5b0105696d034f9eb81/>
  <Text_9eceaeb5f337f008d6b4e39a0599b629/>
  <Spacer/>
  <Box>
  <Button_d823cb8df26f4126f3c28893f59e875c/>
  <Button_b17c392012581ec8f73f0329a6baf518/>
  <Button_a6871ec304ced608a5ca88273d823905/>
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
