import React from 'react'
import { Scene } from '../Scene'
import { useGlobalcontext } from '../context'

const Length3000 = () => {
  const { formData, partname, inletpos1, inletpos2, outletpos1, outletpos2 } = useGlobalcontext()

  return (
    <>
      {
        formData.diameter == 200 ? <Scene obj="models/17855 Vagen R Trough section 200 3000 mm.obj" mtl="models/17855 Vagen R Trough section 200 3000 mm.mtl" rotation={[0, 0, 0]} position={[0, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø200" ? "#08F3E7" : "#838486"} /> : <Scene obj="models/17855 Vagen R Trough section 300 3000 mm.obj" mtl="models/17855 Vagen R Trough section 300 3000 mm.mtl" rotation={[0, Math.PI * 90 / 180, 0]} position={[-800, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø300" ? "#08F3E7" : "#838486"} />
      }
      {
        formData.diameter == 200 ? <Scene obj="models/17855 Vagen R Drivestasjon 200.obj" mtl="models/17855 Vagen R Drivestasjon 200.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[1410, 25, -237]} hexcolor={partname == "Vagen R Drive Station Ø200 2.2kW" ? "#08F3E7" : "#4e96ae"} /> : <Scene obj="models/17855 Vagen R Drive station 300.obj" mtl="models/17855 Vagen R Drive station 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[700, 0, 0]} hexcolor={partname == "Vagen R Drive Station Ø300 3kW" ? "#08F3E7" : "#4e96ae"} />
      }
      {
        formData.diameter == 200 ?
          <>
            {
              <Scene obj="models/17855.40.31 200 Inlet.obj" mtl="models/17855.40.31 200 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, 0]} position={[940 - inletpos1, 200, 0]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.inletqty == 2 &&

              <Scene obj="models/17855.40.31 200 Inlet.obj" mtl="models/17855.40.31 200 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, 0]} position={[940 - inletpos2, 200, 0]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} name="inletqty" />

            }
          </>
          :
          <>
            {
              <Scene obj="models/17855.40.20.004_01 Inlet.obj" mtl="models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, 0]} position={[533 - inletpos1, 300, 0]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.inletqty == 2 &&
              <Scene obj="models/17855.40.20.004_01 Inlet.obj" mtl="models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, 0]} position={[533 - inletpos2, 300, 0]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"} name="inletqty" />
            }

          </>
      }

      {
        formData.diameter == 200 ?
          <>
            {
              <Scene obj="models/17855.40.31 200 Outlet.obj" mtl="models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-1940 + outletpos1, -200, 0]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.outletqty == 2 &&
              <Scene obj="models/17855.40.31 200 Outlet.obj" mtl="models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-1940 + outletpos2, -200, 0]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} name="outletqty" />
            }
          </>
          :
          <>
            {
              <Scene obj="models/17855.40.20.004_01 Outlet.obj" mtl="models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-2133 + outletpos1, -300, 0]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.outletqty == 2 &&
              <Scene obj="models/17855.40.20.004_01 Outlet.obj" mtl="models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-2133 + outletpos2, -300, 0]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} name="outletqty" />
            }
          </>
      }

      {
        formData.diameter == 200 ? <Scene obj="models/17855 Vagen R End station 200.obj" mtl="models/17855 Vagen R End station 200.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 270 / 180, 0]} position={[-2410, 25, 236]} hexcolor={partname == "Vagen R End station Ø200" ? "#08F3E7" : "#C0C0C0"} /> : <Scene obj="models/17855 Vagen R End station - 300.obj" mtl="models/17855 Vagen R End station - 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 270 / 180, Math.PI * 90 / 180]} position={[-2301, 0, 0]} hexcolor={partname == "Vagen R End station Ø300" ? "#08F3E7" : "#C0C0C0"} />
      }
    </>
  )
}

export default Length3000