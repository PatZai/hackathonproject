import FooterComponent from '../components/Footers';
import NavbarList from '../components/NavbarList';
import ArticleList from '../components/ArticleList';

const ArticleListPage = () => {
    return (
        <div>
            <NavbarList />
            <ArticleList />
            <FooterComponent />
        </div>
    )
}

export default ArticleListPage;