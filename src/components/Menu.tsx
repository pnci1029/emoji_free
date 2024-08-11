import style from "../assets/scss/common/main.module.scss"

enum Category{
    ALL = "ALL",
    ANIMALS = "ANIMALS",
    COMPONENT = "COMPONENT",
    OBJECTS = "OBJECTS",
    PEOPLE = "PEOPLE",
    SYMBOLS = "SYMBOLS",
}

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
            "number": 11,
            "isSelected": false,
        },
        {
            "name": "OBJECTS",
            "number": 4155,
            "isSelected": false,
        },
        {
            "name": "PEOPLE",
            "number": 10,
            "isSelected": false,
        },
        {
            "name": "SYMBOLS",
            "number": 20211,
            "isSelected": false,
        },
    ]

    const handleSelectedCategory = () =>{

    }

    return (
        <>
            <div className={style.menuBoxWrapper}>
                {menuBox.map((data, idx) => (
                    <div className={`${style.menuButton} ${data.isSelected ? style.selected : ''}`} key={idx}>
                        <span className={style.menuText}>
                            {data.name}({data.number})
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
}