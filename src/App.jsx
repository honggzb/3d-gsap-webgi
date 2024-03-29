import { useRef } from 'react';
import Nav from './components/Nav';
import Jumbtron from './components/Jumbtron';
import SoundSection from './components/SoundSection';
import DisplaySection from './components/DisplaySection';
import WebgiViewer from './components/WebgiViewer';
import Loader from './components/Loader';

function App() {

  const webgiViewerRef = useRef()
  const contentRef = useRef()

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview()
  }

  return (
    <div className="App">
      <Loader />
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbtron />
        <SoundSection />
        <DisplaySection triggerPreview={handlePreview}/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
