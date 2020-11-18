import React, { useContext } from 'react'; 
import { UserContext, ChannelContext}  from '../../App';

export default function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
    return(
        <div className="text-center">
            "From App.js component getting" {user} "and" {channel} "to subchild component ( ComponentE )"
        </div>
    );
}