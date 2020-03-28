import React from 'react'
import './styles'
import {Image, Stack} from 'office-ui-fabric-react'

const StudioApp = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  return (
    <div className="ms-Grid" dir="ltr">
      <Stack>
        <Image
          src="http://placekitten.com/1900/520"
          width={400}
          onLoad={() => setIsLoading(false)}
          hidden={isLoading}
        />
        {isLoading && <div styles={{
          position: 'absolute',
          left: 0, right: 0,
          top: 0, bottom: 0,
        }}>
          Is Loading
        </div>}
      </Stack>
    </div>
  )
}

export default StudioApp
