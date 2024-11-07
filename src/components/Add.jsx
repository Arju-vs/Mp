// rafce
import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { saveVideoAPI } from '../services/allAPI';

const Add = ({setAddResponseFromHome}) => {
  const [InvalidYtLink,setInvalidYtLink] = useState(false)

  const [videoDetails,setVideoDetails] = useState({
    caption:"",imgUrl:"",youTubeLink:""
  });
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const extractingEmbedLinkFromYoutubeLink = (userInputYoutubeLink)=>{
    // steps creating emnbeded link from yt link
    if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){
      console.log(userInputYoutubeLink.split("v=")[1].slice(0,11));
      const videoId = userInputYoutubeLink.split("v=")[1].slice(0,11)
      setInvalidYtLink(false)
      setVideoDetails({...videoDetails,youTubeLink:`https://www.youtube.com/embed/${videoId}`})
    }else{
      setInvalidYtLink(true)
      setVideoDetails({...videoDetails,youTubeLink:""})
    }
  }

  const handleUploadVideo = async ()  =>{
    // object destructure : {key1,key2....} = object-name
    const {caption,imgUrl,youTubeLink} = videoDetails
    if(caption && imgUrl && youTubeLink) {
      // store video details permanently
      // alert("proceed to store video permanently")
      try{
       const result = await saveVideoAPI(videoDetails)
       console.log(result);
       if(result.status>=200 && result.status<300){
        // video added to json file
        alert("Video uploaded successfully!!!")
        handleClose()
        setAddResponseFromHome(result)
       }else{
        console.log(result);
       }
      }catch(err){
        console.log(err);
      }
    }else{
      alert("Please fill the form")
    }
  }
  
  return (
    <>

      <div className="d-flex align-items-center">
        <h4>Upload New Video</h4>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="border rounded p-3">
          <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image URL">
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,imgUrl:e.target.value})} type="text" placeholder="Video Image URL" />
      </FloatingLabel>
      <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
        <Form.Control onChange={e=>extractingEmbedLinkFromYoutubeLink(e.target.value)} type="text" placeholder="Video Youtube Link" />
      </FloatingLabel>
      {
        InvalidYtLink &&
        <div className="text-danger fw-bolder mt-2">Invalid youTube Link... Please try with other!!!</div>
      }
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="btn btn-info">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add