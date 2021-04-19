import React from 'react'
import orderBy from 'lodash/orderBy'
import { DialogItem } from '../../'
import IconNoSearch from '../../basic/icon-no-search/IconNoSearch'

import './style.scss'

const Dialogs = ({ items, userId, onSearch, valueInput, onSelectId }) => {
    return (
        <>
            <div className="search_block">
                <i className="fas fa-search"></i>
                <input 
                    className="dialogs_search" 
                    placeholder="Search for a dialog" 
                    onChange={e => onSearch(e.target.value)}
                    value={valueInput}/>
            </div>
            <div className="im_dialogs_col scroll">
                <div className="im_dialogs">
                    <ul className="nav_stacked">

                        {items.length ? (
                                orderBy(items, ['date'], ['desc']).map(item => {
                                    return (
                                        <DialogItem
                                            key={item._id}
                                            onSelect={onSelectId}
                                            {...item}
                                            isMe={item.user._id === userId}
                                            unreaded={1}
                                        />
                                    )
                                })
                            )
                            : (
                                <IconNoSearch />
                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dialogs
