import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
    isDispShopList: boolean;
}

export const SearchAgainButton = (props: Props) => {
    const { isDispShopList } = props;
    return (
        <>
            {isDispShopList ? (
                <a className="searchAgain" href="#shopSearch" >
                    <SearchIcon></SearchIcon>
                </a >
            ) : null}
        </>

    )
}
