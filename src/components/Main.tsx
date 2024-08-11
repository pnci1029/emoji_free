import style from "../assets/scss/common/main.module.scss"
import {Menu} from "./Menu";
import {Filter} from "./Filter";
import {Emoji} from "./Emoji";
import {Footer} from "./Footer";
import {useEmojiGetter} from "../hooks/useEmojiGetter";

export function Main() {

    const {getTest} = useEmojiGetter()
    // console.log(getTest)
    const handleTest = () =>{
        getTest().then();
        console.log(getTest)
    }
    return (
        <>
            <div className={style.mainWrapper} onClick={handleTest}>
                {/*  메인 헤더 영역  */}
                <div className={style.headerWrapper}>
                    <div className={style.headerImg}/>
                </div>

                {/*  메뉴 영역  */}
                <Menu/>

                <div className={style.body}>
                    <div className={style.contentsBox}>

                        {/*  검색 영역  */}
                        <Filter/>
                        <Emoji/>

                    </div>

                    <Footer />
                </div>

            </div>
        </>
    )
}