import React from 'react'

export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string
}

function User({id, name, username, email}: UserType){
    return (
        <div
        className={"bg-gray-200 p-2 w-fit rounded-md outline-1 solid outline-gray-200 text-black"
        }
    >
        <p>{id}</p>
        <p>{name}</p>
        <p>{username}</p>
        <p>{email}</p>
    </div>

    )
}

export default User
