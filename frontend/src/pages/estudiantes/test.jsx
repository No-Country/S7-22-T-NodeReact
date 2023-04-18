const Test = ({ students }) => {
    return (
        <>
            {students.results.map((student, id) => {
                return (
                    <div key={id}>
                        <p>{student.name}</p>
                    </div>
                );
            })}
        </>
    )
}

export default Test;

export const getServerSideProps = async (ctx) => {
    const res = await fetch("https://s7-22-backend.onrender.com/api/user");
    const students = await res.json();
    console.log(students);

    return {
        props: {
            students,
        },
    };
};