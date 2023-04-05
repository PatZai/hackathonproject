import FooterComponent from '../components/Footers/Footers';
import NavbarList from '../components/Navbar/NavbarList';
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