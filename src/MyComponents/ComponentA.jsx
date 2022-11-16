import React, { useContext } from 'react'
import { UserContext, ChannelContext } from '../App'
export default function ComponentA() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (

        <div>
            {/* this is the ugly way to use multiple user context */}
            {/* <UserContext.Consumer>
                <ChannelContext.Consumer>
                    {
                        user => {
                            return (
                                channel => {
                                    return (<div>{user.name} and {channel}</div>)
                                }
                            )
                        }
                    }

                </ChannelContext.Consumer>
            </UserContext.Consumer> */}
            <div>{user.name}</div>
            <br />
            <div>{channel}</div>

        </div>
    )
}
