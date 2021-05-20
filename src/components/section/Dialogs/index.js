import React from 'react'
import orderBy from 'lodash/orderBy'
import { DialogItem, UsersItem } from '../../'
import IconNoSearch from '../../basic/icon-no-search/IconNoSearch'

import './style.scss'

const Dialogs = (props) => {

    const {
        items,
        user,
        onSearch,
        valueInput,
        currentDialogId,
        serchUsers,
        currentUserId,
        removeDialogId
    } = props;

    return (
        <>
            <div className="search_block">
                <i className="fas fa-search"></i>
                <input
                    className="dialogs_search"
                    placeholder="Search for a dialog"
                    onChange={e => onSearch(e.target.value)}
                    value={valueInput} />
            </div>
            <div className="im_dialogs_col scroll">
                <div className="im_dialogs">
                    <ul className="nav_stacked">

                        {items.length ? (
                            orderBy(items, ['updatedAt'], ['desc']).map(item => {
                                return (
                                    <DialogItem
                                        key={item._id}
                                        {...item}
                                        partner={user.id !== item.author._id ? item.author : item.partner}
                                        isMe={user._id}
                                        currentDialogId={currentDialogId}
                                        removeDialogId={removeDialogId}
                                    />
                                )
                            })
                        )
                            : (
                                <IconNoSearch text={'No dialogs found'} />
                            )
                        }

                    </ul>

                    {
                        (serchUsers || valueInput) && (
                            <ul className="nav_stacked">
                                <div className="other_users">Other users</div>

                                {
                                    serchUsers.length ? (
                                        serchUsers.map(item => {
                                            return (
                                                <UsersItem
                                                    key={item._id}
                                                    users={item}
                                                    currentUserId={currentUserId}
                                                />
                                            )
                                        })
                                    ) : (
                                        <IconNoSearch text={'The user does not exist'} />
                                    )
                                }
                            </ul>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default Dialogs
