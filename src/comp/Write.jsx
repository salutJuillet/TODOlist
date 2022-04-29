// wysiwyg 불러오기
import React, { useEffect, useState } from 'react';
import { Editor} from 'react-draft-wysiwyg';
import { EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './write.css'

export default function Write() {
    /* wysiwyg */
    const [ editorState, setEditorState ] = useState( () => 
        EditorState.createEmpty()
    );
    useEffect( () => {
        console.log(editorState);        
    }, [editorState]);  

    
  return (
    <div className="write">
        <div className="writeform">
          <h1>TODO List</h1>
          <div className="writebox">
            <Editor
              editorState = {editorState}
              onEditorStateChange = {setEditorState}
             />
          </div>
        </div>
    </div>
  )
}
