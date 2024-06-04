import React, {useState,useEffect,useRef, useContext } from 'react'
import context from '../../../../context/context'
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; 


export default function ServiceDescriptionItem({props}) {
  const { selectOptions, setSelectedOptions} = useContext(context)
  const [isQuillInitialized, setIsQuillInitialized] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
  if (!editorRef.current) {
  const editor = new Quill('#rich', {
    modules: {
      toolbar: true
    },
    theme: 'snow' 
  });

  editor.root.innerHTML = selectOptions[props].description;
  

  editor.enable();
  setIsQuillInitialized(true);
  editorRef.current = editor;

  }

  }, [isQuillInitialized]);

  return (

<div className='flex justify-between items-center'>
<div className="join join-vertical w-full ">
  <div className="collapse collapse-arrow join-item border border-base-300 ">
    <input type="checkbox" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title font-medium ">
    Description
    </div>
    <div className="collapse-content"> 
      <div class="flex flex-col items-center w-full">
  <div class="w-full border border-gray-300 rounded-md p-3">
    <div id="rich" class="h-32"></div>
  </div>
</div>
    </div>
  </div>
</div>
</div>


  )
}

