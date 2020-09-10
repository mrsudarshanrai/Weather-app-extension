import React, { useEffect, useState } from 'react';
import axios from "axios";

const News = () => {
    const [newsOf, setNewsOf] = useState('weather');
    const [weatherNews, setWeatheNews] = useState([]);
    const [isLoading, setIsLoading] = useState('Refresh')

    useEffect(() => {
        const getNews = async () => {
            setIsLoading(() => {
                return (
                    <div className="loader-btn"></div>
                )
            })
            const getHeadlines = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json/', {
                params: {
                    q: newsOf,
                    'api-key': 'rfs41U4s1NC8Ku3QsmWJWlMdoPCWctgz',
                }
            })

            setWeatheNews(getHeadlines.data.response.docs);
            setIsLoading('Refresh');
            console.log(getHeadlines.data)

        }
        getNews();
    }, [newsOf])

    const handleLoadMore = () => {
        setIsLoading(() => {
            return (
                <div className="loader-btn"></div>
            )
        });

        /**
         * refresh xD
         */
        setNewsOf(newsOf => [...newsOf, 'climate']);
    }

    return (
        <div className="actual-news">
            {
                weatherNews.map((news, i) => {
                    return (
                        <div key={i} className="news-box">
                            <div className="news-img">
                            </div>
                            <div className="news-description">
                                <a href={news.web_url} target="_blank" className="headline">{news.headline.main}</a>
                                <p>{news.pub_date.substring(0, news.pub_date.indexOf('T'))}</p>
                            </div>
                        </div>
                    )
                })
            }
            <div className="load-more">
                <button onClick={handleLoadMore}>
                    {isLoading}
                </button>
            </div>
        </div>
    );
}

export default News;