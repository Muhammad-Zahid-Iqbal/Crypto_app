import { Col, Row, Select, Typography } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGetCryptosDetailsQuery } from '../services/cryptoApi';
import millify from 'millify';
import { CheckOutlined, DollarCircleOutlined, ExclamationCircleOutlined, FundOutlined, LineChartOutlined, MoneyCollectOutlined, NumberOutlined, StopOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import HTMLReactParser from 'html-react-parser/lib/index';

const CryptoDetails = () => {
  const {Title, Text} = Typography;
  const {Option} = Select;
  // const { data: coinHistory } = useGetCryptoHistoryQuery({ coinId, timeperiod });
  const {coinId} = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const {data, isFetching } = useGetCryptosDetailsQuery(coinId);
  const cryptoDetails = data?.data?.coin;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  console.log('data', data);

  return (
    <div>
      cryptodetails
    </div>
  )
}

export default CryptoDetails