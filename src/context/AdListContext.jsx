import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AdListContext = createContext(null);

export const useAdList = () => useContext(AdListContext);

export default function AdListProvider({ children }) {
  const [adList, setAdList] = useState([]);
  const [adTitle, setAdTitle] = useState('');

  const onTitleClickHandler = (e) => setAdTitle(e.target.innerText);

  const filteredActive = adList?.ads?.filter((ad) => ad.status === 'active');
  const filteredAdsEnded = adList?.ads?.filter((ad) => ad.status === 'ended');

  const filterFunction = () => {
    if (adTitle === '전체광고') {
      return adList?.ads;
    }
    if (adTitle === '진행중') {
      return filteredActive;
    }
    if (adTitle === '완료') {
      return filteredAdsEnded;
    }
  };

  // 리듀서 (액션.type)!!
  // 그냥 필터를 이런식으로 해줬는데 구현은 했는데 도움이 될지는 모르겠다.

  const options = useMemo(
    () => [adList, setAdList, adTitle, setAdTitle, onTitleClickHandler, filterFunction],
    [adList, setAdList, adTitle, setAdTitle]
  );

  return <AdListContext.Provider value={options}>{children}</AdListContext.Provider>;
}
