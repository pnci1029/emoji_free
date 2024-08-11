import {useCallback, useState} from "react";
import {PageResponse} from "../types/emoji";
import {getTestData} from "../slice/emojiSlice";
import {useDispatch} from "react-redux";

export function useEmojiGetter() {
    const dispatch = useDispatch<any>();
    const [pageResponse, setPageResponse] = useState<PageResponse>();

    const getTest = useCallback(async () => {
            const result: PageResponse = await dispatch(getTestData()).unwrap();
            // setArticle(result);
            setPageResponse(result);
            return result;
        },
        [dispatch]
    );

    return {
        getTest,
        pageResponse
    };
}