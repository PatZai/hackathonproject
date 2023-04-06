import "./style.css";
import { Link } from "react-router-dom";
const ArticleList = () => {
	return (
		<div class='container'>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Articles">Anxiety</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Articles">Depression</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Articles">Phobias</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
			<div class='article-wrapper'>
				<Link href=" " class="article-title" to="/Articles">Trauma</Link>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aliquid soluta incidunt accusamus reprehenderit!
				</p>
			</div>
		</div>
	);
};

export default ArticleList;
