import './stylepage.css';
import logo from './images/1686134831250-removebg-preview.png';
const App = () => {
    return ( <
        div className = "header-box" >
        <
        nav >
        <
        button className = 'Home' > Home < /button> <
        ul >
        <
        li > About < /li>  <
        li > Skills < /li>  <
        li > Project < /li> <
        li > Experience < /li> <
        li > Extracuricular < /li>  <
        li > Contact < /li> <
        /ul> <
        /nav> <
        header >
        <
        div className = "box1" >
        <
        h2 > Hello < /h2> <
        h1 > I am Avika Saxena < /h1> <
        /div> <
        div className = "box2" >
        <
        div className = 'content' >
        <
        h3 > About me < /h3> <
        p >
        I 'm an enthusiastic college student who loves working with software. I'
        m committed to learning and growing. <
        /p> <
        /div>

        <
        div className = 'myimage' >
        <
        div className = "myimage-in" >
        <
        img src = { logo }
        alt = 'myimage' / >
        <
        /div>

        <
        /div> <
        div className = 'content' >
        <
        h3 > "yaha kuch kuch likhenge" < /h3> <
        /div> <
        /div> <
        /header> <
        /div>
    )
}

export default App;