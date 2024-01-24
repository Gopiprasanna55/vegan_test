
import React, {useState} from "react";
import axios from "axios";
import ResizePanel from "react-resize-panel";
import './styles.css';
import SidePanel from "./SidePanel";
import logo from "./Images/logo.png";
import Model from "./Model";
import { FaDownload } from "react-icons/fa6";
import 'react-contexify/ReactContexify.css';
import { useGlobalcontext } from "./context";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const App = () => {
  const { formData, filtertabledata, inletpos1, inletpos2, outletpos1, outletpos2 } = useGlobalcontext()
  var { diameter, length, inletqty, outletqty } = formData
  const [res, setRes] = useState( "" )
  const [loading, setLoading] = useState( false )
  const [open, setOpen] = React.useState( false );
  const Transition = React.forwardRef( function Transition (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  } );

  const DownLoadPdf = async () => {
    const arrangethedata = filtertabledata.map( ( item, i ) => {
      const newObj = {
        id: i + 1,
        partnumber: item.partnumber,
        description:item.description,
        qty: item.qty,
      };
      return newObj;
    } );
    setLoading(true)
    try {
      const response = await axios.post( "https://vagenexpressapi.azurewebsites.net/api/BOM/GeneratePDFFromJson", {
        BOM: arrangethedata,
        Diameter: diameter,
        Inletp1: inletpos1,
        Inletp2: inletpos2,
        Inletqty: inletqty,
        Length: length,
        Outletp1: outletpos1,
        Outletp2: outletpos2,
        Outletqty: outletqty
      }, );
      setOpen( true )
      setRes( response.data )
      setLoading( false )
    } catch ( err ) {
      alert( err )
      setLoading( false )
    }
  };
  const handleClose = () => {
    setOpen( false );
  };

  return (
    <div className={`${loading ? 'overlay ' : ''}`} >
      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}
      {
        open && loading == false &&
        <React.Fragment>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Your drawing is ready..."}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Please click the "Download" button to download the PDF drawing for the configuration you have selected.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => {
                window.open( res, "_blank" )
                setOpen( false );
              }}>Download</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </Dialog>
        </React.Fragment>
      }
      <div className='body' style={{ display: "flex", height: "100vh" }}>
        <div className='content' style={{ overflow: "hidden", flex: "1", display: "flex", flexDirection: "column" }}>
          <nav style={{ padding: "5px 20px", borderBottom: "1px solid #ccc", display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={logo} alt="" style={{ width: "100px" }} />
              <h3 style={{ margin: "0", color: "#000c66" }}>Express Pipe Conveyor</h3>
            </div>
            <div>
              <button className="btn" style={{ display: "flex", gap: "10px" }} onClick={DownLoadPdf}>
                <span><FaDownload /></span>
                <span>PDF</span>
              </button>
            </div>
          </nav>
          <div className="model" style={{ overflow: "auto", flex: "1" }}>
            <Model />
          </div>
        </div>
        <ResizePanel direction="w" borderClass='customResizeBorder' className="r">
          <SidePanel />
        </ResizePanel>
      </div>
    </div>
  )
};
export default App;
































