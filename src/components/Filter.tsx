import {useState} from "react";
import style from "../assets/scss/common/main.module.scss";

type FilterType = 'all' | 'threeDOnly' | 'twoDOnly';

export function Filter() {
    const [selectedFilters, setSelectedFilters] = useState({
        all: true,
        threeDOnly: false,
        twoDOnly: false,
    });

    const handleCheckboxChange = (filter: FilterType) => {
        setSelectedFilters((prevState) => ({
            ...prevState,
            [filter]: !prevState[filter],
        }));
    };

    return(
        <>
            <div className={style.searchBox}>

                {/*  문자 검색 영역  */}
                <div className={style.searchTextArea}>
                    <input
                        placeholder={'Search Free Emoji'}
                        className={style.searchInput}
                    />
                    <div className={style.inputImg}/>
                </div>

                {/*  필터  */}
                <div className={style.filterSearchBox}>
                    <label className={`${style.checkboxLabel} ${selectedFilters.all ? style.checked : ''}`}>
                        <input
                            type="checkbox"
                            className={style.filterCheckbox}
                            checked={selectedFilters.all}
                            onChange={() => handleCheckboxChange('all')}
                        />
                        <span className={style.filterText}>All</span>
                    </label>
                    <label className={`${style.checkboxLabel} ${selectedFilters.threeDOnly ? style.checked : ''}`}>
                        <input
                            type="checkbox"
                            className={style.filterCheckbox}
                            checked={selectedFilters.threeDOnly}
                            onChange={() => handleCheckboxChange('threeDOnly')}
                        />
                        <span className={style.filterText}>3D only</span>
                    </label>
                    <label className={`${style.checkboxLabel} ${selectedFilters.twoDOnly ? style.checked : ''}`}>
                        <input
                            type="checkbox"
                            className={style.filterCheckbox}
                            checked={selectedFilters.twoDOnly}
                            onChange={() => handleCheckboxChange('twoDOnly')}
                        />
                        <span className={style.filterText}>2D only</span>
                    </label>

                    <div className={style.sortingWrapper}>
                        <span className={style.sortingText}>80</span>
                        <div className={style.showMoreBtn} />
                    </div>
                </div>
            </div>
        </>
    )
}