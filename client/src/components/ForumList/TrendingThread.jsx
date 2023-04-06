import './threadstyle.css';

const TrendingThread = () => {
    return (
        <div>
            <div className='home-title'>
                <h1>Community Forum</h1>
            </div>
            <div className='thread-div'>
                <div class="comment-thread">
                    <div class="comment1" id="comment-1">
                        <div class="comment-heading">
                            <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                            <div class="comment-info">
                                <a href=" " class="comment-author">Anonymous User</a>
                            </div>
                        </div>

                        <div class="comment-body">
                            <p>
                            What’s it like to talk to a professional? Sometimes I try to be open but I get shivers down my spine. It’s made me really anxious about approaching people.
                            </p>
                            <div class="comment-voting">
                                <p class="m-0">
                                    23 points &bull; 5 days ago
                                </p>
                                <button type="button" className='button'>
                                    <span aria-hidden="true">&#9650;</span>
                                    <span class="sr-only">Like</span>
                                </button>
                                <button type="button" className='button'>Reply</button>
                                <button type="button" className='button'>Flag</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="comment-thread">
                    <div class="comment1" id="comment-1">
                        <div class="comment-heading">
                            <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                            <div class="comment-info">
                                <a href=" " class="comment-author">Ahmad_96</a>
                            </div>
                        </div>

                        <div class="comment-body">
                            <p>
                            Are there more ways to be able to help people with depression aside from being there to listen and just being a good friend?
                            </p>
                            <div class="comment-voting">
                                <p class="m-0">
                                    96 points &bull; 4 days ago
                                </p>
                                <button type="button" className='button'>
                                    <span aria-hidden="true">&#9650;</span>
                                    <span class="sr-only">Like</span>
                                </button>
                                <button type="button" className='button'>Reply</button>
                                <button type="button" className='button'>Flag</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment-thread">
                    <div class="comment1" id="comment-1">
                        <div class="comment-heading">
                            <img src={require("../images/pfp.png")} alt="test" class="pfp" />
                            <div class="comment-info">
                                <a href=" " class="comment-author">Sean-Ming</a>
                            </div>
                        </div>

                        <div class="comment-body">
                            <p>
                            Is medication a good idea? I’m scared of the side effects but even more scared of what’s going to happen if it doesn’t work.
                            </p>
                            <div class="comment-voting">
                                <p class="m-0">
                                    19 points &bull; 3 days ago
                                </p>
                                <button type="button" className='button'>
                                    <span aria-hidden="true">&#9650;</span>
                                    <span class="sr-only">Like</span>
                                </button>
                                <button type="button" className='button'>Reply</button>
                                <button type="button" className='button'>Flag</button>

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
        </div>
    )
}

export default TrendingThread;