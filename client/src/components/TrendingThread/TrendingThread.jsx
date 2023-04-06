import './style.css';

const TrendingThread = () => {
    return (
        <div>
            <div class="comment-thread">
                <div class="comment1" id="comment-1">
                    <div class="comment-heading">
                        <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                        <div class="comment-info">
                            <a href=" " class="comment-author">User</a>
                        </div>
                    </div>

                    <div class="comment-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum. Quae animi, ipsum illum accusamus eligendi incidunt, sapiente quia itaque natus aut cum exercitationem cupiditate velit. Vitae vel expedita unde.
                        </p>
                        <div class="comment-voting">
                            <p class="m-0">
                                xx points &bull; x days ago
                            </p>
                            <button type="button">
                                <span aria-hidden="true">&#9650;</span>
                                <span class="sr-only">Like</span>
                            </button>
                                <button type="button">Reply</button>
                                <button type="button">Flag</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="comment-thread">
                <div class="comment1" id="comment-1">
                    <div class="comment-heading">
                        <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                        <div class="comment-info">
                            <a href=" " class="comment-author">User</a>
                        </div>
                    </div>

                    <div class="comment-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum. Quae animi, ipsum illum accusamus eligendi incidunt, sapiente quia itaque natus aut cum exercitationem cupiditate velit. Vitae vel expedita unde.
                        </p>
                        <div class="comment-voting">
                            <p class="m-0">
                                xx points &bull; x days ago
                            </p>
                            <button type="button">
                                <span aria-hidden="true">&#9650;</span>
                                <span class="sr-only">Like</span>
                            </button>
                                <button type="button">Reply</button>
                                <button type="button">Flag</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="comment-thread">
                <div class="comment1" id="comment-1">
                    <div class="comment-heading">
                        <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                        <div class="comment-info">
                            <a href=" " class="comment-author">User</a>
                        </div>
                    </div>

                    <div class="comment-body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptatum. Quae animi, ipsum illum accusamus eligendi incidunt, sapiente quia itaque natus aut cum exercitationem cupiditate velit. Vitae vel expedita unde.
                        </p>
                        <div class="comment-voting">
                            <p class="m-0">
                                xx points &bull; x days ago
                            </p>
                            <button type="button">
                                <span aria-hidden="true">&#9650;</span>
                                <span class="sr-only">Like</span>
                            </button>
                                <button type="button">Reply</button>
                                <button type="button">Flag</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="thread-link">
                    <a href=" ">
                        <p>More threads here</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TrendingThread;