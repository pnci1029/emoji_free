import style from "../assets/scss/common/main.module.scss"
import {Menu} from "./Menu";

export function Main() {
    return(
        <>
            <div className={style.mainWrapper}>
                {/*  메인 헤더 영역  */}
                <div className={style.headerWrapper}>
                    <div className={style.headerImg} />
                </div>

                {/*  메뉴 영역  */}
                <Menu />

                <div className={style.body}>
                    <div className={style.contentsBox}>

                        {/*  검색 영역  */}
                        <div className={style.searchBox}>

                            {/*  문자 검색 영역  */}
                            <div className={style.searchTextArea}>
                                <input
                                    placeholder={'Search Free Emoji'}
                                    className={style.searchInput}
                                />
                                <div className={style.inputImg} />
                            </div>

                            {/*  필터  */}
                            <div className={style.filterSearchBox}>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}