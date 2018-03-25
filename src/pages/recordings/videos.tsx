import * as React from 'react'

import { Header, Grid } from 'semantic-ui-react'

import { Player } from 'video-react'

const VIDEOS = [
  'https://youtu.be/dJnUwnDgcSI'
]
const VideoGrid = (props: { videos: string[] }): JSX.Element => {
  const videos = props.videos.map((video, id) => {
    return (
      <Grid.Column key={video + id.toString(10)}>
        <Player>
          <source src={video} />
        </Player>
      </Grid.Column>
    )
  })
  return (
    <Grid columns={2} centered stackable>
      {videos}
    </Grid>
  )
}

export const Videos = (): JSX.Element => {
  return (
    <>
      <Header as="h3" content="Videos" />
      <VideoGrid videos={VIDEOS} />
    </>
  )
}

export default Videos