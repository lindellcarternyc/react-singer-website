import * as React from 'react'

import { Image, Container } from 'semantic-ui-react'

const Casual1 = require('../../assets/images/headshots/casual1.jpg')
const Casual2 = require('../../assets/lindell_picture.jpg')

export const Bio = () => {
  return (
    <Container fluid>
      <Image src={Casual1} size="medium" floated="left" />
      <p>
        {/* TODO: Finish this... */}
        A native of The Bronx, NY, Lindell O. Carter has been noted as 
        "a promising young tenor ... [who] lacked nothing in power or finesse"
        (<b>Classical Voice of North Carolina</b>) and for his "rich timbre 
        and ringing, easy top (<b>London Herald</b>)." 
      </p>
      <p>
        Recently, Mr. Carter returned to Regina Opera for his role debut as Pinkerton. His performances
        were praised as "forceful and emotional (<b>Brooklyn Newspaper</b>)." This season Mr. Carter
        is also excited to return for his 2nd season as a Mainstage Artist at Resonanz Opera. This summer there,
        he'll reprise the role of the Duke in their production of <i>Rigoletto</i>.
      </p>
      <Image src={Casual2} size="medium" floated="right" />
      <p>
        Singing a wide-ranging repertoire, recent highlights include the Title role in the 
        New York Premiere of Donizetti's <i>Poliuto</i>, Vaudemont in Thaickovsky's <i>Iolanta</i>,
        Among others...
      </p>
      <p>
        Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. 
        You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. 
        We swallow it too fast, we choke. We get some in our lungs, we drown. 
        However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends. 
      </p>
      <p>
        Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that s...
      </p>
    </Container>
  )
}

export default Bio