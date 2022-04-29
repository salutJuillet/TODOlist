import './post.css'
import { BiDotsVerticalRounded } from 'react-icons/bi';

const Post = () => {
  return (
    <div className="wrapper">
        <h1>TODO List</h1>
        <div className="post">
            <div className="post-title">
                <h3>오전 강의 듣기 (수리물리학/글쓰기)</h3>
                <a href="#"><BiDotsVerticalRounded/></a>
            </div>
            

            <div className="post-content">
                <p>9:00 ~ 10:50 수리물리학</p>
                <p>11:00 ~ 12:50 글쓰기</p>
                <p></p>
            </div>
        </div>
    </div>
  )
}

export default Post