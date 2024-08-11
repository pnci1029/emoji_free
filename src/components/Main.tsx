import style from "../assets/scss/common/main.module.scss"
import {Menu} from "./Menu";
import {Filter} from "./Filter";
import {Emoji} from "./Emoji";
import {Footer} from "./Footer";

export function Main() {



    return (
        <>
            <div className={style.mainWrapper}>
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