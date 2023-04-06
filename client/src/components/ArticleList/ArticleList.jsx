import "./style.css";
import { Link } from "react-router-dom";
const ArticleList = () => {
	return (
		<div class='container'>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Anxiety">Anxiety</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Depression">Depression</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Phobias">Phobias</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Trauma">Trauma</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
		</div>
	);
};

export default ArticleList;
