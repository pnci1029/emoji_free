import style from "../assets/scss/common/main.module.scss"

export function Main() {
    return(
        <>
            <div className={style.mainWrapper}>
                {/*  메인 헤더 영역  */}
                <div className={style.headerWrapper}>
                    <div className={style.headerImg} />
                </div>

                {/*  메뉴 영역  */}
                <div className={style.menuBoxWrapper}>
                    <div className={style.menuButton}>
                        <span className={style.menuText}>
                            ALL
                        </span>
                    </div>

                    <div className={style.menuButton}>
                        <span className={style.menuText}>
                            ANIMALS
                        </span>
                    </div>

                    <div className={style.menuButton}>
                        <span className={style.menuText}>
                            COMPONENT
                        </span>
                    </div>

                    <div className={`${style.menuButton} ${style.selected}`}>
                        <span className={style.menuText}>
                            OBJECTS
                        </span>
                    </div>

                    <div className={style.menuButton}>
                        <span className={style.menuText}>
                            PEOPLE
                        </span>
                    </div>
                    <div className={style.menuButton}>
                        <span className={style.menuText}>
                            SYMBOLS
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}