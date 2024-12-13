import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route, useNavigate} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import PostDetail from "./pages/postdetail/PostDetail.jsx";
import NewPost from "./pages/newpost/NewPost.jsx";
import NotFound from "./pages/notfound/NotFound.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import BlogCard from "./pages/blogcard/BlogCard.jsx";



function App() {
    const navigate = useNavigate();

    function handleNavigate() {
        navigate("/post/2");
    }

    return (
        <>

            <div className="page-container">
                <header>
                    <img src={logo} alt="Company logo"/>
                    <Navigation/>
                </header>
                <main>
                    <button className="button" onClick={handleNavigate}>test</button>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/post" element={<PostDetail />} />
                    <Route path="/blogcard/:blogId" element={<BlogCard />} />
                    <Route path="/newpost" element={<NewPost/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>

                </main>
            </div>


        </>
    )
}

export default App
