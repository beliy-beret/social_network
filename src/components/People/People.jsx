import React from 'react';
import s from './People.module.css';
import userPhoto from '../../images/avatars/user.jpg';
import ReactPaginate from 'react-paginate';
import './pagination.css';
import { NavLink } from 'react-router-dom';

const People = (props) => {
        
    return (
        <div>
            <ReactPaginate 
                    pageCount={Math.ceil(props.totalUsersCount / props.pageSize)}
                    onPageChange={props.onChangePage}                    
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}                    
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={13}                    
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />

                {props.people.map(u =>
                    <div key={u.id} className={s.user}>
                        <div className={s.ava}>
                            <NavLink to={'/profile/' + u.id} ><img alt='avatar' src={u.photos.small !== null ? u.photos.small : userPhoto} /></NavLink>
                        </div>
                        <div className={s.button}>
                            {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.dellFollow(u.id)}>Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => props.addFollow(u.id)}>Follow</button>}
                        </div>
                        <div className={s.info}>
                            <div className={s.des}>Name: {u.name} </div>
                            <div className={s.des}>Country: {"u.location.country"} </div>
                            <div className={s.des}>City: {"u.location.city"} </div>
                            <div className={s.des}>Status: {u.status} </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default People;