import style from "../assets/scss/common/main.module.scss"

export function Menu() {

    const menuBox = [
        {
            "name": "ALL",
            "number": 111,
            "isSelected": true,
        },
        {
            "name": "ANIMALS",
            "number": 111,
            "isSelected": false,
        },
        {
            "name": "COMPONENT",
            "number": 111,
            "isSelected": false,
        },
        {
            "name": "OBJECTS",
            "number": 111,
            "isSelected": false,
        },
        {
            "name": "PEOPLE",
            "number": 111,
            "isSelected": false,
        },
        {
            "name": "SYMBOLS",
            "number": 111,
            "isSelected": false,
        },
    ]
    return (
        <>
            <div className={style.menuBoxWrapper}>
                {menuBox.map((data, idx) => (
                    <div className={`${style.menuButton} ${data.isSelected ? style.selected : ''}`}>
                        <span className={style.menuText}>
                            {data.name}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}