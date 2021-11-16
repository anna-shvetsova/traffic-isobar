import PageHeading from "../controls/page-heading";
import Subheading from "../controls/subheading";
import Button from "../controls/button";
import './home-page.css';
import photo from './photo.png';

const HomePage = () => {
    return (
        <section className='ti-page ti-home-page'>
            <PageHeading>Обо мне</PageHeading>
            <div className='ti-card'>
                <div className='ti-card-column1'>
                    <div>
                        <Subheading>Анна Швецова</Subheading>
                        <p>
                            Ищу компанию, где приветствуются сотрудники любого пола и возраста, и где смогу, наконец, приобрести опыт коммерческой разработки на React и вырасти как профессионал.
                        </p>
                    </div>
                    <Button href={'https://github.com/anna-shvetsova/traffic-isobar/tree/main/src'}>Смотреть работу</Button>
                </div>
                <div className='ti-card-column2'>
                    <img className='ti-card-img' width="400" height="400" src={photo} alt="human face"/>
                </div>
            </div>
        </section>
    )
}

export default HomePage;