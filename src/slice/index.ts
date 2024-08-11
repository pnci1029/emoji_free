import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import EmojiSlice from "./emojiSlice";

export const store = configureStore({
    reducer: {
        emoji: EmojiSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;