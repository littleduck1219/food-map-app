import { searchState } from "@/atom";
import { DISTRICT_ARR } from "@/data/store";
import { SearchFilterProps } from "@/types/propsTypes";
import React, { Dispatch, SetStateAction } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRecoilState, useRecoilValue } from "recoil";

const SearchFilter = () => {
    const [search, setSearch] = useRecoilState(searchState);

    return (
        <div className='flex flex-col md:flex-row gap-2 my-4'>
            <div className='flex items-center justify-center w-full gap-2'>
                <AiOutlineSearch className='w-6 h-6' />
                <input
                    type='search'
                    onChange={(e) => setSearch({ ...search, q: e.target.value })}
                    placeholder='음식점 검색'
                    className='block w-full p-3 text-gray-800 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:border-blue-500'
                />
            </div>
            <select
                onChange={(e) => setSearch({ ...search, district: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-800 text-sm md:max-w-[200px] rounded-lg focus:border-blue-500 outline-none block w-full'>
                <option value=''>지역선택</option>
                {DISTRICT_ARR.map((data) => (
                    <option value={data} key={data}>
                        {data}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SearchFilter;
