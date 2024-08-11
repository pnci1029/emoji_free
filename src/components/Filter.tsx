import {useState} from "react";
import style from "../assets/scss/common/main.module.scss";

type FilterType = 'all' | 'threeDOnly' | 'twoDOnly';

export function Filter() {

    const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

    const handleRadioChange = (filter: FilterType) => {
        setSelectedFilter(filter);
    };
    // const [selectedFilters, setSelectedFilters] = useState({
    //     all: true,
    //     threeDOnly: false,
    //     twoDOnly: false,
    // });
    //
    // const handleCheckboxChange = (filter: FilterType) => {
    //     setSelectedFilters((prevState) => ({
    //         ...prevState,
    //         [filter]: !prevState[filter],
    //     }));
    // };

    return(
        <>
            <div className={style.searchBox}>

                {/*  문자 검색 영역  */}
                <div className={style.searchTextArea}>
                    <input
                        placeholder={'Search Free Emoji.tsx'}
                        className={style.searchInput}
                    />
                    <div className={style.inputImg}/>
                </div>

                {/*  필터  */}
                <div className={style.filterSearchBox}>
                    {/*  체크박스  */}
                    <label className={`${style.checkboxLabel} ${selectedFilter === 'all' ? style.checked : ''}`}>
                        <input
                            type="radio"
                            className={style.filterCheckbox}
                            checked={selectedFilter === 'all'}
                            onChange={() => handleRadioChange('all')}
                        />
                        <span className={style.filterText}>All</span>
                    </label>
                    <label className={`${style.checkboxLabel} ${selectedFilter === 'threeDOnly' ? style.checked : ''}`}>
                        <input
                            type="radio"
                            className={style.filterCheckbox}
                            checked={selectedFilter === 'threeDOnly'}
                            onChange={() => handleRadioChange('threeDOnly')}
                        />
                        <span className={style.filterText}>3D only</span>
                    </label>
                    <label className={`${style.checkboxLabel} ${selectedFilter === 'twoDOnly' ? style.checked : ''}`}>
                        <input
                            type="radio"
                            className={style.filterCheckbox}
                            checked={selectedFilter === 'twoDOnly'}
                            onChange={() => handleRadioChange('twoDOnly')}
                        />
                        <span className={style.filterText}>2D only</span>
                    </label>

                    {/*  노출 갯수  */}
                    <div className={style.sortingWrapper}>
                        <span className={style.sortingText}>80</span>
                        <div className={style.showMoreBtn} />
                    </div>
                </div>
            </div>
        </>
    )
}