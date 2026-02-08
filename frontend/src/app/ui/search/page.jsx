'use client';

import { useEffect, useState } from 'react';

const countries = [
    { code: 'AE', en: 'United Arab Emirates', ko: '아랍에미리트' },
    { code: 'AF', en: 'Afghanistan', ko: '아프가니스탄' },
    { code: 'ZW', en: 'Zimbabwe', ko: '짐바브웨' },
];

export async function feachCountries(query) {
    await new Promise((r) => setTimeout(r, 1_000));

    return countries.filter(
        (country) =>
            country.en.toLowerCase().includes(query.toLowerCase()) ||
            country.ko.toLowerCase().includes(query.toLowerCase()),
    );
}

const SearchInput = ({ value, onChange }) => {
    return (
        <input
            type="search"
            placeholder="국가 이름을 입력하세요"
            value={value}
            onChange={onChange}
        />
    );
};

const SearchResults = ({ countries, searching }) => {
    return (
        <article aria-busy={searching}>
            {searching ? (
                '잠시만 기다려주세요.'
            ) : (
                <>
                    <header>총 {countries.length}개의 국가가 검색 되었습니다.</header>
                    <ul>
                        {countries.map(({ code, en, ko }) => (
                            <li key={code}>
                                {ko} ({en})
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </article>
    );
};

const Search = () => {
    const [query, setQuery] = useState('');
    const [countries, setCountries] = useState([]);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        setSearching(true);
        feachCountries(query).then((countries) => {
            setCountries(countries);
            setSearching(false);
        });
    }, [query]);

    return (
        <>
            <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
            <SearchResults countries={countries} searching={searching} />
        </>
    );
};

export default function SearchTest() {
    return <Search />;
}
