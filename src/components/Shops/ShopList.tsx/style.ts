import styled from 'styled-components'
import { Row } from 'react-bootstrap'

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleBackContainer = styled.div`
    width: 100%;
    height: 325px;
    position: relative;
    overflow: hidden;

    color: #fff;
    font-family: Pretendard-medium;

    /* background-image: url('shopListBanner.png'); */
    background-image: url('https://moon-test1-bucket.s3.ap-northeast-2.amazonaws.com/shopListBanner.png');

    /* linear-gradient(검정색 필터로 활용) */
    /* background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)); */

    // 가상 요소 만들어서 배경만 흐리게
    /* &::before {
        content: '';
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;

        background-image: url('shopListBanner.png');
        filter: blur(2.5px);
        -webkit-filter: blur(2.5px);
        -moz-filter: blur(2.5px);
        -o-filter: blur(2.5px);
    } */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
`

export const ShopListH2 = styled.h2`
    color: #fff;
    font-family: 'LOTTERIACHAB';
    font-size: 48px;

    -webkit-text-stroke-width: 1.5px;
    -webkit-text-stroke-color: #005D32;
`
export const ShopP = styled.p`
    margin: 0 0 10px;
    /* z-index: 2; */

    color: #fff;
    text-align: center;
    font-family: Pretendard-regular;
`

export const ShopSearchContainer = styled.div`
    width: 725px;
    /* height: 131px; */
    padding: 19px 33px;

    border-radius: 7px;
    background: #fff;
    box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: Pretendard-regular;

    overflow: visible;
    position: absolute;
    top: 290px;
    z-index: 10;

    display: flex;
    flex-direction: column;
`

// export const ShopSearchCondition = styled.div`
//     width: 109px;
//     height: 40px;
//     padding: 11px 15px;
//     border-radius: 26px;
//     border: 1px solid #dadada;
//     color: #8f8e93;
//     font-size: 16px;
// `
export const ShopSearchInput = styled.input`
    width: 427px;
    height: 51px;
    padding: 11px 18px;

    border-radius: 7px;
    border: 1px solid #dadada;
    background: #f8f8f8;
    color: #8f8e93;
`
export const SearchBtn = styled.button`
    height: 51px;
    padding: 15px 54px;
    color: #fff;
    font-family: Pretendard-medium;
    background-color: #00bd8f;
    border: none;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
`
export const ShopSearchBox = styled.div`
    width: 100%;
    /* height: 131px; */

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ShopTagContainer = styled.div`
    width: 100%;
    padding: 15px 0 0;

    text-align: center;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ShopListContainer = styled.div`
    width: 1200px;

    font-family: Pretendard-medium;

    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ShopListH3 = styled.h3`
    margin: 103px 0 20px;
    font-family: Pretendard-bold;
    font-size: 30px;
`

export const ShopCategoryUl = styled.ul`
    width: 100%;
    height: 70px;
    margin: 0 0 100px;
    border-bottom: 1px solid #8f8e93;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ShopCategoryLi = styled.li`
    cursor: pointer;
    width: 165px;
    height: 100%;

    font-size: 18px;
    color: #8f8e93;
    text-align: center;
    font-family: Pretendard-regular;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &.active {
        color: #1d1d1b;
        border-bottom: 1px solid #000;
    }
`

export const StRow = styled(Row)`
    width: 100%;
    margin: 0 auto;
    column-gap: 63px;
    row-gap: 20px;
`

export const ShopBox = styled.div`
    cursor: pointer;
    max-width: 358px;
    /* height: 454px; */
    height: 445px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    font-family: Pretendard-medium;
    background-color: #fff;

    &:hover {
        opacity: 0.8;
    }
`
export const thumImg = styled.img`
    width: 100%;
    height: 269px;
    overflow: hidden;
    object-fit: cover;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`
export const CardBodyDiv = styled.div`
    width: 100%;
    padding: 26px 36px;
    overflow: hidden;
`
export const ShopListH4 = styled.h4`
    font-family: Pretendard-bold;
    font-size: 20px;
    margin: 0 0 16px;
`

export const ShopGrid = styled.div`
    width: 100%;
    color: #8f8e93;
    font-size: 16px;
    font-family: Pretendard-regular;

    display: grid;
    grid-template-columns: 0.8fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr 1fr; */
    grid-gap: 8px 10px; // 브라우저 호환 범위 넓히기 위해 작성
    gap: 8px 10px;

    p {
        // 넘치는 내용 처리
        display: inline-block;
        white-space: nowrap; // 자동 줄바꿈 방지
        overflow: hidden; // 넘치는 부분 화면에서 숨김
        text-overflow: ellipsis; // 숨긴 부분 말줄임표(...) 처리
    }
`
export const BodyTimeP = styled.p`
    grid-column: 1 / 3;
    grid-row: 1 / 3;
`
export const BodyTimeInfoP = styled.p`
    grid-column: 2 / 4;
    grid-row: 1 / 2;
`
export const BodyTelP = styled.p`
    grid-column: 1 / 3;
    grid-row: 2 / 3;
`
export const BodyTelInfoP = styled.p`
    grid-column: 2 / 4;
    grid-row: 2 / 3;
`
export const BodyAddressP = styled.p`
    grid-column: 1 / 3;
    grid-row: 3 / 4;
`
export const BodyAddressInfoP = styled.p`
    grid-column: 2 / 4;
    grid-row: 3 / 4;
`
export const CardBodyP = styled.p`
    grid-column: 1 / 4;
    grid-row: 4 / 5;
`
export const CardBodyNumP = styled.p`
    grid-column: 2 / 5;
    grid-row: 4 / 5;
`
