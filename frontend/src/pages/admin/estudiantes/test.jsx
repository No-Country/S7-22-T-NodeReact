const Test = ({ degrees }) => {
    return (
        <>
            {/*{students.result.name}*/}
            {/*{students.results.map((student, id) => {*/}
            {/*    return (*/}
            {/*        <div key={id}>*/}
            {/*            <p>{student.name}</p>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}
        </>
    )
}

export default Test;

export const getServerSideProps = async (ctx) => {
    const res = await fetch("https://s7-22-t-nodereact-production.up.railway.app/api/career/",
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // "set-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7InVzZXJJZCI6ImQ0YmNkYTc2LTJmMDctNDAzNy1hOTVjLTYyZWM4ZWNlZGFmZCIsImRuaSI6IjkyNTUtMjAwMy0wMTA1MyIsImVtYWlsIjoiam9zdWUubGFyYUBlZHV3ZWIuY29tIiwibmFtZSI6Ikpvc3VlIiwibGFzdE5hbWUiOiJMYXJhIiwiYmlydGhEYXRlIjoiMTk5MS0wNy0xNFQwMDowMDowMC4wMDBaIiwicGhvbmUiOiIrNTEgNCA1MzQyLTM0MzUiLCJhZGRyZXNzIjoiQ29saW5hIGxhcyBDYXVzYXMiLCJzdGF0ZSI6ImFjdGl2ZSJ9LCJpYXQiOjE2ODE4NDgwNTksImV4cCI6MTY4MTg1NTI1OX0.-8GESFQMujbPMdXXVhv0oLfERtBuQRzpiK3Uo2Mo-Mo",
            }
        });
    const degrees = await res.json();
    console.log(degrees)

    return {
        props: {
            degrees,
        },
    };
};