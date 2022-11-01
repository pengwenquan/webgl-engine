import { useEffect } from 'react'
import RenderContext from '../../lib/RenderContext'

const D2F = () => {
  function main() {
    const gl = RenderContext.getGL();
    console.log(gl)
  }

  useEffect(() => {
    main()
  }, [])

  return (
    <canvas id="canvas"></canvas>
  )
}

export default D2F;