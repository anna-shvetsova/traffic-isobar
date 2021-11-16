import PageHeading from "../controls/page-heading";
import Subheading from "../controls/subheading";

const ErrorPage = () => {
    return (
        <section className='ti-page'>
            <PageHeading>Ошибка 404</PageHeading>
            <Subheading>Страницы с таким адресом нет</Subheading>
        </section>
    )
}

export default ErrorPage;