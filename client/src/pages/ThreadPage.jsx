import NavbarList from "../components/Navbar/NavbarList";
import Thread from "../components/Threads/Thread";
import Footers from "../components/Footers/Footers";
import CommentSection from "../components/CommentReply/CommentReply";

const ThreadPage = () => {
    return (
        <>
            <NavbarList />
            <Thread />
            <CommentSection />
            <Footers />
        </>
    )
}

export default ThreadPage;