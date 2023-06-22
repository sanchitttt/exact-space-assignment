import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { PostMessage } from './types';

const initialState = {
    users: ["Alan", "Bob", "Carol", "Dean", "Elin"],
    messages: [
        {
            username: 'Alan',
            likes: 0,
            message: 'Hey',
            initials: 'AL',
            bgColor: '#904C4C',
            timestamp: '17:26',
        }
    ]
}



const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        postMessage: (state, payload: PayloadAction<PostMessage>) => {
            state.messages.push(payload.payload);
        }
    }
})

export default chatSlice;