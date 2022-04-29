import React from 'react'
import '../comp/home.css'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import { BsPlus, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { HiPencil } from 'react-icons/hi';

export default function April20(props) {
    const todoList = [];
    // console.log(props.todo[0].apr20);
    for(let list of props.todo[0].apr20){
        todoList.push(<li key={list.id}>
                        <input type="checkbox" /> 
                        <span className="linkBox">
                            <a href="#">{list.body}</a>
                            {/* { ({list.body}="")?<Link to="/write">{list.body}</Link> : (<span><Link to="Home">Home</Link></span>)} */}
                            <span className="editBtn"><a href="#"><HiPencil /></a></span>
                        </span>
                      </li>);
    }

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
