import {useCallback} from "react";
import {Emoji} from "../types/emoji";
import {getTestData} from "../slice/emojiSlice";
import {useDispatch} from "react-redux";

export function useEmojiGetter() {
    const dispatch = useDispatch<any>();

    const getTest = useCallback(async () => {
            const result: Emoji = await dispatch(getTestData()).unwrap();
            console.log('ㅡㅡㅡㅡㅡㅡ')
            console.log(result)
            console.log('ㅡㅡㅡㅡㅡㅡ')
            // setArticle(result);
            return result;
        },
        [dispatch]
    );

    return {
        getTest,
    };
}