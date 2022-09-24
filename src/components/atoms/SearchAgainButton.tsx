import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    shopListCount: number;
}

export const SearchAgainButton = (props: Props) => {
    const { shopListCount } = props;
    return (
        <>
            {shopListCount > 0 ? (
                <a className="searchAgain" href="#shopSearch" >
                    <SearchIcon></SearchIcon>
                </a >
            ) : null}
        </>

    )
}
