import { useContext, useMemo, useState, createContext } from 'react';
import processingArray from '../utils/processingArray';

export const ContentContext = createContext(null);

export const ContentContextProvider = ({ children }) => {
  const [contentData, setContentData] = useState([]);

  const { report } = contentData || {};
  const { daily } = report || {};

  const ROAS = processingArray('roas', daily);
  const CPC = processingArray('cpc', daily);
  const COST = processingArray('cost', daily);
  const IMP = processingArray('imp', daily);
  const CLICK = processingArray('click', daily);
  const CONVVALUE = processingArray('convValue', daily);

  const AD_LIST = ['전체광고', '진행중', '완료'];
  const DAY_LIST = ['주간', '일간'];
  const TEM_DATA = [
    {
      id: 1,
      content: ROAS,
      title: 'ROAS',
      unit: '%',
    },
    {
      id: 2,
      content: CPC,
      title: '광고비',
      unit: '원',
    },
    {
      id: 3,
      content: COST,
      title: '노출 수',
      unit: '회',
    },
    {
      id: 4,
      content: CPC,
      title: '클릭 수',
      unit: '회',
    },
    {
      id: 5,
      content: CLICK,
      title: '전환 수',
      unit: '회',
    },
    {
      id: 6,
      content: CONVVALUE,
      title: '매출',
      unit: '원',
    },
  ];

  const options = useMemo(
    () => [contentData, setContentData, TEM_DATA, AD_LIST, DAY_LIST],
    [contentData]
  );
  return <ContentContext.Provider value={options}>{children}</ContentContext.Provider>;
};

export const useContentData = () => useContext(ContentContext);
