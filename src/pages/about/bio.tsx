import * as React from 'react'

import { Image, Container } from 'semantic-ui-react'

const Casual1 = require('../../assets/images/headshots/casual1.jpg')
const Casual2 = require('../../assets/lindell_picture.jpg')

export const Bio = () => {
  return (
    <Container fluid>
      <Image src={Casual1} size="medium" floated="left" />
      <p>
        Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! 
        In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. 
        And most times they're friends, like you and me! I should've known way back when... 
        You know why, David? Because of the kids. They called me Mr Glass. 
      </p>
      <p>
        My money's in that office, right? If she start giving me some bullshit about it ain't there, 
        and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. 
        Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. 
        She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker.
        You listen: we go in there, and that nigga Winston or anybody else is in there, 
        you the first motherfucker to get shot. You understand? 
      </p>
      <Image src={Casual2} size="medium" floated="right" />
      <p>
        Now that there is the Tec-9, a crappy spray gun from South Miami. 
        This gun is advertised as the most popular gun in 
        American crime. Do you believe that shit? It actually says that in the little book that comes with it: 
        the most popular gun in American crime. Like they're actually proud of that shit.
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