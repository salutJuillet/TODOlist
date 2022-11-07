import React, { useEffect } from 'react'
import './home.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { BsPlus, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';

const LIST = [
    {"id":1, "body":"오전 강의 듣기 (수리물리학/글쓰기)"},
    {"id":2, "body":"책상 정리하기"},
    {"id":3, "body":"점심 -토마토 파스타"},
    {"id":4, "body":"오후 강의 듣기 (전자기학)"},
    {"id":5, "body":"오늘치 강의 태블릿에 정리하기"},
    {"id":6, "body":"운동하기 -링피트 000일 차!"},
    {"id":7, "body":"저녁 -김치전"},
    {"id":8, "body":"RealClass -Peanuts 16일 차 듣기"},
    {"id":9, "body":"빨래 개기"},
    {"id":10, "body":""},
    {"id":11, "body":""},
    {"id":12, "body":""},
    {"id":13, "body":""},
    {"id":14, "body":""},
    {"id":15, "body":""},
    {"id":16, "body":""}
  ]

export default function Home() {
    let todoList = LIST.map(li => {
        return(
            <li key={li.id}>
                <input type="checkbox" /> 
                <span className="linkBox">
                    <Link to={'/post/' + li.id}>{li.body}</Link> 

                    <span className="editBtn">
                        {
                            li.body !== ""
                            ? <Link to={'/post/' + li.id}><HiPencil /></Link>
                            : <Link to="/write"><HiPencil /></Link>
                        }
                    </span>
                </span>
            </li>
        )
    });
    
    useEffect(() => {
        axios.get('./data/data.json')
        .then(response => {
            const list = [response.data];
            // console.log(list[0]);
            // todoList = list[0][0].map(li => {
            //     return(
                    // <li key={li.id}>
                    //     <input type="checkbox" /> 
                    //     <span className="linkBox">
                    //         <a href="#">{li.body}</a>
                    //         {
                    //             (li.body="") ? <Link to="/write">{li.body}</Link> : (<span><Link to="/">Home</Link></span>)
                    //         }
                    //         <span className="editBtn"><a href="#"><HiPencil /></a></span>
                    //     </span>
                    // </li>
            //     )
            // });
            // console.log(todoList);
        })
        .catch(err => {
            console.log(err);
        })
    })

    // const todoList = [];
    // console.log(props.todo[0].apr20);
    // for(let list of props.todo[0].apr20){
    //     todoList.push(<li key={list.id}>
    //                     <input type="checkbox" /> 
    //                     <span className="linkBox">
    //                         <a href="#">{list.body}</a>
    //                         {/* { ({list.body}="")?<Link to="/write">{list.body}</Link> : (<span><Link to="Home">Home</Link></span>)} */}
    //                         <span className="editBtn"><a href="#"><HiPencil /></a></span>
    //                     </span>
    //                   </li>);
    // }

  return (
    <div className="wrapper">
        <h1>TODO List</h1>

        <div className="container">
            {/* 상단 메뉴 */}
            <div className="btnBox">
               <div className="date">
                    <MdArrowLeft className="menu-btn" /><p>2022.04.20</p>
                    <MdArrowRight className="menu-btn" />
                </div>
                <div className="edit">
                    <BsPlus className="menu-btn" />
                </div>
            </div>

            {/* 투두 리스트 */}
            <ul className="todo">
                {todoList}
            </ul>

            <p className="bottomText">Every day, good day!</p>
        </div>

        <BsChevronLeft className="prev-btn" />
        <BsChevronRight className="next-btn" />
    </div>
  )
}
