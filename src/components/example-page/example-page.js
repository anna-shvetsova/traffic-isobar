import { useState, useCallback } from 'react';
import PageHeading from "../controls/page-heading";
import Subheading from "../controls/subheading";
import Button from "../controls/button";
import cat from './cat.jpg';
import './example-page.css';

const ExamplePage = () => {
    const [photo, setPhoto] = useState(cat);
    const [loading, setLoading] = useState(false);

    const getPhoto = useCallback(async () => {
        const url = 'https://api.thecatapi.com/v1/images/search';
        const apiKey = '2f6374f0-c2ad-4b51-a1a7-5007d1a56c5c';
        const response = await fetch(url, {
            headers: {
                'x-api-key': apiKey
            }
        });
        if (!response.ok) {
            return cat;
        };
        const json = await response.json();
        const catUrl = json[0].url;
        return catUrl ? catUrl : cat;
    }, [])

    const onLoadClick = useCallback(async () => {
        setLoading(true);
        const url = await getPhoto();
        setLoading(false);
        setPhoto(url);
    }, [getPhoto])

    return (
        <section className='ti-page ti-example-page'>
            <PageHeading>Пример</PageHeading>
            <div className='ti-card'>
                <Subheading>Картинка с котом</Subheading>
                <div className='ti-image-wrap'>
                    {loading && <span>Загрузка...</span>}
                    <img width="258" height="258" alt="a cat" src={photo} />
                </div>
                <Button onClick={onLoadClick}>Загрузить другую</Button>
            </div>
        </section>
    )
}

export default ExamplePage;