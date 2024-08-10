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

            </div>
        </>
    )
}