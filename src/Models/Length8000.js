import React from 'react'
import { Scene } from '../Model'
import { useGlobalcontext } from '../context'
const Length8000 = () => {
    const {formData,partname}=useGlobalcontext()
  return (
    <>
    {
      formData.diameter == 200 ?
        <>
          <Scene obj="models/models/17855 Vågen R Trough section 200 3000 mm.obj" mtl="models/models/17855 Vågen R Trough section 200 3000 mm.mtl" rotation={[0, 0, 0]} position={[0, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø200" ? "#08F3E7" : "#838486"} />
          <Scene obj="models/models/17855 Vågen R Trough section 200 3000 mm.obj" mtl="models/models/17855 Vågen R Trough section 200 3000 mm.mtl" rotation={[0, 0, 0]} position={[-3000, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø200" ? "#08F3E7" : "#838486"} />
          <Scene obj="models/models/17855 Vågen R Trough section 200 2000 mm.obj" mtl="models/models/17855 Vågen R Trough section 200 2000 mm.mtl" rotation={[0, 0, 0]} position={[-5000, 0, 0]} hexcolor={partname == "Trough Section 2000 Ø200" ? "#08F3E7" : "#838486"} />

        </>
        :
        <>
          <Scene obj="models/models/17855 Vågen R Trough section 300 3000 mm.obj" mtl="models/models/17855 Vågen R Trough section 300 3000 mm.mtl" rotation={[0, Math.PI * 90 / 180, Math.PI * 90 / 180]} position={[0, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø300" ? "#08F3E7" : "#838486"} />
          <Scene obj="models/models/17855 Vågen R Trough section 300 3000 mm.obj" mtl="models/models/17855 Vågen R Trough section 300 3000 mm.mtl" rotation={[0, Math.PI * 90 / 180, Math.PI * 90 / 180]} position={[-3000, 0, 0]} hexcolor={partname == "Trough Section 3000 Ø300" ? "#08F3E7" : "#838486"} />
          <Scene obj="models/models/17855 Vågen R Trough section 300 2000 mm.obj" mtl="models/models/17855 Vågen R Trough section 300 2000 mm.mtl" rotation={[0, Math.PI * 90 / 180, Math.PI * 90 / 180]} position={[-5470, 0, 0]} hexcolor={partname == "Trough Section 2000 Ø300" ? "#08F3E7" : "#838486"} />
        </>
    }

    <>
      {
        formData.diameter == 200 ?
          <>
            <Scene obj="models/models/17855 Intermediate bearing 200.obj" mtl="models/models/17855 Intermediate bearing 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-1990, 0, 0]} hexcolor={partname == "Intermedaite Bearing Ø200" ? "#08F3E7" : "#a38d72"} />
            <Scene obj="models/models/17855 Intermediate bearing 200.obj" mtl="models/models/17855 Intermediate bearing 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-4990, 0, 0]} hexcolor={partname == "Intermedaite Bearing Ø200" ? "#08F3E7" : "#a38d72"} />
          </>
          :
          <>
            <Scene obj="models/models/17855 Intermediate bearing 300.obj" mtl="models/models/17855 Intermediate bearing 300.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-1490, 0, 0]} hexcolor={partname == "Intermedaite Bearing Ø300" ? "#08F3E7" : "#a38d72"} />
            <Scene obj="models/models/17855 Intermediate bearing 300.obj" mtl="models/models/17855 Intermediate bearing 300.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-4490, 0, 0]} hexcolor={partname == "Intermedaite Bearing Ø300" ? "#08F3E7" : "#a38d72"} />
          </>
      }
    </>
    <>
      {
        formData.diameter == 200 ?
          <>
            <Scene obj="models/models/17855 Vågen R Bolt kit 200.obj" mtl="models/models/17855 Vågen R Bolt kit 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-4000, -110, 210]} hexcolor={partname == "Vagen R Bolt Kit Ø200" ? "#08F3E7" : "#a38d72"} />
            <Scene obj="models/models/17855 Vågen R Bolt kit 200.obj" mtl="models/models/17855 Vågen R Bolt kit 200.mtl" rotation={[0, Math.PI * 270 / 180, 0]} position={[-7000, -110, 210]} hexcolor={partname == "Vagen R Bolt Kit Ø200" ? "#08F3E7" : "#a38d72"} />
          </>
          :
          <>
            <Scene obj="models/models/17855 Vågen R Bolt kit 300.obj" mtl="models/models/17855 Vågen R Bolt kit 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[500, 0, 0]} hexcolor={partname == "Vagen R Bolt Kit Ø300" ? "#08F3E7" : "#a38d72"} />
            <Scene obj="models/models/17855 Vågen R Bolt kit 300.obj" mtl="models/models/17855 Vågen R Bolt kit 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[-2500, 0, 0]} hexcolor={partname == "Vagen R Bolt Kit Ø300" ? "#08F3E7" : "#a38d72"} />

          </>
      }
    </>
    {
      formData.diameter == 200 ? <Scene obj="models/models/17855 Vågen R Drivestasjon 200.obj" mtl="models/models/17855 Vågen R Drivestasjon 200.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[1410, 25, -237]} hexcolor={partname == "Vagen R Drive Station Ø200KW" ? "#08F3E7" : "#4e96ae"} /> : <Scene obj="models/models/17855 Vågen R Drive station 300.obj" mtl="models/models/17855 Vågen R Drive station 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 90 / 180, 0]} position={[1500, 0, 0]} hexcolor={partname == "Vagen R Drive Station Ø300KW" ? "#08F3E7" : "#4e96ae"} />
    }
    {
      formData.diameter == 200 ?
        <>
          {
            formData.inletqty == 1 && <Scene obj="models/models/17855.40.31 200 Inlet.obj" mtl="models/models/17855.40.31 200 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, Math.PI * 180 / 180]} position={[900 - formData.inletp1, 200, 0]} hexcolor={partname == "Inlet  Ø200" ? "#08F3E7" : "#838486"} />
          }
          {
            formData.inletqty == 2 &&
            <>
              <Scene obj="models/models/17855.40.31 200 Inlet.obj" mtl="models/models/17855.40.31 200 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, Math.PI * 180 / 180]} position={[900 - formData.inletp1, 200, 0]} hexcolor={partname == "Inlet's  Ø200" ? "#08F3E7" : "#838486"} />
              <Scene obj="models/models/17855.40.31 200 Inlet.obj" mtl="models/models/17855.40.31 200 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, Math.PI * 180 / 180]} position={[900 - formData.inletp2, 200, 0]} hexcolor={partname == "Inlet's  Ø200" ? "#08F3E7" : "#838486"} />
            </>
          }
        </>
        :
        <>
          {
            formData.inletqty == 1 && <Scene obj="models/models/17855.40.20.004_01 Inlet.obj" mtl="models/models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, Math.PI * 180 / 180]} position={[1300 - formData.inletp1, 300, 0]} hexcolor={partname == "Inlet  Ø300" ? "#08F3E7" : "#838486"} />
          }
          {
            formData.inletqty == 2 &&
            <>
              <Scene obj="models/models/17855.40.20.004_01 Inlet.obj" mtl="models/models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, Math.PI * 180 / 180]} position={[1300 - formData.inletp1, 300, 0]} hexcolor={partname == "Inlet's  Ø300" ? "#08F3E7" : "#838486"} />
              <Scene obj="models/models/17855.40.20.004_01 Inlet.obj" mtl="models/models/17855.40.20.004_01 Inlet.mtl" rotation={[Math.PI * 90 / 180, 0, Math.PI * 180 / 180]} position={[1300 - formData.inletp2, 300, 0]} hexcolor={partname == "Inlet's  Ø300" ? "#08F3E7" : "#838486"} />
            </>
          }

        </>
    }

    {
      formData.diameter == 200 ?
        <>
          {
            formData.outletqty == 1 && <Scene obj="models/models/17855.40.31 200 Outlet.obj" mtl="models/models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-6950 + formData.outletp1, -200, 0]} hexcolor={partname == "Outlet  Ø200" ? "#08F3E7" : "#838486"} />
          }
          {
            formData.outletqty == 2 &&
            <>
              <Scene obj="models/models/17855.40.31 200 Outlet.obj" mtl="models/models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-6950 + formData.outletp1, -200, 0]} hexcolor={partname == "Outlet's  Ø200" ? "#08F3E7" : "#838486"} />
              <Scene obj="models/models/17855.40.31 200 Outlet.obj" mtl="models/models/17855.40.31 200 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-7000 + formData.outletp2, -200, 0]} hexcolor={partname == "Outlet's  Ø200" ? "#08F3E7" : "#838486"} />
            </>
          }

        </>
        :
        <>
          {
            formData.outletqty == 1 && <Scene obj="models/models/17855.40.20.004_01 Outlet.obj" mtl="models/models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-6300 + formData.outletp1, -300, 0]} hexcolor={partname == "Outlet  Ø300" ? "#08F3E7" : "#838486"} />
          }
          {
            formData.outletqty == 2 &&
            <>
              <Scene obj="models/models/17855.40.20.004_01 Outlet.obj" mtl="models/models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-6300 + formData.outletp1, -300, 0]} hexcolor={partname == "Outlet's  Ø300" ? "#08F3E7" : "#838486"} />
              <Scene obj="models/models/17855.40.20.004_01 Outlet.obj" mtl="models/models/17855.40.20.004_01 Outlet.mtl" rotation={[Math.PI * 270 / 180, 0, Math.PI * 180 / 180]} position={[-6300 + formData.outletp2, -300, 0]} hexcolor={partname == "Outlet's  Ø300" ? "#08F3E7" : "#838486"} />
            </>
          }

        </>
    }

    {
      formData.diameter == 200 ? <Scene obj="models/models/17855 Vågen R End station 200.obj" mtl="models/models/17855 Vågen R End station 200.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 270 / 180, 0]} position={[-7410, 25, 236]} hexcolor={partname == "Vagen R End station Ø200" ? "#08F3E7" : "#C0C0C0"} /> : <Scene obj="models/models/17855 Vågen R End station - 300.obj" mtl="models/models/17855 Vågen R End station - 300.mtl" rotation={[Math.PI * 180 / 180, Math.PI * 270 / 180, Math.PI * 90 / 180]} position={[-6500, 0, 0]} hexcolor={partname == "Vagen R End station Ø300" ? "#08F3E7" : "#C0C0C0"} />
    }
  </>
  )
}

export default Length8000