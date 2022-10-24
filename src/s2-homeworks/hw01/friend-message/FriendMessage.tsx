import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные

export type FriendMessagePropsType = {
    messageFriend: MessageType
}
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.messageFriend.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.messageFriend.id}
                    src={props.messageFriend.user.avatar}
                    width="35px"
                    height="35px"
                />
                <div className={s.angle}></div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.messageFriend.id}
                        className={s.friendName}
                    >
                        {props.messageFriend.user.name}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.messageFriend.id}
                        className={s.friendMessageText}
                    >
                        {props.messageFriend.message.text}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.messageFriend.id}
                className={s.friendTime}
            >
                {props.messageFriend.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
