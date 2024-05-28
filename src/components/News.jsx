import React, { useState } from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsaApi';
import { Card, Col, Row, Select, Typography } from 'antd';

const {Text, Title} = Typography;
const {option} = Select;

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrencies');
  const count = simplified ? 6: 12;
  const {data: cryptoNews} = useGetCryptoNewsQuery(count);
  console.log("news", cryptoNews);
  console.log("newsdata", cryptoNews?.data);
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

  if(!cryptoNews?.data) return 'Loading ...'
  const newsItems = cryptoNews?.data?.slice(0, count) || [];
  return (
    <Row gutter={[24, 24]}>
      {/* {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="Select a Crypto"
            optionFilterProp='children'
            onChange={(value) => console.log(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase())>=0}
          >

          </Select>
        </Col>
      )} */}

        {newsItems?.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
                <a href={news?.link} target='_blank' rel='noreferrer'>
                    <div className='news-image-container'>
                      <Title className='news-title' level={4}>{news?.title}</Title>
                        <img className='img' src={news?.content[0]?.images || demoImage}/>
                    </div>
                    <p>
                      {news?.content[0]?.content.length > 100? `${news?.content[0]?.content.substring(0, 200)}...` : news?.content[0]?.content}
                    </p>
                    <div className='provider-container'>
                      <div>
                        <Text>{news?.content[0]?.author}: </Text>
                        <Text>{news?.content[0]?.timestamp}</Text>
                      </div>
                    </div>
                </a>
            </Card>
          </Col>
        ))}
    </Row>
  )
}

export default News