import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Index = (props) => {
    return(
        <div>
            <h1>Batman TV Shows</h1>
            <ul>
            {props.shows ? 
                props.shows.map(show => (
                <li key={show.id}>
                    <Link href="/shows/[id]" as={`/shows/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            )) : <h1>null</h1>}
            </ul>
        </div>
    )
};

Index.getInitialProps = async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();
    console.log(`Show data fetched. Count: ${data.length}`);
    console.log(data)
    return { shows: data.map(entry => entry.show) };
};

export default Index;