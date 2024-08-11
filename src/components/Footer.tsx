import style from "../assets/scss/common/footer.module.scss";

export function Footer() {
    return (
        <>
            {/*  푸터  */}
            <div className={style.footer}>
                            <span className={style.footerText}>
                                On this website, you can freely download a variety of emojis in both PNG and SVG formats.<br/>
                                However, please note that they cannot be used for commercial purposes.<br/>
                                Refer to the Copyright Info for proper usage.<br/>
                                Efforts will continue to provide you with the most up-to-date emojis
                                <span className={style.yellow}> :)</span>
                            </span>

                <div className={style.corporationWrapper}>
                    <div className={style.corporationTextWrapper}>
                                    <span className={style.footerText}>
                                        ⓒ Copyrights 2024 &nbsp;
                                        <span className={style.yellow}>
                                             EMOJIFREE
                                            </span>
                                        .SITE
                                    </span>

                    </div>

                    <span className={style.footerText}>
                                    MAIL : emojifree.site@gmail.com
                                </span>
                    <span className={style.yellow}>
                                    Copyright Info
                                </span>
                </div>
            </div>
        </>
    )
}