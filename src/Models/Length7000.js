import React from 'react'
import { Scene } from '../Scene'
import { useGlobalcontext } from '../context'

const Length7000 = () => {
  const { formData, partname, inletpos1, inletpos2, outletpos1, outletpos2 } = useGlobalcontext()

  return (
    <>
      {
        formData.diameter == 200 ?
          <>
            <Scene obj="models/17855 Vagen R Trough section 200 3000 mm.obj" mtl="models/17855 Vagen R Trough section 200 3000 mm.mtl" rotation={[0, 0, 0]} position={[0, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø200" ? "#08F3E7" : "#838486"} />
            <Scene obj="models/17855 Vagen R Trough section 200 2000 mm.obj" mtl="models/17855 Vagen R Trough section 200 2000 mm.mtl" rotation={[0, 0, 0]} position={[-2000, 0, 0]} hexcolor={partname == "Trough Section 2000 Ø200" ? "#08F3E7" : "#838486"} />
            <Scene obj="models/17855 Vagen R Trough section 200 2000 mm.obj" mtl="models/17855 Vagen R Trough section 200 2000 mm.mtl" rotation={[0, 0, 0]} position={[-4000, 0, 0]} hexcolor={partname == "Trough Section 2000 Ø200" ? "#08F3E7" : "#838486"} />

          </>
          :
          <>
            <Scene obj="models/17855 Vagen R Trough section 300 3000 mm.obj" mtl="models/17855 Vagen R Trough section 300 3000 mm.mtl" rotation={[0, Math.PI * 90 / 180, Math.PI * 90 / 180]} position={[0, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø300" ? "#08F3E7" : "#838486"} />
            <Scene obj="models/17855 Vagen R Trough section 300 2000 mm.obj" mtl="models/17855 Vagen R Trough section 300 2000 mm.mtl" rotation={[0, Math.PI * 90 / 180, Math.PI * 90 / 180]} position={[-2470, 0, 0]} hexcolor={partname == "Trough Section 2000 Ø300" ? "#08F3E7" : "#838486"} />
            <Scene obj="models/17855 Vagen R Trough section 300 2000 mm.obj" mtl="models/17855 Vagen R Trough section 300 2000 mm.mtl" rotation={[0, Math.PI * 90 / 180, Math.PI * 90 / 180]} position={[-4470, 0, 0]} hexcolor={partname == "Trough Section 2000 Ø300" ? "#08F3E7" : "#838486"} />
          </>
      }

      <>
        {
          formData.diameter == 200 ?
            <>
              <Scene obj="models/17855 Intermediate bearing 200.obj" mtl="models/17855 Intermediate bearing 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-2000, 0, 0]} hexcolor={partname == "Intermediate Bearing Ø200" ? "#08F3E7" : "#a38d72"} />
              <Scene obj="models/17855 Intermediate bearing 200.obj" mtl="models/17855 Intermediate bearing 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-4000, 0, 0]} hexcolor={partname == "Intermediate Bearing Ø200" ? "#08F3E7" : "#a38d72"} />
            </>
            :
            <>
              <Scene obj="models/17855 Intermediate bearing 300.obj" mtl="models/17855 Intermediate bearing 300.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-1490, 0, 0]} hexcolor={partname == "Intermediate Bearing Ø300" ? "#08F3E7" : "#a38d72"} />
              <Scene obj="models/17855 Intermediate bearing 300.obj" mtl="models/17855 Intermediate bearing 300.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-3490, 0, 0]} hexcolor={partname == "Intermediate Bearing Ø300" ? "#08F3E7" : "#a38d72"} />

            </>
        }
      </>
      <>
        {
          formData.diameter == 200 ?
            <>
              <Scene obj="models/17855 Vagen R Bolt kit 200.obj" mtl="models/17855 Vagen R Bolt kit 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-4000, -110, 210]} hexcolor={partname == "Vagen R Bolt Kit Ø200" ? "#08F3E7" : "#a38d72"} />
              <Scene obj="models/17855 Vagen R Bolt kit 200.obj" mtl="models/17855 Vagen R Bolt kit 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-6000, -110, 210]} hexcolor={partname == "Vagen R Bolt Kit Ø200" ? "#08F3E7" : "#a38d72"} />
            </>
            :
            <>
              <Scene obj="models/17855 Vagen R Bolt kit 300.obj" mtl="models/17855 Vagen R Bolt kit 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[500, 0, 0]} hexcolor={partname == "Vagen R Bolt Kit Ø300" ? "#08F3E7" : "#a38d72"} />
              <Scene obj="models/17855 Vagen R Bolt kit 300.obj" mtl="models/17855 Vagen R Bolt kit 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[-1500, 0, 0]} hexcolor={partname == "Vagen R Bolt Kit Ø300" ? "#08F3E7" : "#a38d72"} />

            </>
        }
      </>
      {
        formData.diameter == 200 ? <Scene obj="models/17855 Vagen R Drivestasjon 200.obj" mtl="models/17855 Vagen R Drivestasjon 200.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[1410, 25, -237]} hexcolor={partname == "Vagen R Drive Station Ø200 3kW" ? "#08F3E7" : "#4e96ae"} /> : <Scene obj="models/17855 Vagen R Drive station 300.obj" mtl="models/17855 Vagen R Drive station 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[1500, 0, 0]} hexcolor={partname == "Vagen R Drive Station Ø300 5.5kW" ? "#08F3E7" : "#4e96ae"} />
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
              <Scene obj="models/17855.40.20.004_01 Inlet.obj" mtl="models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, 0]} position={[1333 - inletpos1, 300, 0]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.inletqty == 2 &&

              <Scene obj="models/17855.40.20.004_01 Inlet.obj" mtl="models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, 0]} position={[1333 - inletpos2, 300, 0]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"} name="inletqty" />

            }

          </>
      }

      {
        formData.diameter == 200 ?
          <>
            {
              <Scene obj="models/17855.40.31 200 Outlet.obj" mtl="models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-5940 + outletpos1, -200, 0]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.outletqty == 2 &&

              <Scene obj="models/17855.40.31 200 Outlet.obj" mtl="models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-5940 + outletpos2, -200, 0]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} name="outletqty" />

            }

          </>
          :
          <>
            {
              <Scene obj="models/17855.40.20.004_01 Outlet.obj" mtl="models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-5332.5 + outletpos1, -300, 0]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} />
            }
            {
              formData.outletqty == 2 &&

              <Scene obj="models/17855.40.20.004_01 Outlet.obj" mtl="models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-5332.5 + outletpos2, -300, 0]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} name="outletqty" />

            }

          </>
      }

      {
        formData.diameter == 200 ? <Scene obj="models/17855 Vagen R End station 200.obj" mtl="models/17855 Vagen R End station 200.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 270 / 180, 0]} position={[-6410, 25, 236]} hexcolor={partname == "Vagen R End station Ø200" ? "#08F3E7" : "#C0C0C0"} /> : <Scene obj="models/17855 Vagen R End station - 300.obj" mtl="models/17855 Vagen R End station - 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 270 / 180, Math.PI * 90 / 180]} position={[-5500, 0, 0]} hexcolor={partname == "Vagen R End station Ø300" ? "#08F3E7" : "#C0C0C0"} />
      }
    </>
  )
}

export default Length7000