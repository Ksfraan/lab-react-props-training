const Random = ({ min, max }) => {
    const RandomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div>
            <p>
                Random value between {min} and {max}: {RandomValue}
            </p>
        </div>
    );
};

export default Random;
