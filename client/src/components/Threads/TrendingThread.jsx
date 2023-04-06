import './style.css';

const TrendingThread = () => {
    return (
        <div>
            <div class="comment-thread">
                <div class="comment1" id="comment-1">
                    <div class="comment-heading">
                        <img src=" " alt="test" class="pfp" />
                        <div class="comment-info">
                            <a href=" " class="comment-author">username1</a>
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
                                <span class="sr-only">Vote up</span>
                            </button>
                            <button type="button">
                                <span aria-hidden="true">&#9660;</span>
                                <span class="sr-only">Vote down</span>
                                <button type="button">Reply</button>
                                <button type="button">Flag</button>
                            </button>
                        </div>
                    </div>
                    <div class="comment2" id="comment-2">
                        <div class="comment-heading">
                            <img src=" " alt="test" class="pfp" />
                            <div class="comment-info">
                                <a href=" " class="comment-author">username2</a>
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
                                    <span class="sr-only">Vote up</span>
                                </button>
                                <button type="button">
                                    <span aria-hidden="true">&#9660;</span>
                                    <span class="sr-only">Vote down</span>
                                    <button type="button">Reply</button>
                                    <button type="button">Flag</button>
                                </button>
                            </div>
                        </div>
                        <div class="comment3" id="comment-3">
                            <div class="comment-heading">
                                <img src=" " alt="test" class="pfp" />
                                <div class="comment-info">
                                    <a href=" " class="comment-author">username3</a>
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
                                        <span class="sr-only">Vote up</span>
                                    </button>
                                    <button type="button">
                                        <span aria-hidden="true">&#9660;</span>
                                        <span class="sr-only">Vote down</span>
                                        <button type="button">Reply</button>
                                        <button type="button">Flag</button>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrendingThread;